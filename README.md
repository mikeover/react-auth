# React Auth

A boilerplace project for an authenticated React single page application.

### Dependencies

This project only contains the front-end React code. It requires a backend that supports authentication, such as https://github.com/mikeover/node-api. That server project requires mongoDB.

### Getting Started

```
> git clone https://github.com/mikeover/node-api.git
> cd node-api
> npm install
> npm run dev
```

```
> git clone https://github.com/mikeover/react-auth.git
> cd react-auth
> npm install
> npm run start
```

#### Installing MongoDB on Mac (for server project node-api)

```
> brew install mongodb
> sudo mkdir -p /data/db
> sudo chown -R $USER /data/db
> mongod // run mongo
```
