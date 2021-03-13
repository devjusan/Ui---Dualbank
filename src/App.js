import './App.css';
import AccountBalance from './Components/AccountBalance';
import Balance from './Components/Balance/Balance';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AccountBalance />
      <Balance />
    </div>
  );
}

export default App;
