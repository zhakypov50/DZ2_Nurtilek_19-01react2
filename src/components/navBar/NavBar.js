import {NavLink} from "react-router-dom";


export default function NavBar() {
    return(
        <ul style={
            {display: 'flex',
                width: "50%",
                listStyleType: 'none',
                justifyContent: 'space-between'
            }}>
            <li>
                <NavLink to="/">main page</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPage">about page</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPage2">about page 2</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPage3">about page 3</NavLink>
            </li>
            <li>
                <NavLink to="/AboutLastPage">about last page</NavLink>
            </li>
        </ul>
    )
}