
// import './App.css';
import {useState, useEffect} from "react";
import ContactAdd from "./ContactAdd"
import DisplayContact from "./DisplayContact";
//import Form from "./Form";
function App() {
  const [contactdetails,setcontactdetails]=useState([]);
  const addContact = (name,email) =>{
    console.log("inside addcontact")
    setcontactdetails([...contactdetails,{name,email}])
}
useEffect(() => {

  localStorage.setItem("Contacts",JSON.stringify(contactdetails))
 
}, [contactdetails])
  return (
    <div>
     <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4">
      <ContactAdd addContact={addContact}/>
      </div>
      <div className="contactdetails">
            { contactdetails.map((contact,index)=>(
                <DisplayContact key={index} name={contact.name} email={contact.email}/>
            ))}
      </div>
    </div>
  );
}

export default App;
