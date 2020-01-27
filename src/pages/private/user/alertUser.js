import React, { Component } from "react";

class MainContent2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            alamat: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({nama: event.target.value});
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nama + ',' + this.state.alamat);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2>Daftar User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Nama:
                        <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Alamat:
                        <input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </>
        );
    }
}

export default MainContent2;