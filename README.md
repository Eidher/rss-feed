# rss-feed

## Pre requirements

You need to have [Docker Compose](https://docs.docker.com/compose/install/) installed in your machine. You also going to need [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) installed.

## Project Scaffolding

There are 2 main folders, `client`, with the frontend files and `server` with the backend service (api) files

## Run Application

```shell
$ git clone --recursive https://github.com/Eidher/rss-feed
$ cd rss-feed
$ npm start
```

That's it! When it finishes, go to your browser and access the url [http://localhost:2080](http://localhost:2080).

## Run Tests

Inside root folder, run:

```shell
$ npm test
```

## TIPS

> If you want to see the lazy loading of the feeds in a slower transition, go to **Developer Tools** (Chrome) and select the option **Slow 3G** in the Network tab.

> Here's a list rss feeds to select from [https://www.uen.org/feeds/lists.shtml](https://www.uen.org/feeds/lists.shtml)

## Author

Eidher Escalona

## License
MIT
