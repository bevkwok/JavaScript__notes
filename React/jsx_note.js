// JSX = syntactic sugar for React
// need transpiler called Babel or will have syntax error
// can use Babel by adding its script


// Raw JS version of (React.createElement)
const App = () => {
    return React.createElement("h1", {}, "Hello");
}
ReactDOM.render(App(), document.getElementById("root"));
//JSX version
ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));
//After Babel translation
ReactDOM.render(React.createElement("h1", null, "Hello"), document.getElementById("root"));

//Another way
const App = () => <h1>Hello World!</h1>;
ReactDOM.render(<App></App>, document.getElementById("root"));
// HTML tag begins with lower letter, React uses uppercase

//if there are nothing in <App></App> tag, ok to self close
ReactDOM.render(<App />, document.getElementById("root"));

// * create-react-app help install React and able to use JSX without adding dependencies