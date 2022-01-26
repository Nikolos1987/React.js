import logo from './logo.svg';
import './App.css';
import { Message } from './components/message'
const strings="react"
function App() {
  return (
    <div className="App">
        <Message text='first' react={strings}/>
    </div>
  );
}

export default App;
