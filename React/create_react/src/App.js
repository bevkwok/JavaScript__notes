import './App.css';
import React from 'react';
import User from './components/User';



function App() {
  return (
    <div className="App">
      <h1>Remember to import React from 'react' so you can use JSX</h1>
      <h2>This is a App.js file in src folder. All components is in here</h2>
      <h3>Other components may have their own children components</h3>
      <h4>Component in the App react tag will get inserted in the div with id = root</h4>
      <hr></hr>
      <h2>
        Components will be rendered by ReactDOM
      </h2>
      <h3>
        React app will be compiled and imported in the index.html via script tags
      </h3>
      <h4>
        All changes to the DOM are in div(id = root), 
      </h4>
      <hr></hr>

      <h2>the App call ReactDOM.render in src/index.js. it send in the APP / component</h2>
      <h3>Make a folder called components in the src folder</h3>

      <hr></hr>

      <User firstName={ "Jane" } lastName="Doe" age={ 45 } hairColor="Black" />

      <User firstName={ "John" } lastName="Smith" age={ 88 } hairColor="grey" />

      <User firstName={ "Millard" } lastName="Fillmore" age={ 50 } hairColor="Brown" />

    </div>
  );
}

export default App;
