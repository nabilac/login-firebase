import React, { useState } from 'react';

import ListMahasiswa from './listMahasiswa';
import AddMahasiswa from './addMahasiswa';
import { MhsProvider } from './context/mhsContext';

//Material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = (props) => {
    const [mahasiswas, setMahasiswas] = useState([])
    const onAdd = (data) => (
        setMahasiswas(data)
    )
    return (
        <>
            <Grid>
                <MhsProvider value={{ mahasiswas, onAdd }}>
                    <Typography variant="h4">Daftar Mahasiswa</Typography>
                    <AddMahasiswa />
                    <ListMahasiswa/>
                </MhsProvider>
            </Grid>
        </>
    )
}

export default Home;