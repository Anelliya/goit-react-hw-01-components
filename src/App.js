import './App.css';

import Profile from './components/profile/Profile'
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friendList/FriendList'
import TransactionHistory from "./components/transactions/TransactionHistory";

import user from './components/data/user.json'
import transactions from './components/data/transactions.json'
import friends from './components/data/friends.json'
import statisticalData from './components/data/statistical-data.json'



function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics statistics={statisticalData} title='Upload stats' />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
