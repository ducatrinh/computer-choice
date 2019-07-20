import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

function displayData(data) {
  return data.map((data, i) => {
    return <option key={i} value={data.name}>{data.name} ({data.year})</option>
  })
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
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
    }

    this.updateSelection = this.updateSelection.bind(this)
  }

  updateSelection(event) {
    this.setState(
      this.state.data.find(model => model.name === event.target.value)
    )
  }

  addModel = (model) => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: {
        name: model.name,
        manufacturer: model.manufacturer,
        year: model.year,
        origin: model.origin
      }
    })
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.name} onChange={this.updateSelection}>
          <option value=''>-- pick a model --</option>
          {displayData(this.state.data)}
        </select>
        <button onClick={() => {this.addModel(this.state)}}>Add</button>
      </div>
    );
  }
}

export default connect()(App);
