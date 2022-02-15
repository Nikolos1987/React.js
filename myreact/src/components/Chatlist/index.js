import { List,ListItem } from "@mui/material";
import { Link,Outlet } from "react-router-dom";
const chats=[
    {
        name:'chat1',
        id:'chat__1'
    },
    {
        name:'chat2',
        id:'chat__2'
    },
    {
        name:'chat3',
        id:'chat__3'
    },
]
export const ChatList=()=>(
    <>
    <List>
        {chats.map((chat)=>(
            <ListItem key={chat.id}>
                <Link to={`/chats/${chat.id}`}>{chat.name}
                </Link> </ListItem>
        ))}
    </List>
    <Outlet/>
    </>
)
