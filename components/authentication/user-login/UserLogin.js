import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth' 

import { auth } from "libs/firebase"
import TextInput from "ui/forms/TextInput"
import { Button } from "ui/buttons"
import Login from "./styled"
 
 
function UserLogin ({...props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    async function handleSubmit(e){
        e.preventDefault()
        console.log(1)
    }

    return (
        <>
        <Login {...props} onSubmit={(e)=>handleSubmit(e)} >    
         <TextInput label="Email"  id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password"  type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin