import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get(" https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <div className="heading">{advice}</div>
          <button className="button" onClick={this.fetchQuote}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
