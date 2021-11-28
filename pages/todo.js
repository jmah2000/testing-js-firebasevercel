
import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import {Title} from "ui/title"

function ToDoPage(props) {
   
    const user = useAuth()
    if (user)
    {
      return (
      <>
      <AppBar/>
      <Title>YOURE NOT WELCOMED GO AWAY</Title>
      </>
      )
    }
    else
    {
      return (
        <>
        <AppBar/>
        <Title>Render the users to list</Title>
        </>
      )
    }
}

export default ToDoPage;
