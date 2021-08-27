import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/api";
import {Route} from "react-router-dom";
import StaticUserDetails from "../staticUserDetails/StaticUserDetails";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {
    let {match: {url}} = props
const [users, setUsers] = useState([])

useEffect( () => {
    async function fetchData(){
         let usersList = await getUsers()

         setUsers([...usersList])
    }

    fetchData()
}, [])




    return(
        <div>
            {users.map(value => <User item={value} key={value.id} />)}

            {/*<Route path={`${url}/:id`} render={(props) => {*/}

            {/*    return <StaticUserDetails {...props}/>*/}
            {/*}}/>*/}

            <Route path={`${url}/:id`} render={(props) => {


                return <UserDetails {...props}/>
            }}/>
        </div>
    )
}