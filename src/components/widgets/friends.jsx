import React from "react";
import FlexBetween from "../FlexBetween";
import ProfileImage from "./profileImage";
import WidgetWrapper from "../widgetwrapper";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
const Friends = ({friendId,name,subtitle,userPicturePath}) => {
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === friendId);
  return (
    <>
        <FlexBetween>
          <FlexBetween gap="1rem">
            <ProfileImage size="55px" />
            <Box>
              <Typography color={main} variant="h5" fontWeight="500">
                {name}
              </Typography>
              <Typography color={medium} fontSize="0.75rem">
                {subtitle?subtitle:".........."}
              </Typography>
            </Box>
          </FlexBetween>
         <IconButton> {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}</IconButton>
        </FlexBetween>
    </>
  );
};

export default Friends;
