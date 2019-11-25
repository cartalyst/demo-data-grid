### Purpose

Quickly get up to speed on library usage by installing this application. Demo applications include one or more examples of a given library in action.

Each example is broken down into files based on purpose and each includes it's own tutorial. These tutorials outline the purpose of each file and where its been implemented within the applications structure.

Demo applications are built on Laravel. If you're not familiar with the Laravel framework a good place to start is by reading through the [Laravel Documentation](http://laravel.com/docs).

---

### Requirements

Ensure you meet the following requirements.

1. An active membership. [Learn More](https://cartalyst.com/pricing)
2. PHP >= 5.6.4
3. OpenSSL PHP Extension
4. PDO PHP Extension
5. Mbstring PHP Extension
6. Tokenizer PHP Extension
7. XML PHP Extension
8. A Database Engine - Mysql (preferred), sqlite, pgsql, sqlsrv)

---

### Download

Cloning the repository using the link below. You can also [download](https://github.com/cartalyst/demo-data-grid/archive/master.zip) the repository from [Github](https://github.com/cartalyst/demo-data-grid)

Or via the command line.

```
git clone git@github.com:cartalyst/demo-data-grid.git
```

---

### Installation

1. Change directories into the location you cloned/downloaded the application.
2. Make sure composer is installed and run `composer install`
3. Run `cp .env.example .env`
4. Run `php artisan key:generate`
5. Setup your database credentials on the `.env` file
6. Run `php artisan migrate --seed` to run migrations and seed the database. This will take a few minutes to complete.
7. Boot up your server!

Code well, rock on!
