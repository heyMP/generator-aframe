# generator-aframe [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A generator for Aframe

## Installation

### Install via Docker

Run the magic Docker command using the [generator-aframe docker image.](https://hub.docker.com/r/heymp/generator-aframe/)
```
docker run -it --rm -v `pwd`:/home/node/html heymp/generator-aframe:latest
```

### Install Manually

First, install [Yeoman](http://yeoman.io) and generator-aframe using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-aframe
```

Then generate your new project:

```bash
yo aframe
```

## Development

### Creating a release

Tag latest
```
git tag -f latest
```

Increment Version
```
npm version [major | minor | patch]
```

Push tags
```
git tags --push -f
```

Publish to npm
```
npm publish
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [heyMP]()


[npm-image]: https://badge.fury.io/js/generator-aframe.svg
[npm-url]: https://npmjs.org/package/generator-aframe
[travis-image]: https://travis-ci.org/heyMP/generator-aframe.svg?branch=master
[travis-url]: https://travis-ci.org/heyMP/generator-aframe
[daviddm-image]: https://david-dm.org/heyMP/generator-aframe.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/heyMP/generator-aframe
[coveralls-image]: https://coveralls.io/repos/heyMP/generator-aframe/badge.svg
[coveralls-url]: https://coveralls.io/r/heyMP/generator-aframe
