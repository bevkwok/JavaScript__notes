import './App.css';
import React, { useState } from 'react';
import User from './components/User';
import User2 from './components/User2';
import UserForm from './components/UserForm';
import HookFormDisplay from './components/HookFormDisplay';
import HookForm from './components/HookForm';

function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    hairColor: ""
  });

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

      <User firstName={ "John" } lastName="Smith" age={ 88 } 
      hairColor="grey" />

      <User2 firstName={ "User2" } lastName="Functional" age={ 10 } hairColor="React" />

      <User2 firstName={ "Millard" } lastName="Fillmore" age={ 50 } hairColor="Brown" />

      

      <HookForm input={userInfo} setInput={setUserInfo}/>

      <HookFormDisplay data={userInfo}/>


    </div>
  );
}

export default App;
