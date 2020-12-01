import React from 'react'
import "./post.components.css"
import Avatar from '../avatar/avatar.components';
import users from '../../assets/users';

const Post = (props) => {
    const uname = props.postedBy
    console.log(uname)
    const user = users.find(user => user.id === uname)
    console.log(user)
    return ( 
    <div className="card mb-2">
        <Avatar 
            height="35" 
            uname={`${props.postedBy}`} 
            imageUrl={user.profilePic}
        />
        <img className="card-img-top" src={`${props.image}`} alt=""/>
        <p className="m-3">{props.likes} likes</p>
        <p className="mx-3"><span className="bold-text">{props.postedBy}</span> : {props.caption}</p>
        <p className="mx-3 grey-text">{props.datePosted}</p>
    </div>

     );
}
    
export default Post;