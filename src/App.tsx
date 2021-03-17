import './App.sass';
import NewTask from './components/NewTask';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container">
          <NewTask />
          <TodoList />
      </div>
    </div>
  );
}

export default App;
