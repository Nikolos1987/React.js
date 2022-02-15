
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"
import {Chats} from '../chats'
import { ChatList } from "../Chatlist"


const Home=()=><h2>home page</h2>

export const Router =()=>{
    return(
      <BrowserRouter>
      <Link to="/">Home
      </Link>
      <Link to='/chats'>Chats</Link>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='chats'>
              <Route index element={<ChatList/>}/>
              <Route path=':ChatId' element={<Chats/>}/>

          </Route>
          

      </Routes>
      </BrowserRouter>  
    )
}