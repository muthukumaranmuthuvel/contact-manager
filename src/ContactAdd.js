import React ,{useState, useRef} from 'react'
import './ContactAdd.css'
import DisplayContact from './DisplayContact';
function ContactAdd({addContact}) {
    const [name, setname] = useState();
    const [email, setEmail] = useState();
    const nameRef = useRef();
    const emailRef = useRef();
    const addContactHandler =() =>{
        
        addContact(name,email)
        setname("");
        setEmail("");
    }
    
    return (
        <div >
             <div className="relative my-4 mb-8 border-b-2 focus-within:border-blue-500">
                <input ref={nameRef} type="text" name="username" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" value ={name} onChange ={(e)=>setname(e.target.value)}/>
                <label htmlFor="username" className="absolute top-0 -z-1 text-xs">Name</label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-blue-500">
                <input ref={emailRef} type="text" name="username" placeholder=" " className="block w-full appearance-none focus:outline-none bg-transparent" value ={email} onChange ={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="username" className="absolute top-0 -z-1 text-xs">E-Mail</label>
            </div>
            <button disabled={!name || !email} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={addContactHandler}>Add</button>
        </div>
    )
}

export default ContactAdd
