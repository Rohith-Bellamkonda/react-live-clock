import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  UpdateTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };
  componentDidMount() {
    this.abcd = setInterval(() => this.UpdateTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.abcd);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
export default App;
