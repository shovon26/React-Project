import logo from './logo.svg';
import './App.css';
import './Component/Clock'
import Clock from "./Component/Clock";
import ClockList from "./Component/ClockList";
function App() {
    // console.log('App component called');
    const quantities = [1, 2, 3];
  return (
    <div className="App">
      <ClockList quantities={quantities}/>
    </div>
  );
}

export default App;
