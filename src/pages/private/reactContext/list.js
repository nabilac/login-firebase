import React, { Component } from 'react';
import UserContext from './context/userContext';

//Material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [],
        }

    }

    static contextType = UserContext

    componentDidMount() {
        fetch(`http://localhost/mjt-assessment/rest-server/api/user/`)
            .then(response => response.json())
            .then(item => {
                this.setState({ dataUser: item.data })
            })
    }


    render() {
        const { dataUser } = this.state
        const { users } = this.context
        let result = users.length ? users : dataUser
        return (
            <>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                result.map((user) =>
                                    <TableRow key={user.user_id}>
                                        <TableCell>{user.user_name}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
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

export default list;