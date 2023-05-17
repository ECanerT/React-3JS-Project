import {useState, useEffect} from "react"
import SingleUsers from "./SingleUsers.js"
import axios from "axios"

const UserList = () => {

    const [users, setUsers] = useState([]);
    const fecthUsers = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=100")
        setUsers(response.data.results)
    }

    useEffect(() => {
        fecthUsers();
    }, [])

    return(
        <>
        <div className="user-list">
            <ul>
                {
                    users.map((user, idx)=>(
                       <li><SingleUsers user={user} key={idx}/></li> 
                    ))
                }
            </ul>
        </div>
        </>
    )

}

export default UserList;