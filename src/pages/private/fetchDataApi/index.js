import React from 'react';

import {Switch, Route} from 'react-router-dom';

//Komponent Halaman fetch data api
import fetchDataApi1 from './fetchDataApi';

function Index(props) {
    return (
        <Switch>
            <Route path="/fetchDataApi/fetchDataApi1" component={fetchDataApi1}/>
        </Switch>
    );
}

export default Index;