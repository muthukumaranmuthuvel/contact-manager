
// import './App.css';
import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import ContactAdd from "./ContactAdd"
import DisplayContact from "./DisplayContact";
//import Form from "./Form";
function App() {
  const [contactdetails,setcontactdetails]=useState([]);
  
const addContact = (name,email) =>{
    console.log("inside addcontact")
    setcontactdetails([...contactdetails,{id:uuidv4(),...{name,email}}])
}

const removeContact =(id)=>{
  const updatedContact=contactdetails.filter((contact)=>{
    return contact.id!=id
  })
  setcontactdetails(updatedContact)
}
useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem("Contacts"))
   if(retriveContacts)setcontactdetails(retriveContacts)
 }, [])

useEffect(() => {
  localStorage.setItem("Contacts",JSON.stringify(contactdetails))
}, [contactdetails])


  return (
    <div>
     <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4">
      <ContactAdd addContact={addContact} />
      </div>
      <div className="contactdetails">
            { contactdetails.map((contact)=>(
                <DisplayContact key={contact.id} id={contact.id} name={contact.name} email={contact.email} removeContact={removeContact}/>
            ))}
      </div>
    </div>
  );
}

export default App;
