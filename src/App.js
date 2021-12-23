
// import './App.css';
import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ContactAdd from "./ContactAdd"
import DisplayContact from "./DisplayContact";
import ContactCard from "./ContactCard";
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
      <Router>
        <Routes>
          <Route exact path='/' element={
          <div>
          <ContactAdd addContact={addContact} />
          </div>
          }></Route>
          <Route exact path='/list' element={<DisplayContact contactdetails={contactdetails} removeContact={removeContact}/>}/>
          <Route exact path="/contact/:id" element={<ContactCard/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
