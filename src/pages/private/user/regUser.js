import React, { Component } from 'react';
import Input from "./input";
import Select from "./select";

class regUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: '',
                email: '',
                age: '',
                gender: ''
            },
            genderOption: ['Male', 'Female'],
        };
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            newUser:
            {
                ...prevState.newUser, [name]: value
            }
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        let userData =this.state.newUser;
        console.log(userData)
    }

    render() {
        return (
            <>
                <div className="blog">
                    <div className="conteudo">
                        <h1>Form</h1>
                        <Input
                            type={'text'}
                            title={'Nama Lengkap'}
                            name={'name'}
                            value={this.state.newUser.name}
                            placeholder={'Masukan Nama Anda'}
                            handleChange={this.handleInput}
                        />
                        <Input
                            type={'text'}
                            title={'Umur'}
                            name={'age'}
                            value={this.state.newUser.age}
                            placeholder={'Masukan Umur Anda'}
                            handleChange={this.handleInput}
                        />
                        <Select
                            type={'select'}
                            title={'Jenis Kelamin'}
                            options={this.state.genderOption}
                            name={'gender'}
                            value={this.state.newUser.gender}
                            placeholder={'Masukan Jenis Kelamin Anda'}
                            handleChange={this.handleInput}
                        />
                        <Input
                            type={'text'}
                            title={'Email'}
                            name={'email'}
                            value={this.state.newUser.email}
                            placeholder={'Masukan Email Anda'}
                            handleChange={this.handleInput}
                        />
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>
                            submit
                        </button>
                        </div>
                </div>
            </>
        )
    }
}

export default regUser;