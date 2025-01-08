import React from 'react'
import Navbar from '../navbar'
import FlexBetween from '../FlexBetween'
import { Grid } from '@mui/material'
import MyPostWidget from '../widgets/myPostWidget'
import UserWidget from '../widgets/userWidget'

const Profile = () => {
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
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
          </Grid>
        </Grid>
      </FlexBetween>
    </>
  )
}

export default Profile