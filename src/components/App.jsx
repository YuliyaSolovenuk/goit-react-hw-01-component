import data from 'data/data.json';
import user from 'data/user.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from './socialProfile/Profile';
import { Statistics } from './statisticsSection/StatisticsList';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />;

    </div>
  );
};
