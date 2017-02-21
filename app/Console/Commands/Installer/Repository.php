<?php

/**
 * Part of the Data Grid Quickstart application.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the license.txt file.
 *
 * @package    Data Grid Quickstart
 * @version    1.0.0
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
 * @copyright  (c) 2011-2017, Cartalyst LLC
 * @link       http://cartalyst.com
 */

namespace App\Console\Commands\Installer;

class Repository
{
    /**
     * The selected application environment.
     *
     * @var string
     */
    protected $environment;

    /**
     * The selected database driver.
     *
     * @var string
     */
    protected $databaseDriver;

    /**
     * The database configuration data.
     *
     * @var array
     */
    protected $databaseData = [

        'sqlite' => [
            'database' => null,
            'prefix'   => null,
        ],

        'mysql' => [
            'host'      => '127.0.0.1',
            'database'  => null,
            'username'  => null,
            'password'  => null,
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => null,
        ],

        'pgsql' => [
            'host'     => '127.0.0.1',
            'database' => null,
            'username' => null,
            'password' => null,
            'charset'  => 'utf8',
            'prefix'   => null,
            'schema'   => 'public',
        ],

        'sqlsrv' => [
            'host'     => '127.0.0.1',
            'database' => null,
            'username' => null,
            'password' => null,
            'prefix'   => null,
        ],

    ];

    /**
     * The database validation rules.
     *
     * @var array
     */
    protected $databaseRules = [

        'sqlite' => [
            'database' => 'required',
        ],

        'mysql' => [
            'host'      => 'required',
            'database'  => 'required',
            'username'  => 'required',
            'charset'   => 'required',
            'collation' => 'required',
        ],

        'pgsql' => [
            'host'     => 'required',
            'database' => 'required',
            'username' => 'required',
        ],

        'sqlsrv' => [
            'host'     => 'required',
            'database' => 'required',
            'username' => 'required',
        ],

    ];

    /**
     * Returns the selected application environment.
     *
     * @return string
     */
    public function getEnvironment()
    {
        return $this->environment;
    }

    /**
     * Returns the selected application environment.
     *
     * @param  string  $environment
     * @return $this
     */
    public function setEnvironment($environment)
    {
        $this->environment = $environment;

        return $this;
    }

    /**
     * Returns all the available database drivers.
     *
     * @return array
     */
    public function getDatabaseDrivers()
    {
        $drivers = [];

        foreach ($this->getDatabaseData() as $driver => $fields) {
            $rules = $this->getDatabaseRules($driver);

            foreach ($fields as $field => $value) {
                $drivers[$driver][$field] = [
                    'value' => $value,
                    'rules' => array_get($rules, $field),
                ];
            }
        }

        return $drivers;
    }

    /**
     * Returns the database driver.
     *
     * @return string
     */
    public function getDatabaseDriver()
    {
        return $this->databaseDriver;
    }

    /**
     * Sets the selected database driver.
     *
     * @param  string  $driver
     * @return void
     * @throws \RuntimeException
     */
    public function setDatabaseDriver($driver)
    {
        if (! isset($this->databaseData[$driver])) {
            throw new \RuntimeException("Database configuration does not exist for driver [{$driver}].");
        }

        $this->databaseDriver = $driver;
    }

    /**
     * Returns the database configuration data.
     *
     * @param  string  $driver
     * @return array
     */
    public function getDatabaseData($driver = null)
    {
        if (! $driver) {
            return $this->databaseData;
        }

        return array_get($this->databaseData, $driver, []);
    }

    /**
     * Sets the database configuration data.
     *
     * @param  string  $driver
     * @param  array  $data
     * @return $this
     */
    public function setDatabaseData($driver, array $data = [])
    {
        $this->setDatabaseDriver($driver);

        $this->databaseData[$driver] = array_merge(
            $this->databaseData[$driver], $data
        );

        return $this;
    }

    /**
     * Returns the given database driver rules.
     *
     * @param  string  $driver
     * @return array
     */
    public function getDatabaseRules($driver = null)
    {
        if (! $driver) {
            return $this->databaseRules;
        }

        return array_get($this->databaseRules, $driver, []);
    }
}
