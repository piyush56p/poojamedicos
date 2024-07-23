import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pooja Medicos</h1>
      </header>
      
      <main className="app-main">
        <div className="button-container">
          <button className="big-button">New Bill</button>
          <button className="big-button">Previous Bills</button>
          <button className="big-button">Show or Add Items</button>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; Pooja Medicos</p>
      </footer>
    </div>
  );
}

export default Home;
