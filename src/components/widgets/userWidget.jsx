import React, { useEffect, useState } from "react";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  
} from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import ProfileImage from "./profileImage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WidgetWrapper from "../widgetwrapper";
import { getUserApi } from "../../services/allApi";
const UserWidget = ({userId,picturePath}) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    const getUser=async()=>{
      try{

        const reqHeader = { Authorization: `Bearer ${token}` };
        const result = await getUserApi(userId,reqHeader);
        if (result.status === 200){
          setUser(result?.data); 
        }
      }catch(err){
        console.log(err); 
      }
    }
    useEffect(()=>{
      getUser();
    },[])
   
  return (

    <>
<WidgetWrapper>
  <FlexBetween pb="0.5rem" gap="0.5rem">
      <FlexBetween gap="1rem">
        <ProfileImage/>
        <Box>
          <Typography color={dark}>
            {user?.firstName}  {user?.lastName}
          </Typography>
          <Typography color={dark}>
       {user?.friends.length}
          </Typography>
        </Box>
      </FlexBetween>
      <ManageAccountsOutlined sx={{color:main}}/>
  </FlexBetween>
  <Divider/>
  {/* second */}
  <Box p="0.5rem 0">
    <Box display='flex' alignItems='center' gap="1rem" mb="0.5rem">
    <LocationOnOutlined fontSize="large" sx={{color:main}}/>
     <Typography color={medium}>
      {user?.location ||"................."}
     </Typography>
    </Box>
    <Box display='flex' alignItems='center' gap="1rem">
     <WorkOutlineOutlined fontSize="large" sx={{color:main}}/>
     <Typography color={medium}>
     {user?.occupation ||"................."}
     </Typography>
    </Box>
  </Box>
  <Divider/>
  
  {/* third */}
  <Box p="0.5rem 0">
    <FlexBetween mb="0.5rem">
      <Typography color={medium}>
        who viewed your profile
      </Typography>
      <Typography color={main} fontWeight="500">
        7565
      </Typography>
    </FlexBetween>
    <FlexBetween p="0.5rem 0">
      <Typography color={medium}>
        impressions of your post
      </Typography>
      <Typography color={main} fontWeight="500">
        7565
      </Typography>
    </FlexBetween>
  
  </Box>
  <Divider/>
  {/* last */}
  <Box p="0.5rem 0">
   <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
    Social Profiles
   </Typography>
   <FlexBetween gap="1rem" mb="0.5rem">
    <FlexBetween gap="1rem">
      <TwitterIcon fontSize="large" color="primary"/>
      <Box>
        <Typography color={main}>
          Twitter
        </Typography>
        <Typography color={medium}>
          Social Network
        </Typography>
      </Box>
    </FlexBetween>
    <EditOutlined sx={{ color: main }}/>
   </FlexBetween>
   <FlexBetween gap="1rem" mb="0.5rem">
    <FlexBetween gap="1rem">
    <LinkedInIcon fontSize="large" color="primary"/>
      <Box>
        <Typography color={main}>
          Linked In
        </Typography>
        <Typography color={medium}>
          Network Platform
        </Typography>
      </Box>
    </FlexBetween>
    <EditOutlined sx={{ color: main }}/>
   </FlexBetween>
  </Box>
</WidgetWrapper>
    </>
  );
};

export default UserWidget;
