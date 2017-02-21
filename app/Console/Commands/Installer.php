<?php

/**
 * Part of the Data Grid Quickstart application.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Data Grid Quickstart
 * @version    1.0.0
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
 * @copyright  (c) 2011-2017, Cartalyst LLC
 * @link       http://cartalyst.com
 */

namespace App\Console\Commands;

use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Container\Container;
use App\Console\Commands\Installer\Repository;
use Symfony\Component\Console\Question\Question;

class Installer extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Data Grid Quickstart.';

    /**
     * The installer configuration repository.
     *
     * @var \App\Console\Commands\Installer\Repository
     */
    protected $repository;

    /**
     * Constructor.
     *
     * @param  \Illuminate\Container\Container  $laravel
     * @param  \App\Console\Commands\Installer\Repository  $repository
     * @return void
     */
    public function __construct(Container $laravel, Repository $repository)
    {
        parent::__construct();

        $this->laravel = $laravel;

        $this->repository = $repository;

        // Set the migrations table incase no database file exists yet
        $this->laravel['config']->set('database.migrations', 'migrations');
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire()
    {
        // Show the welcome message
        $this->showWelcomeMessage();

        // Ask for the database details
        $this->askDatabaseDetails();

        // Set the environment
        $this->repository->setEnvironment('local');

        // Create .env file
        $this->createEnvFile();

        // Setup the database
        $this->setupDatabase();

        // Run the migrations
        $this->comment('Running the migrations...');
        $this->call('migrate', [ '--force' => true ]);

        // Seed the database
        $this->comment('Seeding the database... This may take a few, grab a drink.');
        $this->call('db:seed', [ '--force' => true ]);

        $this->comment('Installation complete, code well, rock on. :)');
    }

    /**
     * Shows the welcome message.
     *
     * @return void
     */
    protected function showWelcomeMessage()
    {
        $this->output->writeln(<<<WELCOME
<fg=white>
*-----------------------------------------------*
|                                               |
| Welcome to the Data Grid Quickstart Installer |
|            Copyright (c) 2011-2015            |
|                 Cartalyst LLC.                |
|                                               |
|  Data Grid  Quickstart is released under the  |
|                 Cartalyst PSL                 |
|         https://cartalyst.com/license         |
|          Thanks for using Cartalyst!          |
|                                               |
*-----------------------------------------------*
</>
WELCOME
        );
    }

    /**
     * Prompts the user for the database credentials.
     *
     * @return void
     */
    protected function askDatabaseDetails()
    {
        // Get all the available database drivers
        $drivers = $this->repository->getDatabaseDrivers();

        // Ask the user to select the database driver
        $driver = $this->choice('Please select the database <fg=white>[driver]</>', array_keys($drivers));

        // Hold the database details
        $databaseData = [];

        // Loop through the selected driver fields
        foreach ($drivers[$driver] as $field => $config) {
            // Prepare the field name to avoid confusion
            $fieldName = $field === 'database' ? 'name' : $field;

            // Prepare the question message
            $question = 'Please enter the database <fg=white>['.$fieldName.']</>';

            // Do we have a default value?
            $default = $config['value'] ?: null;

            // Determine if the field is required
            $isRequired = $config['rules'] === 'required';

            // Determine the type of question to ask
            if ($field === 'password') {
                $method = $isRequired ? 'secret' : 'secretNotRequired';
            } else {
                $method = $isRequired ? 'ask' : 'askNotRequired';
            }

            // Ask the question to the user
            $answer = $this->{$method}($question, $default);

            // Store the answer
            $databaseData[$field] = trim($answer);
        }

        // Set the database data
        $this->repository->setDatabaseData($driver, $databaseData);
    }

    /**
     * Prompt the user for input.
     *
     * @param  string  $question
     * @param  string  $default
     * @return string
     */
    public function askNotRequired($question, $default = null)
    {
        return $this->output->ask($question, $default, $this->getValidator());
    }

    /**
     * Prompt the user for input but hide the answer from the console.
     *
     * @param  string  $question
     * @param  bool  $default
     * @return string
     */
    public function secretNotRequired($question, $default = true)
    {
        $question = new Question($question);

        $question
            ->setHidden(true)
            ->setHiddenFallback($default)
            ->setValidator($this->getValidator())
        ;

        return $this->output->askQuestion($question);
    }

    protected function getValidator()
    {
        return function ($answer) {
            return is_null($answer) ? ' ' : $answer;
        };
    }



    /**
     * Creates the .env file at the application base path.
     *
     * @return void
     */
    public function createEnvFile()
    {
        $driver = $this->repository->getDatabaseDriver();

        $database = $this->repository->getDatabaseData($driver);

        $replacements = [
            'app_key'     => Str::random(32),
            'environment' => $this->repository->getEnvironment(),
            'db_driver'   => $driver,
            'db_host'     => array_get($database, 'host', 'null'),
            'db_name'     => array_get($database, 'database', 'null'),
            'db_user'     => array_get($database, 'username', 'null'),
            'db_pass'     => array_get($database, 'password', 'null'),
            'db_prefix'   => array_get($database, 'prefix', 'null'),
        ];

        $contents = file_get_contents(__DIR__.'/Installer/stubs/.env.stub');

        foreach ($replacements as $key => $value) {
            $contents = str_replace('{'.$key.'}', $value, $contents);
        }

        file_put_contents(base_path('.env'), $contents);
    }

    /**
     * Sets up the database to work with App from the given repository.
     *
     * @return void
     */
    public function setupDatabase()
    {
        // Get the selected database driver
        $driver = $this->repository->getDatabaseDriver();

        // Get the database data for the selected driver
        $config = $this->repository->getDatabaseData($driver);

        // Override the cached database config now.
        $this->laravel['config']->set('database.default', $driver);
        $this->laravel['config']->set("database.connections.{$driver}", array_merge(
            compact('driver'), $config
        ));

        // Reconnect using the new config
        $this->laravel['db']->reconnect($driver);

        // Lets recache the config file
        $this->callSilent('config:cache');
    }
}
