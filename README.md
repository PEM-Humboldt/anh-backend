*[**Archived repo**] This project has been discontinued.*
# ANH Backend
Backend side for ANH dashboard.

### Prerequisites
You'll need nodejs v8.16+ and npm v6.4+ to run the project.

### Install dependencies
After cloning the project, install its dependencies running: `npm i`

### Setup
Copy the [config file](config/default.json) with the name of the environment you're running, this name needs to be the same as the env var **NODE_CONFIG_ENV**.

By default **NODE_CONFIG_ENV** is *develop*, so you'll need to create *config/develop.json* and set minimum the "db" parameters.

### Run
Run `npm start` to start the server, this will launch nodemon ready to watch your changes.

### Deploy
To deploy you need Docker v18.09+ and docker-compose v1.22+

* Build image

  `docker-compose build --no-cache`
* Start container

  `docker-compose up -d`

## Tests
There are no tests currently.

## Documentation
You can generate the API documentation with `npm run gen_docs`, it will generate them under the */docs* folder

## Contributing

There are no guidelines for contribution currently.

## Authors
Ingeniería de Datos y Desarrollo, Programa de Evaluación y Monitoreo de la Biodiversidad, Instituto Alexander von Humboldt Colombia

## License
This project is licensed under the MIT License.
