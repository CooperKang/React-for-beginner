import Button from './Button.js';
import style from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={style.title}>Welcome back!</h1>
      <Button text="welcome" />
    </div>
  );
}

export default App;
