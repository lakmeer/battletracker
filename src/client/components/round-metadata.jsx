
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="encounter-metadata">
        <div className="data">
          <label> Round: </label> { this.props.data.round }
        </div>

        <div className="data">
          <label> Turn: </label> { this.props.data.turn }
        </div>

        <div className="data">
          <label> Phase: </label> { this.props.data.phase }
        </div>
      </div>
    )
  }
});

