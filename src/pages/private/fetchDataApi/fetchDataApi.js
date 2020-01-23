import React, { Component } from 'react'

import TableApi from './TableApi';
import SearchApi from './SearchApi';

export class FetchData2 extends Component {
    state = {
        keyword: "",
        dataUser: []
    }

    fetchDataApi = (dataUser) => {
        this.setState({
            dataUser
        })
    }

    render() {
        return (
            <div>
                <SearchApi fetchDataApi={this.fetchDataApi}/>
                <TableApi dataUser={this.state.dataUser}/>
            </div>
        )
    }
}

export default FetchData2