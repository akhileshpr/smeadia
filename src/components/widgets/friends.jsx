import React from "react";
import FlexBetween from "../FlexBetween";
import ProfileImage from "./profileImage";
import WidgetWrapper from "../widgetwrapper";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveFriends } from "../../services/allApi";
import { setFriends } from "../../redux";
import { useNavigate } from "react-router-dom";
const Friends = ({ friendId, name, subtitle, userPicturePath }) => {
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state)=>state.token);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === friendId);
  const sameUser = _id !== friendId
  const navigate = useNavigate();
  
  const patchFriend = async()=>{
    try{
      const reqHeader = { Authorization: `Bearer ${token}` };
      const result = await addRemoveFriends(_id,friendId,reqHeader);
     if(result?.status === 200){
      dispatch(setFriends({ friends: result?.data }));
     }
     console.log(result);
     
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
      <FlexBetween>
        <FlexBetween gap="1rem">
          <ProfileImage size="55px" />
          <Box 
          onClick={()=>{
            navigate(`/profile/${friendId}`)
          }} 
          sx={{cursor:'pointer'}}>
            <Typography color={main} variant="h5" fontWeight="500">
              {name}
            </Typography>
            <Typography color={medium} fontSize="0.75rem">
              {subtitle ? subtitle : ".........."}
            </Typography>
          </Box>
        </FlexBetween>
        {<IconButton
          onClick={() => patchFriend()}
          sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
        >
          {" "}
          {(isFriend ) ? (
            <PersonRemoveOutlined sx={{ color: primaryDark }} />
          ) : (
            <PersonAddOutlined sx={{ color: primaryDark }} />
          )}
        </IconButton>}
      </FlexBetween>
    </>
  );
};

export default Friends;
