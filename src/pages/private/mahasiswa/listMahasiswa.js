import React, { Component } from 'react';
import MhsContext from './context/mhsContext';

//Material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import Modal from 'react-responsive-modal';

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nim: '',
            nama: '',
            kelas: '',
            prodi: '',
            angkatan: '',
            konsentrasi: '',
            items: [],
            open: false,
        }

    }

    static contextType = MhsContext

    componentDidMount() {
        axios.get(`http://localhost/mjt-assessment/rest-server/api/mahasiswa/`)
            .then(response =>
                this.setState({
                    items: response.data.data
                })
            )
        // .then(res => {
        //     const items = res.data.data;
        //     this.setState({
        //         items
        //     });
        // })
    }

    handleEdit = (param) => {
        this.setState(
            (preState) => ({
                ...preState.data, data: {
                    nama: param.nama,
                    kelas: param.kelas,
                    prodi: param.prodi,
                    angkatan: param.angkatan,
                    konsentrasi: param.konsentrasi
                }
            })
        );
        this.setState(
            { open: true }
        )
    }

    // getDataByNim = (param) => {
    //     const nim = this.state.nim
    //     axios.get(`http://localhost/mjt-assessment/rest-server/api/mahasiswa/${nim}`)

    //     this.setState(
    //         (preState) => ({
    //             ...preState.data, data: {
    //                 nama: param.nama,
    //                 kelas: param.kelas,
    //                 prodi: param.prodi,
    //                 angkatan: param.angkatan,
    //                 konsentrasi: param.konsentrasi
    //             }
    //         })
    //     )
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { items, open } = this.state
        const { mahasiswas } = this.context
        let result = mahasiswas.length ? mahasiswas : items
        return (
            <>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>NIM</TableCell>
                                <TableCell>Nama</TableCell>
                                <TableCell>Kelas</TableCell>
                                <TableCell>Prodi</TableCell>
                                <TableCell>Angkatan</TableCell>
                                <TableCell>Konsentrasi</TableCell>
                                <TableCell>Action Edit</TableCell>
                                <TableCell>Action Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                result.map((mhs) =>
                                    <TableRow>
                                        <TableCell>{mhs.nim}</TableCell>
                                        <TableCell>{mhs.nama}</TableCell>
                                        <TableCell>{mhs.kelas}</TableCell>
                                        <TableCell>{mhs.prodi}</TableCell>
                                        <TableCell>{mhs.angkatan}</TableCell>
                                        <TableCell>{mhs.konsentrasi}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => this.handleEdit(mhs.nim)}>
                                                Edit
                                            </Button>
                                            <Modal open={open} onClose={this.onCloseModal} center>
                                                <div>
                                                    <div>
                                                        <h5>Edit</h5>
                                                    </div>
                                                    <div>
                                                        <label>Nama : </label>
                                                        <input type="text" name="nama" value={mhs.nama} onChange={this.handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label>Kelas : </label>
                                                        <input type="text" name="kelas" value={mhs.kelas} onChange={this.handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label>Prodi : </label>
                                                        <input type="text" name="prodi" value={mhs.prodi} onChange={this.handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label>Angkatan : </label>
                                                        <input type="text" name="angkatan" value={mhs.angkatan} onChange={this.handleChange}/>
                                                    </div>
                                                    <div>
                                                        <label>konsentrasi : </label>
                                                        <input type="text" name="konsentrasi" value={mhs.konsentrasi} onChange={this.handleChange}/>
                                                    </div>
                                                    <div>
                                                        <button type="submit" onClick={this.handleEdit}>Update Data</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => this.deleteData(mhs.nim)}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default ListMahasiswa;