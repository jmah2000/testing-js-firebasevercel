
import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import {Title} from "ui/title"

function ToDoPage(props) {
   
    const user = useAuth()

    console.log(user)

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
        <Title>Render the users todo list</Title>
        </>
      )
    }
}

export default ToDoPage;
