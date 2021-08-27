import {useEffect, useState} from "react";
import {getComments} from "../../services/api";
import Comment from "../comment/Comment";
import {useParams} from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"
import StaticCommentDetails from "../staticCommentDetails/StaticCommentDetails";

export default function Comments(props){

    let {match:{url}} = props
    console.log(url)

   const [comments, setComments] =  useState([])


    useEffect(() => {
        const fetchData = async () => {
            const getData = await getComments()
            const commentsPerPage = getData.slice(0, 20)
            setComments([...commentsPerPage])
        }


        fetchData()
    }, [])



console.log(comments)
    return (
        <div>
            {
                comments.map(value => {
                    return <Comment key={value.id} item={value}/>
                })
            }


            {/*<Route path={`${url}/:id`} render={(props) => {*/}

            {/*    return <StaticCommentDetails {...props}/>*/}
            {/*}}/>*/}

        </div>
    )

}