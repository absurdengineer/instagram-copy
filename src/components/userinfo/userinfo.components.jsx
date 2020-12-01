import React from 'react'
import Avatar from '../avatar/avatar.components'
import posts from "../../assets/posts"
import users from "../../assets/users"


const UserInfo = props => {
    const uname = props.uname
    const userpost = posts.filter(post => post.postedBy === uname);
    const user = users.find(user => user.id === uname)

    return (
        <div className="row pt-4">
            <div className="col-md-5 text-center">
                <Avatar imageUrl="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" height="150" />
            </div>
            <div className="col-md-7">
                <h3 className="mt-4">{props.uname}</h3>
                <p><span className="mr-3">{userpost.length} posts</span> <span className="mr-3">{user.followers} followers</span> <span className="mr-3">{user.followings}  followings </span> </p>
                <p style={{fontWeight:700,margin:0}}>{user.name}</p>
                <p className="m-0 p-0">{user.bio}</p>
            </div>
        </div>
     );
}
 
export default UserInfo;