import { Divider, Grid, useTheme } from '@mui/material';
import React, { useState } from 'react';
import UserWidget from '../../components/widgets/userWidget';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlexBetween from '../../components/FlexBetween';
import Navbar from '../../components/navbar';
import MyPostWidget from '../../components/widgets/myPostWidget';

const Home = () => {
  return (
    <>
      <Navbar/>
      <FlexBetween>
        <Grid container spacing={4} padding="2rem 6%">
          <Grid item xs={12} sm={4} md={3}>
            <UserWidget />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
           <MyPostWidget/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            {/* <UserWidget /> */}
          </Grid>
        </Grid>
      </FlexBetween>
      <Divider />
    </>
  );
};

export default Home;
