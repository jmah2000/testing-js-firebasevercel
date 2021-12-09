import styled from 'styled-components';

const ItemId = styled.div`
  label{
    margin:0;
   display:block;
    padding-right: 0.25rem;
  }
  input{
     width: 100px;
   
  }
`;
 
 function UniqueId({label,...props}) {
    return (
       <ItemId>
        <label htmlFor="uid">{label || "item id:"}</label>
        <input type="text" disabled placeholder={"add uid here"} />
      </ItemId>
    )
}

export default UniqueId