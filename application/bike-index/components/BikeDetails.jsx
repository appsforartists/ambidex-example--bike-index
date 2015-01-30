var React = require("react/addons");
var Ambidex = require("ambidex");

var BikeDetails = React.createClass({
  mixins: [
    Ambidex.mixinCreators.connectStoresToLocalState("CurrentBike"),
    Ambidex.mixins.Title
  ],

  getSectionTitle() {
    var model = this.state.currentBike;
    if (model) return model.name || model.title;
  },

  render() {
    var model = this.state.currentBike;

    if (!model) return <div className = "BikeDetails">Loading…</div>;

    var photos = model.images.map(imageMetaData => (
        <li key={imageMetaData.image.large.url}>
          <img src={imageMetaData.image.large.url}/>
        </li>)
    );

    var tbody = model.components.filter(
        component => component.manufacturerName && component.modelName
    ).map((component, i) => (
        <tr key={i}
          <td>{ component.componentType }</td>
          <td>${component.manufacturerName} ${component.modelName}</td>
        </tr>
      )
    );

    return (
      <div className = "BikeDetails">
        <ul className = "Photos">{photos}</ul>
        <div className = "Body">
          <header>
            <h1>{model.name}</h1>
            <h2>{model.title}</h2>
          </header>
          <p className = "Description">{model.description}</p>
          <table className = "Components">
            <tbody>{tbody}</tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = BikeDetails;
