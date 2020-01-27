import React from 'react';

import {Switch, Route} from 'react-router-dom';

//Komponent Halaman react context
import ReactContext1 from './home'; 

function Index(props) {
    return (
        <Switch>
            <Route path="/reactContext/reactContext1" component={ReactContext1}/>
        </Switch>
    );
}

export default Index;