import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <div>
            <form
                onSubmit={event => {
                    event.preventDefault()

                    props.updateUser(user.id, user)
                }}
            >
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                <br/>
                <label>Userame</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
                <br/>
                <button>Update User</button>
                <button onClick={() => props.setEditing(false)}>Cancel</button>
            </form>
        </div>
    );
};

export default EditUserForm;