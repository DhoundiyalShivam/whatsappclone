import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import db from './firebase.js'
import './Chat.css'
import { useStateValue } from './StateProvider.js';
import { FirebaseError } from 'firebase/app';
function Chat() {
    const [input, setInput] = useState("")
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
  const [{user}] =useStateValue()


    const { roomId } = useParams()
    useEffect(() => {
            if(roomId){
                onSnapshot(doc(db, "rooms", roomId), (document) =>{ 
                    setRoomName(document.data().name);
                });
                const msgColl = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp"));
                onSnapshot(msgColl, (querySnapshot) => {
                    setMessages(querySnapshot.docs.map(msg => msg.data()))
                });

            }
         
    }, [roomId])
    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
        setInput('')
        setMessages([...messages,{
                          message:input,
            name:user.displayName, 
            timestamp: new Date()
        }])

    }
    console.log(messages)
    return (
        <div className='chat'>
            <div className='chatHeader'>
                <Avatar />
                <div className='chatHeaderInfo'>
                    <h3>{roomName}</h3>
                    {/* <p>Last seen at.....{message}</p> */}
                </div>
                <div className='chatHeaderRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chatBody'>
             {messages.map((message,index)=>(
                    <p key={index} className={`chatMessage ${message.name === user.displayName  && "chatReciever"}`}>
                    <span className='chatName'>{message.name}</span>
                    {message.message}
                    <span className='chatTimestamp'>{message.name === user.displayName ? message.timestamp.toUTCString() :new Date(message.timestamp?.toDate()).toUTCString()}</span>
                </p>
             ))}
            </div>
            <div className='chatFooter'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Enter your message' type="text" />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
export default Chat;