
var React = require('react');

var TestComponent = require('./components/testComponent.jsx');

window.onload = function () {
  React.renderComponent(
    TestComponent({ text : "TestComponent is working" }),
    document.getElementById('example')
  );
};

