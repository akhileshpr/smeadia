import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "../form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      {/* Header Section */}
      <Box
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>

      {/* Form Section */}
    <Box padding="2rem">
          <Box
            // display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mt="0.45rem"
            p="2rem"
            // width={isNonMobileScreens ? "40%" : "90%"}
            maxWidth="500px"
            borderRadius="0.5rem"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            backgroundColor={theme.palette.background.alt}
            mx="auto"
          >
            <Typography
              variant="h5"
              fontWeight="500"
              color={theme.palette.text.primary}
              mb="1.5rem"
            >
              Welcome Back! Please Login
            </Typography>
    
            {/* Form Component */}
            <Form />
          </Box>
    </Box>
    </Box>
  );
};

export default LoginPage;
