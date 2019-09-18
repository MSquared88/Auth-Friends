import React, { useEffect } from 'react'

//redux
import { connect }  from 'react-redux'
import { updateFriend } from '../store/actions'

//hooks
import { useInput } from '../utils/hooks/useInput'

function UpdatFriend(props) {
    const userID = (props.match.params.id - 1)
    console.log(userID)
    const initialState = {
        name: props.friends[userID].name,
        age: props.friends[userID].age,
        email: props.friends[userID].email
    }
    const [friend, setFriend, handleChanges] = useInput(initialState)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateFriend(props.match.params.id, friend )
        setFriend(initialState)
        props.history.push('/friendsList');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="name"
                value={friend.name}
                onChange={handleChanges}
            />
            <input type="text"
                name="age"
                value={friend.age} 
                onChange={handleChanges}
            />           
            <input type="text" 
                name='email'           
                value={friend.email} 
                onChange={handleChanges}
            />    
            <button>Update Friend</button>
        </form>
    )
}

const mapStateToProps = state => ({
    friends: state.friends.friendsList,
    loading: state.friends.loading
})

export default connect(mapStateToProps, { updateFriend })(UpdatFriend)