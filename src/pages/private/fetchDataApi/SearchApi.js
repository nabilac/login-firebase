import React, { Component } from 'react';

class SeacrhApi extends Component {

    state = {
        keyword: ''
    };

    fetchUsers(findById) {
        if (findById === '') {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(response => response.json())
                .then(data =>(
                    this.props.fetchDataApi(data)
                    )
                )
                .catch(error => this.setState({ error, isLoading: false }));
        } else {
            console.log(findById)
            fetch(`https://jsonplaceholder.typicode.com/users/${findById}`)
                .then(response => response.json())
                .then(data =>{
                        let result = [data]
                        this.props.fetchDataApi(result)
                    }
                )
                .catch(error => this.setState({ error, isLoading: false }));
        }
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    handleSubmit = () => {
    
        this.fetchUsers(this.state.keyword);
    }

    render() {
        const { keyword } = this.state;
        return (
            <React.Fragment>
                <h1>Data User</h1>
                <input type="text" onChange={this.handleChange} value={keyword} />
                <button
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </React.Fragment>
        );
    }
}

export default SeacrhApi;