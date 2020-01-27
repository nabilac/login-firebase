import React from 'react';

import {Switch, Route} from 'react-router-dom';

//Komponent Halaman mahasiswa
import ListMahasiswa1 from './home';

function Index(props) {
    return (
        <Switch>
            <Route path="/mahasiswa/listMahasiswa1" component={ListMahasiswa1}/>
        </Switch>
    );
}

export default Index;