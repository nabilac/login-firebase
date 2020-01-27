import React from 'react';
import MhsContext from './context/mhsContext';

import axios from 'axios';
import { Grid, TextField, Button } from '@material-ui/core';

class AddMahasiswa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nim: '',
            nama: '',
            kelas: '',
            prodi: '',
            angkatan: '',
            konsentrasi: '',
            items: []
        };
    }

    static contextType = MhsContext

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addData = () => {
        const { onAdd } = this.context

        const params = new URLSearchParams();

        params.append('nim', this.state.nim)
        params.append('nama', this.state.nama)
        params.append('kelas', this.state.kelas)
        params.append('prodi', this.state.prodi)
        params.append('angkatan', this.state.angkatan)
        params.append('konsentrasi', this.state.konsentrasi)
        axios({
            method: 'post',
            url: 'http://localhost/mjt-assessment/rest-server/api/mahasiswa/',
            data: params
        })
            .then(data => {
                let result = Array.isArray(data) ? data : [data]

                onAdd(result)
            })

        console.log(params)
    }

    render() {
        return (
            // <div>
            //     <form>
            //         <div>
            //             <label>NIM : </label>
            //             <input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <label>Name : </label>
            //             <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <label>Kelas : </label>
            //             <input type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <label>Prodi : </label>
            //             <input type="text" name="prodi" value={this.state.prodi} onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <label>Angkatan : </label>
            //             <input type="text" name="angkatan" value={this.state.angkatan} onChange={this.handleChange} />
            //         </div>
            //         <div>
            //             <label>Konsentrasi : </label>
            //             <input type="text" name="konsentrasi" value={this.state.konsentrasi} onChange={this.handleChange} />
            //         </div>
            //         <br />
            //         <button onClick={this.addData}>Save</button>
            //     </form>
            // </div>
            <>
                <Grid container>
                    <Grid item>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="NIM"
                                name="nim"
                                value={this.state.nim}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="Nama"
                                name="nama"
                                value={this.state.nama}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="Kelas"
                                name="kelas"
                                value={this.state.kelas}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="Prodi"
                                name="prodi"
                                value={this.state.prodi}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="Angkatan"
                                name="angkatan"
                                value={this.state.angkatan}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="standard-basic"
                                label="Konsentrasi"
                                name="konsentrasi"
                                value={this.state.konsentrasi}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.addData}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default AddMahasiswa;