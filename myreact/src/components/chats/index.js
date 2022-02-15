import { Message } from '../message'
import { Count } from '../counter';
import { useEffect, useState } from 'react';
import{ChatList} from "../Chatlist";
import { useParams } from 'react-router-dom';
// const chats=[{id:'chat__1'}];
// const messages={
//   chat__1:[],
//   chat__2:[],
//   chat__3:[]
// }

export const Chats=()=>{

  const params=useParams()
const {ChatId}=params

    const [messages, setMessages] = useState({
      chat__1:[],
      chat__2:[],
      chat__3:[]
    });
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
        
        if (messages[ChatId] [messages[ChatId].length - 1].autor === 'user') {
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

      setMessages((prevMessageList)=>({
        ...prevMessageList,
        [ChatId]:[...prevMessageList[ChatId], text]}))
  
    }
   console.log (ChatId)
    return(
        <div className="App">
          
      {messages[ChatId].map((text) => <Message key={text.id} teext={text} />)}
      <Count onSubmit={handleAddMessage} />      
      <ChatList/>  
    
      
    </div>
    )

    
}