import { useRouter } from 'next/router'
import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth' 

import { auth } from "libs/firebase"
import { useAuth } from 'libs/hooks/useAuth'
import TextInput from "ui/forms/TextInput"
import { Button } from "ui/buttons"
import Login from "./styled"
 
 
function UserLogin ({...props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const user = useAuth()
   
    async function handleSubmit(e){
        e.preventDefault()
        const isValidUser = await signInWithEmailAndPassword(auth, "jim@home.com", "123456")
        // const isValidUser = await signInWithEmailAndPassword(auth, email, password)

        console.log(email)
        console.log(password)
        console.log("isValidUser")
        console.log(isValidUser)
        console.log("auth")
        console.log(auth)

        if(isValidUser)
        {
            router.push('/todo')
        }

        
    }

    return (
        <>
        <Login {...props} onSubmit={(e)=>handleSubmit(e)}>    
         <TextInput label="Email" onChange={(e)=> setEmail(e.currentTarget.value)}  id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password" onChange={(e)=> setPassword(e.currentTarget.value)}  type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin