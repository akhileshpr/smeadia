import React, { useState } from 'react'
import WidgetWrapper from '../widgetwrapper'
import Friends from './friends'
import { IconButton, Typography, useTheme } from '@mui/material'
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
import FlexBetween from '../FlexBetween';
const PostWidget = ({picturePath,isLiked}) => {
    const [isComments, setIsComments] = useState(false);
    const {palette} = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
    return (
   <>
   <WidgetWrapper m="2rem 0">
    <Friends/>
    <Typography color={main} sx={{ mt: "1rem" }}>
        description
      </Typography>
      {!picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
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
        </FlexBetween>

   </WidgetWrapper>
   </>
  )
}

export default PostWidget