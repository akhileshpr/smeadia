import { Box } from "@mui/material";
import React from "react";
import SERVER_URL from "../../services/url";
import image1 from '../../assets/Screenshot 2024-12-21 185808.png'
const ProfileImage = ({ picturePath, size = "60px" }) => {
  
  return (
    <>
      <Box width={size} height={size}>
        <img
         src={picturePath ? `${SERVER_URL}/uploads/${picturePath}` : image1}
          alt="user"
          width={size}
          height={size}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </Box>
    </>
  );
};

export default ProfileImage;
