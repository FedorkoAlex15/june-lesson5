import {useParams} from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"
import {useEffect, useState} from "react";
import {getPosts, getUser} from "../../services/api";
import Post from "./post/Post";
import StaticPostDetails from "../staticPostDetails/StaticPostDetails";
import PostsDetails from "../postsDetails/PostsDetails";
export default function Posts(props) {

let {match: {url}} = props

    const [posts, setPosts] = useState([])

    useEffect(() => {

        async  function FetchPosts() {
            let PostsList = await getPosts()
            console.log(PostsList)
            setPosts([...PostsList])
        }

        FetchPosts()
    }, [])


    return (
     <div>

         {
             posts.map(value => {
                 return <Post items={value} />
             })
         }
         {/*Gives information about post of each id*/}
         {/*<Route path={url + '/:id'} render={(props) => {*/}
         {/*    return <StaticPostDetails {...props}/>*/}
         {/*}}/>*/}

         {/*<Route path={url + '/:id'} render={(props) => {*/}
         {/*    return <StaticPostDetails {...props}/>*/}
         {/*}}/>*/}

         {/*<Route path={`${url}/:id`} render={(props) => {*/}
         {/*    return <PostsDetails {...props} />*/}
         {/*}}/>*/}

     </div>
    )

}