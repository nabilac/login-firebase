import React from 'react';

import {Switch, Route} from 'react-router-dom';

//Komponent Halaman user
import alertUser from './alertUser';
import regUser from './regUser';

function Index(props) {
    return (
        <Switch>
            <Route path="/user/alertUser" component={alertUser}/>
            <Route path="/user/regUser" component={regUser}/>
        </Switch>
    );
}

export default Index;