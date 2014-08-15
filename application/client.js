var React = require("react");

var containerSelector = "body";

var mountReact = function() {
  var container = document.querySelector(containerSelector);

  if (!container) {
    return false;

  } else {
    React.renderComponent(
      require("./routes.jsx"),
      container
    );

    return true;
  }
};

if (!mountReact()) {
  window.addEventListener(
    "DOMContentLoaded",
    mountReact
  );
}
