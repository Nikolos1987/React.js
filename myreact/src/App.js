
import './App.css';
import { Message } from './components/message'
import { Count, Btn } from './components/counter';
import { useEffect, useState } from 'react';
import { Mess } from './components/test/test';

function App() {
  const [messages, setMessages] = useState([
  ]);
  const [test, setTest] = useState([]);
  const [counter, setCounter]=useState(1)

   const[robotuswear,setrob]=useState(['привет как дела','отлично выглядишь']) 
  useEffect(() => {
    console.log(Math.floor((Math.random()*10)/5))
    setCounter((revcounter=>revcounter+Date.now()));
    let robot = {
      id:counter,
      autor: "robot",
      post: robotuswear[Math.floor((Math.random()*10)/5)]
    };
    if (messages.length > 0) {
      
      if (messages[messages.length - 1].autor === 'user') {
       function alert(){
        setMessages([...messages,robot])
       }
        setTimeout(alert, 3000);
       
      }
      console.log(messages)
    }

  
  }, [messages])


  const updateData = (value) => {

    setTest(value)
  }
  const handleAddMessage = (text) => {
    setMessages([...messages, text])

  }
  return (
    <div className="App">

      {messages.map((text) => <Message key={text.id} teext={text} />)}
      <Count onSubmit={handleAddMessage} />
      <Btn onClick={updateData} />
      <Mess test={test} />
    </div>
  )
}

export default App;
