/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h2>Hello, { this.props.text }!</h2>
  }
});

