import React, { Component } from 'react';
import './App.css';
import EventForm from './containers/EventForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <p>
         New event
          </p>
        </header>
        <section className="app__content">
          <EventForm />
        </section>
      </div>
    );
  }
}

export default App;
