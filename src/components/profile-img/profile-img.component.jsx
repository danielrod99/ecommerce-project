import React from 'react';

import './profile-img.styles.scss'

const ProfileImg =(user)=>{
    if(user.url){
        return(
            <div className='img-container'>
                <img src={user.url} alt='User Profile'/>
            </div>
        )
    }else{
        return <div></div>;
    }
}
export default ProfileImg;