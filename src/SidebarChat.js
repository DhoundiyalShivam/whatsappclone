import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebarChat.css'
import db from './firebase.js'
import { collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
// import { onSnapshot, collection, query } from "firebase/firestore";
function SidebarChat({ addNewChat, name, id }) {
    const [avatarImg, setAvatarImg] = useState('')
 
    useEffect(() => {
        setAvatarImg(Math.floor(Math.random() * 5000))
    }, [])
    const createChat = async () => {
        const roomName = prompt("please enter name for chat")
        if (roomName) {
            console.log(roomName)

            await addDoc(collection(db, "rooms"), {
                name: roomName
            });


        }
    }
    return !addNewChat ?
        (<Link to={`rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${avatarImg}.svg`} />
                <div className='sidebarChatInfo'>
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>) : (<div onClick={createChat} className="sidebarChat">

            <h2>Add new Chat</h2>
        </div>)
}
export default SidebarChat
//this above used api gives us the randon avatar image