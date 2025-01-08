import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined
} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import FlexBetween from "../FlexBetween";
import ProfileImage from "./profileImage";
import WidgetWrapper from "../widgetwrapper";
import { useDispatch, useSelector } from "react-redux";
import { postDataApi } from "../../services/allApi";
import { setPosts } from "../../redux";

const MyPostWidget = () => {
  const [data,setData] = useState();
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [post,setPost] = useState("");
  const theme = useTheme();
  const { palette } = theme;
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const isMobile = useMediaQuery("(max-width:600px)");
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state)=>state.token);
  const dispath = useDispatch();
  
  const handleDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const handleRejected = (rejectedFiles) => {
    alert("Invalid file type. Only .jpg, .jpeg, and .png are allowed.");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.jpeg,.png",
    multiple: false,
    onDrop: handleDrop,
    onDropRejected: handleRejected,
  });
  const handleSubmit = async()=>{
    const reqHeader= { Authorization: `Bearer ${token}` }
    const formData = new FormData();
    formData.append("userId",_id);
    formData.append("description",post);
    if(image){
      formData.append("picture",image);
    }
    try{
  const result = await postDataApi(formData,reqHeader);
  if(result.status=== 200){
    setData(result?.data)
    dispath(setPosts({posts:data}));
    setImage(null);
    setPost("");
   
  }
    }catch(err){
      console.log(err);
    }
    

  }

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <ProfileImage />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e)=>setPost(e.target.value)}
          value={post}
          sx={{
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
            width: isMobile ? "80%" : "100%",
          }}
        />
      </FlexBetween>

 { isImage &&     <Box
        border={`1px dotted ${medium}`}
        mt="1rem"
        p="1rem"
        borderRadius="1rem"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {image ? (
          <Typography>{image.name}</Typography>
        ) : (
          <Typography color={palette.neutral.light}>
            Drag & drop some files here, or click to select files
          </Typography>
        )}
      </Box>}

      {image && (
        <Box mt="1rem">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Preview"
            style={{ width: "100%", borderRadius: "1rem" }}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={() => setImage(null)}
              sx={{ mt: "0.5rem", color: palette.error.main }}
            >
              <DeleteIcon />
            </Button>
            <Button
              onClick={() => setImage(null)}
              sx={{ mt: "0.5rem", color: palette.error.main }}
            >
              <EditIcon />
            </Button>
          </Box>
        </Box>
      )}
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

       {isNonMobileScreens ? <> <FlexBetween>
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
        </>
        :
        <>
         <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        </>}
        <Button
        onClick={handleSubmit}
        disabled={!post}
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
  );
};

export default MyPostWidget;
