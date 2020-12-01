import React from 'react'
import "./post.components.css"
import Avatar from '../avatar/avatar.components';

const Post = (props) => {
    return ( 
    <div className="card mb-2">
        <Avatar 
            height="35" 
            uname={`${props.postedBy}`} 
            imageUrl="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
        />
        <img className="card-img-top" src={`${props.image}`} alt=""/>
        <p className="m-3">25 likes</p>
        <p className="mx-3"><span className="bold-text">{props.postedBy}</span> : {props.caption}</p>
        <p className="mx-3 grey-text">{props.datePosted}</p>
    </div>

     );
}
    
export default Post;