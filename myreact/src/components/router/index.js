
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"

const Home=()=><h2>home page</h2>
const Chats=()=><h2>Chats</h2>
export const Router =()=>{
    return(
      <BrowserRouter>
      <Link to="/">Home
      </Link>
      <Link to='/chats'>Chats</Link>
      <Routes>
          <Route path="/" element={<Home/>} />

          <Route path='/chats' element={<Chats/>}/>

      </Routes>
      </BrowserRouter>  
    )
}