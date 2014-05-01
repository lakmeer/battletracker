
# Battletracker

Provides a model of a tabletop RPG battle encounter, with two separate views;
one to show the party, so they can visualise the initiative order and track
statuses and effects; and a secret view for the DM to change state, create new
monsters and control the encounter. The goal is to streamline the encounter
by keeping players focused and engaged.


## Setup

`package.json` in the root directory describes npm dependencies and app entry
point. Install all dependencies by running `install` in repo folder:

    $ npm install


## Running

To run Battletracker, first issue:

    $ npm start

Then open two browser windows at `http://localhost:8080` (unless you changed the
port in the configuration). Navigate one window to `/dm`, and keep it secret.
Navigate the other browser to `/party`, and make it visible to your adventuring
party.


## Development

For development, there are extra utilities to be installed globally with `-g`:

    $ sudo npm install -g nodemon mocha

Now you can invoke the server using:

    $ nodemon

Running this way will use `nodemon` to restart the server whenever a source
file is modified. Without an argument, `nodemon` runs `index.js` by default.
Restarting will halt if there is a interpreter error and try again when the
file has been touched again. This saves starting and stopping the server all
the time.


## Testing

We are using [Mocha](https://visionmedia.github.io/mocha/) for our test
framework. Run the suite with the default interface using the `mocha` util:

    $ mocha

You can specify other interfaces using `$ mocha` with the `-R` flag. A list of
interfaces can be found [here](http://visionmedia.github.io/mocha/#interfaces).
The test runner is also bound to `npm test`.

We are also using the [blanket.js code coverage tool](http://blanketjs.org/)
to keep tabs on our code coverage. Generate the test coverage report, run:

    $ npm run coverage


## Required work

Program currently consists of slightly decorated Express server featuring two
socket channels. Currently supports routes with static views, transparent
serving of LESS stylesheets, and configuration externalisation via json files.
When started, launches HTTP server, and Socket.io channel with two namespaces
maintaining separate connection pools.

#### Todo:

- Add tests for existing app scaffolding
- Define app scope and core features
- Design interfaces to support core features
- Implement core features with tests
- QA with Shaun

