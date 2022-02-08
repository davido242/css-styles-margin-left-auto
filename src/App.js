import React from 'react';
import ant from './snap.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex-shiit-wrap'>
        <div className='item-1'>
          <button>Left Shiit!</button>
        </div>
        <div className='item-2'>
          <div className='sub-item-1'>One to the righty1</div>
          <div className='sub-item-2'>
            <button>Two d right2</button>
            </div>
        </div>
      </div>
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
