import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Contexts/UserContext";
// import {Component} from "react";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <UserProvider>
//         <App></App>
//       </UserProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let hidden = null;
let visibilityChange = null;
if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support 
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

class Hello extends React.Component {

  state = {
    actions: []
  }

  componentDidMount() {
    document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
  }

  handleVisibilityChange = () => {
    if (document[hidden]) {
     this.setState({actions: [...this.state.actions, 'hide']});
    } else {
     this.setState({actions: [...this.state.actions, 'show']});
    }
  }

  componentWillUnmount()    {
    document.removeEventListener(visibilityChange, this.handleVisibilityChange);
  }

  render() {
    return (
      <ul>
      {
        this.state.actions.map((item, key) => <li key={key}>{item}</li>)
      }
    </ul>
    )
  }
}

// ReactDOM.render(
//   <Hello />,
//   document.getElementById('container')
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App></App>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);