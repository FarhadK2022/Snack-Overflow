# Snack Overflow

## About
Snack Overflow, inspired by Stack Overflow, is a website clone for the foodie community. Users and guests alike can come to find answers to their previously unanswered snacking questions. The site offers a plethora of public opinion on food trends, favorite recipes, community support, resources on exectuting the perfect meal, and much more! This is a tool that can be used to get your questions on cravings answered, put focus on the important food questions we all face, filter out the best solution to an unsavory situation, or guide new foodies in their culinary pursuits so we can all enjoy a delicious meal without finding ourselves in a pickle!

It has been our absolute pleasure developing this app with you (and our stomachs) in mind. We will continue to make updates and refine the site for a smoother, more mouth-watering experience. We hope you enjoy poking around the site, and that it helps with your next delicious snack or tantalizing meal!

To use the app you can either select the live link, or by downloading from the repository and following the steps listed out in the 'Getting Snackoverflow started' section below

>  Live Site Link: [Snackoverflow](https://snack-overflow.onrender.com)

## Getting Snack Overflow Started
1. Clone this repository, or download the zip and open the file.

2. Install dependencies.

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment.

4. Make sure the SQLite3 database connection URL is in the **.env** file.

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv shell, migrate the database, seed the database, and run the Flask app.

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. Then checkout the [README](./react-app/README.md) inside the `react-app` directory to run the React App.

## Wiki Links
The links below offer more details on our Database Schema, Features List, and User Stories:

[Database Schema](https://github.com/FarhadK2022/Snack-Overflow/wiki/DB-Schema)

[Features List](https://github.com/FarhadK2022/Snack-Overflow/wiki/Features-List)

[User Stories](https://github.com/FarhadK2022/Snack-Overflow/wiki/User-Stories)

## Tech Stack
Languages, Frameworks, Platforms, and Libraries used:

>  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
 SQLAlchemy, PyPI

Hosting:

>  ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

Host Database:

>  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


## Snack Overflow Splash Page
![Screen Shot 2022-12-15 at 11 45 10 PM](https://user-images.githubusercontent.com/100194132/208048905-2cf5ea86-d6ab-4952-be23-ede24f1b6893.png)

## Snack Overflow Home Page
![Screen Shot 2022-12-15 at 11 28 36 PM](https://user-images.githubusercontent.com/100194132/208046108-7d52c939-ede2-4e34-b52f-ca02a4903186.png)

## Stack Overflow Splash Page (as of December 2022)
![Screen Shot 2022-12-16 at 11 12 57 AM](https://user-images.githubusercontent.com/100194132/208191961-418f3863-4937-4e10-812d-881758893877.png)

## Stack Overflow Home Page (as of December 2022)
![Screen Shot 2022-12-16 at 11 11 02 AM](https://user-images.githubusercontent.com/100194132/208192015-5cbdfa13-a326-4338-8a1d-bb44ff107090.png)

