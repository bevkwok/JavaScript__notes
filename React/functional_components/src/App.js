import HookForm from './components/HookForm';
import './App.css';
import ValidationForm from './components/ValidationForm';
import ReducerCount from './components/ReducerCount';
import ReducerToDo from './components/ReducerToDo';

function App() {
  return (
    <div className="App">
      <h2>Simple Form</h2>
      <HookForm />
      <hr></hr>
      <h2>Form with Validation</h2>
      <ValidationForm />
      <hr></hr>
      <h2>useReducer example 1</h2>
      <ReducerCount />
      <hr></hr>
      <h2>To Do List</h2>
      <ReducerToDo />
    </div>
  );
}

export default App;
