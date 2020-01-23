import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Modal from 'react-responsive-modal';


class TableApi extends Component {

    state = {
        isLoading: true,
        users: [],
        error: null,
        address: {},
        open: false
    };

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    isLoading: false,

                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleAddress = (param) => {
        this.setState(
            (preState) => ({
                ...preState.address, address: {
                    address: param.address.street,
                    address2: param.address.suite,
                    address3: param.address.city,
                    address4: param.address.zipcode
                }
            })
        );
        this.setState(
            { open: true }
        )
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };


    render() {

        const { isLoading, users, error, open, address } = this.state;
        let reUser = users;
        if (this.props.dataUser.length) {

            reUser = this.props.dataUser
        }

        console.log(reUser)
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nama</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Alamat</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!isLoading ? (
                                reUser.map(user => {
                                    const { id, name, email } = user;
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>  {name} </TableCell>
                                            <TableCell> {email} </TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="primary"
                                                    onClick={() => this.handleAddress(user)}
                                                >
                                                    Address
                                                    </Button>
                                                <Modal open={open} onClose={this.onCloseModal} center>
                                                    <div>
                                                        <div>
                                                            <h5>Address</h5>
                                                        </div>
                                                        <div>
                                                            Street : {address.address}
                                                        </div>
                                                        <div>
                                                            Suite : {address.address2}
                                                        </div>
                                                        <div>
                                                            City : {address.address3}
                                                        </div>
                                                        <div>
                                                            Zipcode : {address.address4}
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                    <h3>Loading...</h3>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }
}

export default TableApi;