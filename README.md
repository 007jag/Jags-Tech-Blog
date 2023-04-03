# jags-tech-blog

![Badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Technology](#technology)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
---
To set up this project, follow these steps:

Firstly, fork this repository on Github.
Next, clone this project to your local machine using the command "git clone + URL".
Once you have cloned the project, open it in VS Code. To do this, navigate to the project's directory in your terminal (using "cd foldername") and then type "code ."
If you do not have Node.js already installed, visit their website and install it.
Similarly, if you do not have MySQL installed, visit their website and install it. 
It is recommended to install Nodemon if you have not done so already. You can install it using npm (Node Package Manager).
Run "npm install" in the project directory to install these dependencies.

<br>

## Technology
---
- Javascript
- Node.js
- Git
- Heroku 
- Insomnia
- nodemon 
- express
- dotenv
- mysql2
- sequelize 
- bcrypt
- connect-session-sequelize
- express-handlebars
- express-session

<br>

## Description
---
This project is a tech blog site.  The intent of this project was to build a blog where tech enthusiasts could exchange their ideas, opinions, articles, and blog posts. When you first visit the site, the homepage displays previous blog posts as well as a navbar to help you navigate the site. If you attempt to move away from the site, you will be routed to the login page until you login. You'll note there's also a signup option on the login page. When you create an account, you will be instantly logged in. Whenever you sign up or log in, you will be taken to your dashboard, which serves as your landing platform.

## Usage 
---
Once you have completed the installation process, follow these steps to set up and run the program:

Open your terminal and navigate to the database file.
Type the command "mysql -uroot -p" and enter your password when prompted (note: keystrokes will not show).
Run the command "SOURCE schema.sql" to create the database and tables.
Alternatively, you can use the command "npm run resetdb" to reset the database with sample data. Enter your password when prompted.
Type "quit" to exit the MySQL interface.
In the root folder of the program, create a file called ".env" and include the following information:
DB_NAME='your-database-name'
DB_USER='your-database-user'
DB_PW='your-database-password'
DB_SESSION_SECRET='your-session-secret'
Open the "server.js" file in your integrated terminal.
Use the command "npm run seed" (or "node seeds/index.js") to populate the database with sample data (if desired).
Use the command "npm run start" (or "node server.js") to start the server. Alternatively, if you have Nodemon installed, use "npm run watch" (or "nodemon server.js").
Open your preferred web browser and go to 'localhost:3001' to view the program in action.
Use the login, logout, and signup features as needed, create new blog posts or edit existing ones, and add comments to blog posts.
When you are finished, use CONTROL-C to stop Nodemon in the terminal, and end the session. 
<br>

## License 
---
[MIT License](./LICENSE) <br>

Copyright (c) 2023 Jagmit Cheema

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## Tests

no tests are needed for this project 

## Contributing 
---
This project was completed by Jagmit Cheema

<br>

## Questions?
---
if you have any questions dont hesitate to contact me through email jagmitsingh2003@gmail.com
