import React, {Component} from 'react';
import './App.css';
import {NamedExports} from './components/NamedExports';
import {AnotherNamedExport} from './components/NamedExports';
import ClassComponent from './components/ClassComponents';
import CreateAnElement from './components/CreateAnElement';
import Employee2 from './components/LifecycleMethods';
import logo from './logo.svg';
import CountCharacters from './components/State';
import ShowAndHide from './components/ShowAndHide';
import State from "./components/State";
import Props from "./components/Props";
import ChildrenProps from "./components/ChildrenProps";
import ChildrenPropsClass from "./components/ChildrenPropsClass";
import MessageState from "./components/MessageState";
import CounterBadExample from "./components/CounterBadExample";
import Counter from "./components/Counter";
import DestructuringPropsState from "./components/DestructuringPropsState";
import FunctionClick from "./components/FunctionClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<NamedExports />*/}
          {/*<AnotherNamedExport />*/}
          {/*<ClassComponent />*/}
          {/*<CreateAnElement />*/}
          {/*<CountCharacters />*/}
          {/*<Employee2 />*/}
          {/*<State />*/}
          {/*<ShowAndHide />*/}
          {/*<Props name="Bruce" heroName="Batman" />*/}
          {/*<Props name="Clark" heroName="Superman" />*/}
          {/*<ChildrenProps name="George">*/}
          {/*  <p>This is Children Props</p>*/}
          {/*</ChildrenProps>*/}
          {/*<ChildrenPropsClass />*/}
          {/*<MessageState />*/}
          {/*<Counter />*/}
          {/*<DestructuringPropsState />*/}
          <FunctionClick />
        </header>
      </div>
    );
  }
}

export default App;
