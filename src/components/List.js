//import Text to call Text function
import {Text} from './Text'
export function List (props) {
    //component inside a component
    const ListItems = props.items.map( (thing) => {
        return(
        // return( <li>Fruit: {thing.name} Colour: {thing.colour} </li>
            <Text name={thing.name} colour={thing.colour} /> )
    } )
    return(
        <div className="list">
            <ul> 
                {ListItems}
            </ul>
        </div>
    )
}
export default List