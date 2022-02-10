import { List,ListItem } from "@mui/material";
const chats=[
    {
        name:'chat1',
        id:'chat__1'
    },
    {
        name:'chat3',
        id:'chat__3'
    },
    {
        name:'chat3',
        id:'chat__3'
    },
]
export const ChatList=()=>(
    <List>
        {chats.map((chat)=>(
            <ListItem key={chat.id}>{chat.name}</ListItem>
        ))}
    </List>
)
