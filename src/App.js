import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import { fetchTickets } from './api';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');

  useEffect(() => {
    const getData = async () => {
      const { tickets, users } = await fetchTickets();
      setTickets(tickets);
      setUsers(users);
    };
    getData();
  }, []);

  return (
    <KanbanBoard
      tickets={tickets}
      users={users}
      grouping={grouping}
      setGrouping={setGrouping}
    />
  );
};

export default App;
