## Recipe Box

Recipe box is a small web app that allows you to create recipes, and save other people's recipes that also use the app.

## Installation

If you want to run your own copy of it on a home server, you will need npm and bundle installed on your machine.
Clone the repo, cd into the folder, then run `npm i --prefix client` and `bundle i`.

You can also use the deployed version of the app [here.](https://sheltered-beach-55238.herokuapp.com/)

## Usage

To create the database from your computer, type `rails db:create db:migrate`. If you want to use the seed files, add `db:create` to the previous command.
To start the app, type `rails s`. Then, in a separate terminal, type `npm start --prefix client`. From there you can navigate to http://localhost:3000 to run the app.

Usage of the app is fairly straightfoward: You can sign up for an account, create recipes, save other people's recipes. You can unsave recipes from your profile, but you cannot delete them from the database unless you are logged in as admin. If you do not use the seeds provided, the first account created will be assigned admin privileges.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
