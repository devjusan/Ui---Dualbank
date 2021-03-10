import './App.css';
import AccountBalance from './Components/AccountBalance';
import Balance from './Components/Balance/Balance';
import Header from './Components/Header';
import Items from './Components/Items';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="topMenu" />
      <AccountBalance />
      <Balance />
      <Items />
    </div>
  );
}

export default App;
