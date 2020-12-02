import React from 'react'
import posts from "../../assets/posts"
import UserPost from '../userpost/userpost.components'


const UserPosts = props => {
    const uname = props.uname
    const userposts = posts.filter(post => post.postedBy === uname)
    console.log(userposts)
    return (
        <div class="col-md-12">
            <h3 className="text-center">Posts</h3>
            { userposts.length !== 0 ?
                <div>

                    <div class="mdb-lightbox row">
                        {userposts.map(post => <UserPost key={post.id} image={post.image} /> )}
                    </div>
                </div> :
                <h1 className="text-center m-5">No Posts Yet</h1>
            }
        </div>
    );
}

export default UserPosts;