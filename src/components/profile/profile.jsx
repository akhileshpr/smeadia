import React from 'react'
import Navbar from '../navbar'
import FlexBetween from '../FlexBetween'
import { Grid } from '@mui/material'
import MyPostWidget from '../widgets/myPostWidget'
import UserWidget from '../widgets/userWidget'
import PostsWidget from '../widgets/postsWidget'
import Friendlist from '../widgets/friendlist'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {userId} = useParams();
  return (
    <>
     <Navbar/>
      <FlexBetween>
        <Grid container spacing={1} padding="2rem 6%">
          <Grid item xs={12} sm={4} md={3}>
            <UserWidget />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
           <MyPostWidget/>
           <PostsWidget userId={userId} isProfile/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Friendlist/>
          </Grid>
        </Grid>
      </FlexBetween>
    </>
  )
}

export default Profile