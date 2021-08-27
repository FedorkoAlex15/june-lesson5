import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import {getPost, getUser} from "../../services/api";
export default function PostsDetails({match:{params:{id}}}) {

   let [post, setPost] = useState({})

    useEffect(() => {
        getPost(id).then(value => setPost({...value}))
    }, [id])

    console.log(post)
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )

}