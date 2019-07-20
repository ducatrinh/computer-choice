import React, { Component } from 'react';
import './App.css';

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

function displayData(data) {
  return data.map(data => {
    return <option value={data.name}>{data.name} ({data.year})</option>
  })
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.updateSelection = this.updateSelection.bind(this)
  }

  updateSelection(event) {
    this.setState({value: event.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <select value={this.state.value} onChange={this.updateSelection}>
          <option value=''>-- pick a model --</option>
          {displayData(data)}
        </select>
      </div>
    );
  }
}

export default App;
