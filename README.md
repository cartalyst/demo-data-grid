## Data-Grid Demo

This is a basic demo showing some of the functionality of the Data-Grid package.

> *Note:* This demo is not a fully-fledged app. It's a demo, so we're not covering every possible scenario or completed every endpoint.

### Installation

To install this demo, firstly you must be a subscriber of Cartalyst's [Arsenal](https://cartalyst.com/arsenal).

1. Clone this repository by running `git clone git@github.com:cartalyst/demo-data-grid.git` on your CLI
2. Run `composer install` from your terminal
3. Run `cp .env.example .env`
4. Run `php artisan key:generate`
5. Setup your database credentials on the `.env` file
6. Run `php artisan migrate --seed` to run migrations and seed the database. This will take a few minutes to complete.
7. Boot up your server!
