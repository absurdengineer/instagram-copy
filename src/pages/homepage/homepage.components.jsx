import React from 'react'
import PostContainer from '../../components/post-container/post-container.components';

const HomePage = ({currentUser}) => {
    console.log(currentUser)
    return (
        <div>
            <PostContainer currentUser={currentUser} /> 
        </div>
     );
}
 
export default HomePage;