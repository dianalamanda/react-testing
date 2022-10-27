import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Why do we need Test ?</h1>  
            <p>To guarantee our code quality. And to show the people that we also care about it and wish to give 
                something that already proven, at least by ourself.
            </p>
            <Link to="/users" >
                <button>Users List</button>
            </Link> 
        </div>
    )
}