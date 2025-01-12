import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import { loginApi } from "../services/allApi";

const editSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string()
});

const initialValues = {
  firstName: "",
  lastName: "",
  location: "",
  occupation: "",
  picture: "",
};

const Editform = () => {
  const { palette } = useTheme();
  const [image, setImage] = useState(null);
 console.log(image);
 
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

  const handleFormSubmit = async(values, onSubmitProps) => {
    console.log(values);
    
    const reqData = new FormData();
    Object.entries(values).forEach(([k, v]) => reqData.append(k, v));
    if (image) {
      reqData.append("picture", image);
    }

};

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={editSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              columnGap: 2,
              rowGap: 1.5,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
              },
            }}
          >
            <Box
              border={`1px dotted ${palette.neutral.medium}`}
              mt="1rem"
              p="1rem"
              borderRadius="1rem"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Typography color={palette.neutral.light}>
                Drag & drop some files here, or click to select files
              </Typography>
            </Box>

            <TextField
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              label="Location"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
              name="location"
              error={Boolean(touched.location) && Boolean(errors.location)}
              helperText={touched.location && errors.location}
            />
            <TextField
              label="Occupation"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.occupation}
              name="occupation"
              error={Boolean(touched.occupation) && Boolean(errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />
          </Box>
          <Button
            fullWidth
            type="submit"
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
            }}
          >
            SUBMIT
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Editform;
