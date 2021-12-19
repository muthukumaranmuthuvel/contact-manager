import React ,{useState} from 'react'

import DisplayContact from './DisplayContact';
function ContactAdd() {
    const [name, setname] = useState(null);
    const [phone, setphone] = useState(null);
    const [contactdetails,setcontactdetails]=useState([])
    const addContact = () =>{
        setcontactdetails([...contactdetails,{name,phone}])
        setname("");
        setphone("");

    }
    return (
        <div>
        <div className="contactAdd">
            <div className="contact_input">
                <input type="text" placeholder ="Enter name" value ={name} onChange ={(e)=>setname(e.target.value)}/>
                <input type="text" placeholder ="Enter Phone number" value ={phone} onChange ={(e)=>setphone(e.target.value)}/>
                <button onClick={addContact}>Add</button>
            </div>
            
        </div>
        <div className="contactdetails">
        { contactdetails.map((contact,index)=>(
            <DisplayContact key={index} name={contact.name} phone={contact.phone}/>
        ))}
        </div>
        </div>
    )
}

export default ContactAdd
