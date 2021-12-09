import { useState, useEffect } from "react";
import Link from 'next/link'
import { v4 as uuid } from "uuid";
import { IoIosArrowRoundBack } from "react-icons/io";
import {} from "firebase/firestore";
import {} from "libs/firebase";
import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import { Button } from "ui/buttons";
import {
  ContentSection,
  ContentSectionHeader,
  AddNewItemForm,
  UniqueId,
  ItemTextArea,
} from "components/todos";

function AddItemPage(props) {
 
  
 
 
  
   

  // form submit event handler
  function handleSubmit(e) {
   
  }

  return (
    <>
      <AppBar />
      <ContentSection>
      <Link href="/todo">
          <a>
            <IoIosArrowRoundBack />
            back
          </a>
        </Link>
   
        <ContentSectionHeader
          width="2.5rem"
          size="1.75rem"
          title="Add New To Do Item"
          style={{margin:"1rem 0"}}
        />
        <AddNewItemForm>
          <UniqueId />
          <ItemTextArea
            style={{ margin: "1rem 0 1rem" }}
          />
          <Button type="submit" bgcolor="crimson" color="white">
            Add New To Do Item
          </Button>
        </AddNewItemForm>
      </ContentSection>
    </>
  );
}

export default AddItemPage;
