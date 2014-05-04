
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <span className={ 'status ' + this.props.data.color}> { this.props.data.name } </span>;
  }
});

