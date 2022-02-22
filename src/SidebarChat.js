import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebarChat.css'
function SidebarChat({addNewChat}) {
    const [avatarImg,setAvatarImg]=useState('')
    useEffect(()=>{
        setAvatarImg(Math.floor(Math.random()*5000))
    },[])
    const createChat=()=>{
        const roomName=prompt("please enter name for chat")
        if(roomName){
            console.log(roomName)
        }
    }
    return !addNewChat?(
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${avatarImg}.svg`}/> 
            <div className='sidebarChatInfo'>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(<div onClick={createChat} className="sidebarChat"> 
    <h2>Add new Chat</h2>
    </div>)
}
export default SidebarChat
//this above used api gives us the randon avatar image