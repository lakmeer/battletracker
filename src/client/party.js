
var React         = require('react'),
    TestComponent = require('./components/testComponent.jsx');

window.onload = function () {
  React.renderComponent(
    TestComponent({ text : "TestComponent is working" }),
    document.getElementById('example')
  );
};

