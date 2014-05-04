
var React = require('react');

var Combatant = require('./combatant');

module.exports = React.createClass({
  render: function () {
    var combatants = this.props.data.members.map(function (it) {
      return <Combatant data={it} key={it.id} />
    });

    return <table className="roster"> {combatants} </table>;
  }
});

