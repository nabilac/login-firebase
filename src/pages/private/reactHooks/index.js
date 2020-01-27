import React from 'react';

import {Switch, Route} from 'react-router-dom';

//Komponent Halaman reacthooks
import reactHooks1 from './reactHooks';

function Index(props) {
    return (
        <Switch>
            <Route path="/reactHooks/reactHooks1" component={reactHooks1}/>
        </Switch>
    );
}

export default Index;