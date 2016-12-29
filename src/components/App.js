import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor() {
    super()
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  }
// pass this function down with props to AddFishForm
// takes an argument, that's an object and updates the Apps state
  addFish(fish) {
    //Make copy of state for silly reasons no one knows...
    const fishes = {...this.state.fishes};
    //Date.now() is unique ID
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes: fishes })

  }

  loadSamples(){
    this.setState({fishes: sampleFishes})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='A really nice fish' />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(fuckshit => <Fish key={fuckshit} details={this.state.fishes[fuckshit]}/>)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>

    )
  }
}

export default App;
