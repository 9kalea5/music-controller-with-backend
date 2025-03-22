import React from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"

export default function HomePage(){
     return (
        <Router>
            <Switch>
                <Route exact path='/'>
                <div>This is the home page</div></Route>
                <Route path='/join' component={RoomJoinPage} />
                <Route path='/create' component={CreateRoomPage} />           
            </Switch>
            
        </Router>
        )

}