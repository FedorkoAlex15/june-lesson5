
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"

import './App.css';
import Users from "./components/users/Users";
import User from "./components/user/User";
import StaticUserDetails from "./components/staticUserDetails/StaticUserDetails";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/post/Post";
import StaticPostDetails from "./components/staticPostDetails/StaticPostDetails";
import Comments from "./components/comments/Comments";
import StaticCommentDetails from "./components/staticCommentDetails/StaticCommentDetails";

export default function App() {
  return (
      <Router>
          <div>
             <div><Link to={'/users'}>users page</Link></div>
             <div><Link to={'/posts'}>posts page</Link></div>
              <div><Link to={'/comments'}>comments page</Link></div>
          </div>

          <Route path={'/users'} component={Users}/>

          <Route exact path={'/posts'} component={Posts}/>
          {/*динамічний параметр урли*/}
          <Route path={'/posts/:id'} render={(props) => {
              return <StaticPostDetails {...props}/>
          }}/>


          <Route exact path={'/comments'} component={Comments}/>
          <Route path={'/comments/:id'} render={(props) => {
              return <StaticCommentDetails {...props}/>
          }}/>




      </Router>

  );
}


