import { Counter } from '@features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App relative h-screen">
      <header className="App-header text-center">
        <h1 className='text-4xl py-10'>Welcome to base project</h1>
        <Counter />
      </header>
      <footer className='text-center absolute bottom-1 w-full'>
        <p className='text-2xl'>project created by: Mohammed aljasem</p>
      </footer>
    </div>
  );
}

export default App;
