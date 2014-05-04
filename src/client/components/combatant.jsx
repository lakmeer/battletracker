
var React = require('react');

var Status = require('./status');

module.exports = React.createClass({
  render: function () {

    var i = 100, gen = function () { return i++; };

    var statuses = this.props.data.statuses.map(function (it) {
      return <Status data={it} key={gen()} />;
    });

    var isCurrent = false;

    return (
      <tr className={ "combatant" + ( isCurrent ? ' current' : '') }>
        <td className="name">{ this.props.data.name }</td>
        <td className="hp">{ this.props.data.hp }</td>
        <td className="statuses">{ statuses }</td>
      </tr>
    );
  }
});
