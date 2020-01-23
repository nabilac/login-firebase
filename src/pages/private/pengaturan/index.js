import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

//Komponent Halaman Private
import Pengguna from './pengguna';
import Toko from './toko';

function Private(props) {
    return (
        <Switch>
             <Route path="/pengaturan/pengguna" component={Pengguna}/>
             <Route path="/pengaturan/toko" component={Toko}/>
        </Switch>
    );
}

export default Private;