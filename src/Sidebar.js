import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase.js'

import { onSnapshot, collection, query } from "firebase/firestore";
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{user}] =useStateValue()
    const [rooms, setRooms] = useState([])
 

    useEffect(() => {
     
        const q = query(collection(db, "rooms"))
        onSnapshot(q, (querySnapshot) => {
            (setRooms(querySnapshot.docs.map(data => ({
                id: data.id,
                data: data.data()
            }))))
        })
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebarHeader'>
                <Avatar src={user?.photoURL} /> {/* this is optional chaining as user will be null at first and after login it will load */}
                <div className='sidebarHeaderRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebarSearch'>
                <div className='sidebarSearchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type="text" />
                </div>
            </div>
            <div className='sidebarChats'>
                <SidebarChat addNewChat />
                {rooms.map(room =>
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                )}

            </div>


        </div>
    )
}
export default Sidebar;