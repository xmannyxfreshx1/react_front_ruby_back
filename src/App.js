import React, { Component } from 'react';
import Display from './Components/Display';
import './App.css';

class App extends Component {
    state ={
      contacts:[]
    };



    getContactInfo = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`https://7c8d280c.ngrok.io/`);
        const data = await api_call.json();
        this.setState({
            contacts: data,
        });

    };

    renderInfo (){
        return this.getContactInfo();
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Displaying Ruby Contacts</h1>
        </header>
          <Display getContactInfo = {this.getContactInfo} contacts={this.state.contacts}/>
          {console.log(this.state.contacts)}
      </div>
    );
  }
}

export default App;
