import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "../FlexBetween";
import ProfileImage from "./profileImage";
import WidgetWrapper from "../widgetwrapper";

const MyPostWidget = () => {
  const [image,setImage] = useState(null);
  const [isImage,setIsImage] = useState(false);
  const theme = useTheme();
  const { palette } = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  console.log(isImage);
  
  return (
    <>
      <WidgetWrapper>
        <FlexBetween gap="1.5rem">
          <ProfileImage />
          <InputBase
            placeholder="whats on your mind..."
            sx={{
              backgroundColor: palette.neutral.light,
              borderRadius: "2rem",
              padding: "1rem 2rem",
              width: "100%",
            }}
          />
        </FlexBetween>
        <Divider sx={{ margin: "1.25rem 0" }} />
        <FlexBetween>
          <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
            <ImageOutlined sx={{ color: mediumMain }} />
            <Typography
              color={mediumMain}
              sx={{ "&:hover": { cursor: "pointer", color: medium } }}
            >
              Image
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <GifBoxOutlined sx={{ color: mediumMain }} />
            <Typography color={mediumMain}>Clip</Typography>
          </FlexBetween>
          <FlexBetween gap="0.25rem">
            <AttachFileOutlined sx={{ color: mediumMain }} />
            <Typography color={mediumMain}>Attachment</Typography>
          </FlexBetween>

          <FlexBetween gap="0.25rem">
            <MicOutlined sx={{ color: mediumMain }} />
            <Typography color={mediumMain}>Audio</Typography>
          </FlexBetween>
          <Button
            sx={{
              color: palette.background.alt,
              backgroundColor: palette.primary.main,
              borderRadius: "3rem",
            }}
          >
            Post
          </Button>
        </FlexBetween>
      </WidgetWrapper>
    </>
  );
};

export default MyPostWidget;
