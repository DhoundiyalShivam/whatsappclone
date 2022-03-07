import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
function Chat(){
    const [input,setInput]=useState("")
    const {roomId} =useParams()
    const sendMessage=(e)=>{
        e.preventDefault()
        console.log(input)
        setInput('')
    }
    return(
        <div className='chat'>
            <div className='chatHeader'>
                <Avatar/>
  <div className='chatHeaderInfo'>
  <h3>Room name</h3>
                <p>Last seen at...</p>
  </div>
            <div className='chatHeaderRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            </div>

            <div className='chatBody'>
                <p className={`chatMessage ${true && "chatReciever"}`}>
                    <span className='chatName'>Shivam</span>
                    Hey
                    <span className='chatTimestamp'>3:52pm</span>
                </p>
            </div>
            <div className='chatFooter'>
                <InsertEmoticon />
            <form>
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter your message' type="text" />
                <button onClick={sendMessage }>Send a message</button>
            </form>
            <Mic />
            </div>
        </div>
        )
}
export default Chat;