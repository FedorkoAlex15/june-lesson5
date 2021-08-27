import {useEffect, useState} from "react";
import {getPost} from "../../services/api";

export default function StaticPostDetails({match: {params: {id}}}) {
console.log(id)

    let [post, setPost] = useState({})

    useEffect(() => {
        getPost(id).then(value => setPost({...value}))
    }, [])







    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )

}



