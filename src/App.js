
// import './App.css';
import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ContactAdd from "./ContactAdd"
import DisplayContact from "./DisplayContact";
import ContactCard from "./ContactCard";
import api from './api/contacts';
import EditAdd from "./EditAdd";
//import Form from "./Form";
function App() {
  const [contactdetails,setcontactdetails]=useState([]);
  
//retrival contacts
const retriveContacts = async () =>{
  const response = await api.get("/contacts");
  
  return response.data;

} 
useEffect(() => {
  // const retriveContacts = JSON.parse(localStorage.getItem("Contacts"))
  //  if(retriveContacts)setcontactdetails(retriveContacts)
  const getAllContacts = async ()=>{
    const allcontacts = await retriveContacts();
    if(allcontacts) setcontactdetails(allcontacts);
  }
  getAllContacts();

 }, []);
const addContact = async (name,email) =>{
  const request ={
    id:uuidv4(),
    ...{name,email}
  };
  const response = await api.post("/contacts", request )
  setcontactdetails([...contactdetails,response.data])
}

const updateContact = async(name,email,id)=>{
const request ={
  ...{name,email}
}
const response =await api.put(`/contacts/${id}`,request)

setcontactdetails(
  contactdetails.map((contact)=>{
  return contact.id==id?{...response.data}:contact;
})
)
}

const removeContact =async (id)=>{
  await api.delete(`/contacts/${id}`)
  const updatedContact=contactdetails.filter((contact)=>{
    return contact.id!=id
  })
  setcontactdetails(updatedContact)
}


useEffect(() => {
  //localStorage.setItem("Contacts",JSON.stringify(contactdetails))
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
          <Route exact path="/edit" element={<EditAdd updateContact={updateContact} />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
