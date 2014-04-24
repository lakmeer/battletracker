
# Battletracker

## Setup

`package.json` in the root directory describes npm dependancies and app entry
point. Install all dependancies by running `install` in repo folder:

    $ npm install

Run the program with

    $ node index.js


## Testing

Testing framework is not established yet, but recommend
[Mocha](https://visionmedia.github.io/mocha/). Once the harness is set up,
`package.json` also describes a test entry point which can be run with
`npm test`


## Development

Recommend installing `nodemon` as a system utility:

    $ sudo npm install -g nodemon

This gives you the `nodemon` command-line util which replaces `node` in
invocations:

    $ nodemon index.js

Running this way will restart the server whenever a source file is modified.
Restarting will halt if there is a interpreter error and try again when the
file has been touched again. This saves starting and stopping the server all
the time.

This process could also migrate to [Grunt](https://github.com/gruntjs/grunt) if
grunt becomes appropriate to control build cycles in the project's future
development. Grunt also supports LiveReload via `grunt-contrib-watch` which
would further optimise the iteration cycle.


## Required work

Program currently consists of slightly decorated Express server featuring two
socket channels. Currently supports routes with static views, transparent
serving of LESS stylesheets, and configuration externalisation via json files.
When started, launches HTTP server and two Socket.io sockets maintaining
separate connection pools.

#### Todo:

- Add test framework, probably Mocha
- Add tests for existing app scaffolding
- Define app scope and core features
- Design interfaces to support core features
- Implement core features with tests
- QA with Shaun

