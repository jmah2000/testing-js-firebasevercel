import firebase from "../libs/firebase"
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';

import styled from "styled-components";
import { Button } from 'ui/buttons'
import {List, ListItem} from 'classcomp/Present'
const Wrapper = styled.div`
  padding: 6rem 0 0;
  text-align: center;
  button{
    width: 40%;
  }
  p{
    font-size: 4.25rem;
  }
`;
// Presentational Component -> Dumb
//    templating   render data+temp
// a Smart Component has logic
//    template render data+temp   code    listeners

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Index(props) {
  //console.log(firebase)
  const [isValidUser, setValidUser] = useState(false)
  const router = useRouter()

  function onRequestSignIn (){
    // firebase loging logic promise
    // user, error
    // user dashboard  --> protected route (only valid users can access the dashboard)
    setValidUser(true)
  }

  if(isValidUser){
    router.push('http://www.apple.ca')
  }

  return (
    <Wrapper>
      <Button onClick={onRequestSignIn}>Login</Button>
    </Wrapper>
  )
}

export default Index