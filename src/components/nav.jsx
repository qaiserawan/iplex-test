import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Data from './data';
import Details from './details';

const Nav = () => {
    return (
        <div>
            {/* <h2>Nav Bar</h2> */}
            {/* <Link to="/details">Details</Link> */}
            <Switch>
                <Route exact path="/">
                    <Data />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
            </Switch>
        </div>
        
    )
}

export default Nav
