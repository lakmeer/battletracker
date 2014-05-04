
var React = require('react');

var Roster         = require('./roster');
var RoundMetadata  = require('./round-metadata');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="layout-columns">
        <div className="col">
          <Roster data={this.props.model.roster} current={this.props.model.currentTurn} />
        </div>

        <div className="col">
          <RoundMetadata data={this.props.model.metadata} />
        </div>
      </div>
    );
  }
});

