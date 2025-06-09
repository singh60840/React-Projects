import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
  const {user} = useContext(UserContext)
  
  if(!user) return <h2>Please login to view your profile</h2>
  return <div> Welcome {user.username} </div>
}

export default Profile;
