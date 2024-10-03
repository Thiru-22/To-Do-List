import ItemList from "./ItemList";

const Content = ({items,handleCheck,handleDelete}) => {

   
  return (
   <>
    {(items.length)?
        <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
    :<p>Your List is Empty</p>}
    
   </>
  )
}

export default Content