import React from "react";
import WidgetWrapper from "../widgetwrapper";
import { Box, Typography, useTheme } from "@mui/material";
import Friends from "./friends";
import { useSelector } from "react-redux";

const Friendlist = () => {
  const { palette } = useTheme();
  const friends = useSelector((state) => state.user.friends); 
  
  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1rem" }}
      >
        Friend List
      </Typography>
      {friends.map((friend,index) => (
        <Box key={index} display="flex" flexDirection="column" gap="1.5rem">
          <Friends
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        </Box>
      ))}
    </WidgetWrapper>
  );
};

export default Friendlist;
