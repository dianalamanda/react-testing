import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../components/actions";
import store from "../store";

export default function Users(){

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleFetchUsers = () => {
        dispatch(fetchUsers())
    }

    useEffect(() => handleFetchUsers(), [])

    return (
        <div>
            <Provider store={store}>
            <h1>Users</h1>
            <Link to="/" >
                <button>Back to Home</button>
            </Link> 
            <br/><br/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                        state.users.map((user, idx)=>(
                            <tr key={idx}>
                                <td>{ user.name }</td>
                                <td>{ user.username }</td>
                                <td>{ user.email }</td>
                            </tr>
                        ))
                    }   
                </tbody>
            </table>
            </Provider>
        </div>
    )
}