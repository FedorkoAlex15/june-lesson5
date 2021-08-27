import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {getUser} from "../../services/api";
export default function UserDetails({history, match:{params: {id}}}){

console.log(id)

  let [user, setUser] =  useState({})
    useEffect(() => {
       getUser(id).then(value => setUser({...value}))

    }, [id])


    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )

}