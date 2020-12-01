import React from 'react'
import UserInfo from "../../components/userinfo/userinfo.components"
import UserPosts from "../../components/userposts/userposts.components"

const Profile = props => {
    
    return ( 
        <div className="container mt-5 pt-3">
            <UserInfo uname={`${props.match.params.uname}`}/>
            <hr/>
            <UserPosts uname={`${props.match.params.uname}`} />
        </div>
     );
}
 
export default Profile;