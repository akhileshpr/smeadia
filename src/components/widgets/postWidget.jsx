import React, { useState } from 'react'
import WidgetWrapper from '../widgetwrapper'
import Friends from './friends'
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
import FlexBetween from '../FlexBetween';
import SERVER_URL from '../../services/url';
const PostWidget = ({postId,postUserId,name,description,location,picturePath,userPicturePath,likes,comments,isLiked}) => {
  
    const [isComments, setIsComments] = useState(false);
    const {palette} = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
    return (
   <>
   <WidgetWrapper m="2rem 0">
    <Friends 
     friendId={postUserId}
     name={name}
     subtitle={location}
     userPicturePath={userPicturePath}
    />
    <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`${SERVER_URL}/Uploads/${picturePath}`}
        />
      )}
       <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>77</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>56</Typography>
          </FlexBetween>
        </FlexBetween>
        <IconButton>
          <ShareOutlined />
        </IconButton>
        </FlexBetween>
        {isComments && (
        <Box mt="0.5rem">
          {/* {comments.map((comment, i) => ( */}
            <Box >
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                comment
              </Typography>
            </Box>
          {/* ) */}
          {/* ) */}
          {/* } */}
          <Divider />
        </Box>
      )}

   </WidgetWrapper>
   </>
  )
}

export default PostWidget