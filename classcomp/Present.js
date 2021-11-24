function List ({children, ...props}){
    return <ul>{children}</ul>
}

function ListItem({children, onClick, ...props}){
    return(
        <li onClick={onClick}>
            {children}
        </li>
    )
}

export {List, ListItem}

//if you were building a todo list item like List Item, would send in children to display too