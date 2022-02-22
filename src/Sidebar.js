import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
// import db from './firebase.js'
function Sidebar() {
    
    // const [rooms, setRooms] = useState([])
    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         data: doc.data()
    //     })))))
    // }, [])
    return (
        <div className='sidebar'>
            {/* <h1>SidebAr</h1> */}
            <div className='sidebarHeader'>
                <Avatar />
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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>


        </div>
    )
}
export default Sidebar;