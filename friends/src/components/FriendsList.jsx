import React, { useEffect } from 'react'

//redux
import { connect }  from 'react-redux'
import { getFriends, removeFriend } from '../store/actions'

//components
import FriendsForm from './FriendsForm'

function FriendsList(props) {
    useEffect(() => {
        props.getFriends()
    }, [])
    
    if (props.loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <FriendsForm />
                {props.friends.map(friend => (
                    <Friend key={friend.id} {...friend} removeFriend={props.removeFriend}/>
                ))}
            </div>
        )
    }
} 

function Friend(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age} years old</p>
            <p>{props.email}</p>
            <button onClick={() => {props.removeFriend(props.id)}}>Delete Friend</button>
            <button>Edit Friend</button>

        </div>
    )
}

const mapStateToProps = state => ({
    friends: state.friends.friendsList,
    loading: state.friends.loading
})

const mapActionsToProps = {
    getFriends,
    removeFriend
}

export default connect(
    mapStateToProps, 
    mapActionsToProps
)(FriendsList) 