import {useParams} from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"

export default function Comment({item}){


    return (
        <div>
            {item.name} - {item.email} - <Link to={{pathname: '/comments/' + item.id}}>Comment details</Link> <hr/>
        </div>
    )

}