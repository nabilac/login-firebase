import React, { useState } from 'react';

import Search from './search';
import List from './list';
import { UserProvider } from './context/userContext';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
    const [users, setUsers] = useState([])
    const onSearch = (data) => (
        setUsers(data)
    )
    return (
        <>
            <Grid>
                <UserProvider value={{ users, onSearch }}>
                    <Typography variant="h4">Daftar User</Typography>
                    <Search />
                    <List />
                </UserProvider>
            </Grid>
        </>
    )
}

export default Home;