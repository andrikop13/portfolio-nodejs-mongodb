<h1 align="center">
  andrikopoulosdev.com
</h1>

<p align="center">
  This project is the backend service of my personal portfolio <a href="https://andrikopoulosdev.com" target="_blank">andrikopoulosdev.com</a> and is built with <a href="https://expressjs.com/" target="_blank">Express.js</a> and <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>. You can check the repo of portfolio website out <a href="https://github.com/andrikop13/my-portfolio" target="_blank">here</a>.
</p>

<p align="center">
  <img src='https://raw.githubusercontent.com/andrikop13/portfolio-nodejs-mongodb/master/dev-data/cover_image.png' alt='Mern stack image'>
</p>

# About The Project

This project is a REST API that provides all the CRUD operations are needed for my portfolio website ( <a href="https://github.com/andrikop13/my-portfolio" target="_blank">repository</a> ) to be functional. I has implemented three main routes that handle requests for projects, jobs and users, by also using authentication & authorization controllers. Moreover, i used strategies such as data sanitization to prevent NoSQL query injection and cross-site-scripting, as well as libraries to prevent parameter pollution and set rate limits of the HTTP requests that the same IP can send to the server.

## Built with

- [Node.js](https://nodejs.org/en/about/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs)
- [Validator](https://www.npmjs.com/package/validator)

<br/>

# Installation

1. Clone the repo
   ```sh
   git clone https://github.com/andrikop13/portfolio-nodejs-mongodb
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter Enviroment variables in `.env.production`
   ```
    NODE_ENV=production
    PORT=3000
    DATABASE=mongodb+srv://<username>:<password>******/<databaseName>?*****
    DATABASE_PASSWORD=********
    JWT_SECRET=********
    JWT_EXPIRES_IN=<minutes>
    EMAIL_USERNAME=<mail_provider_username>
    EMAIL_PASSWORD=<mail_provider_password>
    EMAIL_HOST=<your_smtp_host>
    EMAIL_PORT=<smtp_mail_port>
   ```
4. Use `package.json` to start in development server or build the app for production

<!-- LICENSE -->
<br/>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

#### Andreas Andrikopoulos

- [LinkedIn Profile](https://www.linkedin.com/in/a-andrikopoulos/)
- andreas.andrikopoulos1994@gmail.com

Project Link: [https://github.com/andrikop13/my-portfolio](https://github.com/andrikop13/portfolio-nodejs-mongodb)

<p align="right">(<a href="#top">back to top</a>)</p>
