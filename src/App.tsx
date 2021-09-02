import React from 'react';
import { TodoList } from './components/TodoList/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;