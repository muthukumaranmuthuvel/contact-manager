import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom'
import './ContactAdd.css'
function EditAdd({updateContact}) {
    let navigate = useNavigate();
    const location = useLocation()
    const { name,email,id } = location.state.contacts
   const [contactName, setContactName] = useState(name);
   const[contactemail,setContactemail]=useState(email);
    const updateContactHandler =(e) =>{
        e.preventDefault();
        updateContact(contactName,contactemail,id);
        navigate(`/list`);
    }
   
    return (
        
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex justify-center items-center space-x-4 flex-col">
             <div className="relative my-4 mb-8 border-b-2 focus-within:border-blue-500">
                <input type="text" name="username" placeholder="" className="block w-full appearance-none focus:outline-none bg-transparent" value ={contactName} onChange ={(e)=>setContactName(e.target.value)}/>
                <label htmlFor="username" className="absolute top-0 -z-1 text-xs">Name</label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-blue-500">
                <input type="text" name="username" placeholder="" className="block w-full appearance-none focus:outline-none bg-transparent" value ={contactemail} onChange ={(e)=>setContactemail(e.target.value)}/>
                <label htmlFor="username" className="absolute top-0 -z-1 text-xs">E-Mail</label>
            </div>
            <button disabled={!name || !email} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={updateContactHandler}>Update</button>
        </div>
        
    )
}

export default EditAdd
