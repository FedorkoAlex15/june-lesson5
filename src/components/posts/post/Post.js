import {useState} from "react";
import {Link} from "react-router-dom";

export default function Post({items}) {







    return(
        <div>
            {items.title} - <Link to={{pathname: '/posts/' + items.id}}>posts static details</Link>


            <hr/>
        </div>
    )
}