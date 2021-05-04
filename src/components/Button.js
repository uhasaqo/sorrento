import {useState} from 'react'
export function Button (props) {
    // store number of clicks in an array storing variables
    const [click,setClick] = useState( props.start )
    const update = () => {
        setClick( click + 1 )
    }
    return (
        <button className="button" onClick={update}>
            { "clicked " + click + " times"}
        </button>
    )
}
export default Button