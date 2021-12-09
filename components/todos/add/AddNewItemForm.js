import styled from 'styled-components';

const AddItemForm = styled.form`
       margin: 2rem 0;
`;
 function AddNewItemForm({children, ...props}) {
    
    return (
        <AddItemForm>
            {children}
        </AddItemForm>
    )
}

export default AddNewItemForm