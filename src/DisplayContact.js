import React,{useState}  from 'react'
import "./DisplayContact.css";
import {Link } from "react-router-dom"
import Modal from './Modal';

function DisplayContact({contactdetails, removeContact}) {
  const [show,setShow] = useState(false);
  const[deleteItem,setDeleteItem]=useState("");
  const removeContactHandler=(id)=>{
    removeContact(id)
  }
  // const deleteHandler = ()=>{
  //   console.log("deleteHandler");
   
  // }
 

  const createList = (contactdetails)=>{
    return(
       contactdetails.map((contact)=>( 
        <div className=" mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">  
          <div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
          <Link to={`/contact/${contact.id}`} state={{contacts:contact}}>
            <p className="font-bold text-blue-500 text-xl">{contact.name.toUpperCase()}</p>
          </Link>
          <div className="flex items-center hover:cursor-pointer " onClick={()=>{
            setShow(true) 
            setDeleteItem(contact)
            }} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
        </div>
        <div className="flex p-3 bg-white rounded-b-lg break-words text-gray-700">
        {contact.email}
      </div>
      </div>
    ))
    )
  }
    return (
      <div className="flex flex-col justify-center items-center">
         
          {!show && <Link to="/">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-96 mx-auto my-4 py-2 px-4 rounded-full ">Add Contact</button>
          </Link> }
          
          {!show && createList(contactdetails)}
          {show && <Modal 
          close={setShow} 
          deleteItem={deleteItem} 
          setDeleteItem={setDeleteItem} 
          removeContactHandler={removeContactHandler}/>}
          
      </div>
    )
}

export default DisplayContact
