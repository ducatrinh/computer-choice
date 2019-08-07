import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './components/ModelDetails';

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {
  state = {}

  displayChoices(data) {
    return data.map((data) => {
      return <option key={data.name} value={data.name}>{data.name} ({data.year})</option>
    })
  }

  updateSelection = event => {
    this.setState(
      data.find(model => model.name === event.target.value)
    )
  }

  addModel = model => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: { ...model }
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.models.length !== 0 &&
          this.props.models.map(model =>
            <ModelDetails
              name={model.name}
              manufacturer={model.manufacturer}
              year={model.year}
              origin={model.origin} />
          )}
        <select value={this.state.name} onChange={this.updateSelection}>
          <option value=''>-- pick a model --</option>
          {this.displayChoices(data)}
        </select>
        <button onClick={() => { this.addModel(this.state) }}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { models: [...state] }
}

export default connect(mapStateToProps)(App);
