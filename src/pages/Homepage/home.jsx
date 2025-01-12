import { Divider, Grid, useTheme } from '@mui/material';
import React, { useState } from 'react';
import UserWidget from '../../components/widgets/userWidget';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlexBetween from '../../components/FlexBetween';
import Navbar from '../../components/navbar';
import MyPostWidget from '../../components/widgets/myPostWidget';
import Friends from '../../components/widgets/friends';
import Friendlist from '../../components/widgets/friendlist';
import PostsWidget from '../../components/widgets/postsWidget';
import Editform from '../../components/editform';

const Home = () => {
    
  const [data,setData] = useState([]);
  const { _id, picture } = useSelector((state) => state.user);
   
  return (
    <>
      <Navbar/>
      <FlexBetween>
        <Grid container spacing={1} padding="2rem 6%">
          <Grid item xs={12} sm={4} md={3}>
            <UserWidget userId={_id} picturePath={picture} />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
           <MyPostWidget setData={setData}/>
           <PostsWidget data={data}/>
           {/* <Editform open={open} close={handleClose}/> */}
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Friendlist/>
          </Grid>
        </Grid>
      </FlexBetween>
      <Divider />
    </>
  );
};

export default Home;
