import {Link, NavLink} from 'react-router-dom'
import '../styles/Header.css'

export function Header ( props ) {
    const Navigation = props.nav.map( (item) => {
        return (
            <NavLink 
                to={item.link} 
                activeClassName="active"
                exact={ (item.link==="/") ? true : false}
            >
                {item.name}
            </NavLink>
        ) 
    } )
    return ( 
        <header className="header">
           <Link to = "/"><img className="logo" alt="Sorrento by the Sea logo" label="Sorrento by the Sea logo" src={props.logo} /></Link> 
            <nav className="navigation">
                {Navigation}
            </nav>
        </header>
    )
}

export default Header