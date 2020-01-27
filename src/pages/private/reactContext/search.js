import React, { Component } from 'react';
import UserContext from './context/userContext';

//Material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextType = UserContext

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState((prevState) => ({
            [name]: value
        }))
    }

    handleSubmit(s) {
        const { search } = this.state
        const { onSearch } = this.context
        fetch(`http://192.168.180.72:83/mjt-assessment/rest-server/api/user/${search}`)
            .then(response => response.json())
            .then(data => {
                let result = Array.isArray(data) ? data : [data]

                onSearch(result)
            })
    }

    render() {
        return (
            <>
                <Grid container>
                    <Grid item>
                        <TextField id="standard-basic" label="Masukan ID" type="text" name="search" onChange={this.handleInput} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default search;