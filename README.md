# Bravado

**Discover your listening trends.**

Bravado lets you view your top artists and tracks anytime, anywhere. No need to wait for Spotify Wrapped!

👉 [Try it out!](https://bravado.zachsvanhandel.me)

## About

Bravado is a web application that allows you to view your top artists and tracks on Spotify. You can filter by the following time periods:

- All Time
- Past 6 Months
- Past Month

The app was built with [React](https://reactjs.org/) + [Redux](https://redux.js.org/) and makes use of the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).

## Getting started

### Requirements

#### Node.js

In order to run the app locally, you will need to have [Node.js](https://nodejs.org/en/) version 10 or higher installed. To check which version of Node you are using, you can run the following command.

```
node -v
```

#### Spotify Account

If you want to run the app locally and/or deploy it to a server, you will need a [Spotify](https://www.spotify.com/) account.

### Cloning the repository

You can run the following commands to clone the repository and navigate into the project directory.

```
git clone https://github.com/zachsvanhandel/bravado.git
cd bravado
```

### Registering a Spotify App

Follow the steps below to register a new Spotify app.

1. Log in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

   - If this is your first time using Spotify Developer, you will be prompted to accept the terms of service and connect your Spotify account

2. Register your app

   - Click the <small>CREATE AN APP</small> button, add a name and description for your app, accept the terms of service, and click the <small>CREATE</small> button

3. Add redirect URI

   - Click the <small>EDIT SETTINGS</small> button, then go to the **Redirect URIs** section and add the url `http://localhost:3000/login`

4. Copy the client ID for your app

   - Copy your app's client ID, as you will need it to run and/or build the app

### Running the app locally

Before you can run the app, you will first need to install its dependencies by running the following command.

```
npm install
```

Once the dependencies are installed, run the command below to copy _**`.env.example`**_ and create a new file named _**`.env.development.local`**_. Add your app's client ID as the value for `REACT_APP_CLIENT_ID` in the newly created file.

```
cp .env.example .env.development.local
```

To start the app, run the command below.

```
npm start
```

### Building the app

First, run the command below to copy _**`.env.example`**_ and create a new file named _**`.env.production.local`**_. Add your app's client ID as the value for `REACT_APP_CLIENT_ID` in the newly created file.

```
cp .env.example .env.production.local
```

Finally, you can run the command below to generate a _**`build/`**_ directory with static files that can be deployed to a server.

```
npm run build
```

## License

Copyright 2020 Zach Van Handel. Code released under the [MIT](LICENSE.md) license.
