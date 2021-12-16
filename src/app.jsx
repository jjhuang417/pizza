import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PizzaList from './PizzaList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pizzas: []
    }
  }

  componentDidMount() {
    axios.get('/pizzas')
    .then((response) => {
      console.log(response.data)
      this.setState({pizzas: response.data})
    })
    .catch((error) => {
      console.log('GET request failed')
    })
  };

  render() {
    return (
      <div>
        <h1>Pizza App</h1>
        <h2>Pizza List</h2>
        <PizzaList pizzas={this.state.pizzas}/>
      </div>
    )
  }
}

// refactor app to a class component
// import the pizzas
// create a child component to display the name and recipe
// try to dynamically render all 3 pizzas and their recipes

ReactDOM.render(<App />, document.getElementById('app'))