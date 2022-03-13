import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection,onSnapshot,query } from "firebase/firestore";
import db from './firebase.js'
import './Chat.css'
function Chat(){
    const [input,setInput]=useState("")
    const [roomName,setRoomName] = useState("")
    const {roomId} =useParams()
    useEffect(()=>{
       if(roomId){
        const q = query(collection(db, "rooms"))
        onSnapshot(q, (querySnapshot) => {
            // console.log("data",querySnapshot.docs.filter(d=>(d.id===roomId)))
           (querySnapshot.docs.map(data => (data.id===roomId?setRoomName(data.data().name):null)))
            // setRoomName(querySnapshot.name)
        })
       }
            // if(id){
            //     db.collection("rooms").doc(id).onSnapshot((snapshot)=>setRoomName(snapshot.data().name))
            // }
    },[roomId])
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
  <h3>{roomName}</h3>
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