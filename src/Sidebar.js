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
function Sidebar() {
    // console.log(db.collection('rooms'))
    const [rooms, setRooms] = useState([])
   
    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         data: doc.data()
    //     })))))
    // console.log(rooms)

    // }, [])

    useEffect(() => {
        // const unsub = onSnapshot(q, (querySnapshot) => {
        //   console.log("Data", querySnapshot.docs.map(d =>     ({
        //     id: d.id,
        //     data: d.data()
        // })));
        // });
        const q = query(collection(db, "rooms"))
        onSnapshot(q, (querySnapshot) => {
            // console.log("data",querySnapshot.docs.map(d=>(d.data())))
            (setRooms(querySnapshot.docs.map(data => ({
                id: data.id,
                data: data.data()
            }))))
        })
    }, [])

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
                {rooms.map(room =>
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                )}

            </div>


        </div>
    )
}
export default Sidebar;