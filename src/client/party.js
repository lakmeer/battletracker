
// Get view engine

var React = require('react');


// Get root component for this view

var PartyView = require('./components/party-view');


// Mock model

var statuses = {
  sleep:  { name: "Sleep",  color: "blue"  },
  fire:   { name: "Fire",   color: "red"   },
  poison: { name: "Poison", color: "green" },
  inc:    { name: "Inc.",   color: "grey"  }
}

var tempModel = {
  roster: {
    members: [
      { id: 1, name: "Player A",  hp: 100, statuses: [ statuses.fire, statuses.sleep ] },
      { id: 2, name: "Monster B", hp: 90,  statuses: [] },
      { id: 3, name: "Player B",  hp: 56,  statuses: [ statuses.poison ] },
      { id: 4, name: "Monster A", hp: 37,  statuses: [ statuses.inc ] }
    ]
  },
  state: {
    currentTurn: 2
  },
  metadata: {
    round: 9,
    turn: "Monster B",
    phase: "Start"
  }
}


// When ready, Render model to specified element

window.onload = function () {

  console.log("Rendering: party");

  React.renderComponent(
    PartyView({ model : tempModel }),
    document.getElementById('party-view')
  );

};

