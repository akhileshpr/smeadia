import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import { updateUserApi } from "../services/allApi";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux";

const editSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string(),
});

const Editform = ({ open, close, user }) => {
  const { palette } = useTheme();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
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

  const handleFormSubmit = async (values, onSubmitProps) => {
    const reqHeader = { Authorization: `Bearer ${token}` };
    const reqData = new FormData();
    // Object.entries(values).forEach(([k, v]) => reqData.append(k, v));
    reqData.append("picture", image);
    reqData.append("firstName", values?.firstName);
    reqData.append("lastName", values?.lastName);
    reqData.append("location", values?.location);
    reqData.append("occupation", values?.occupation);
    const result = await updateUserApi(user?._id, reqData, reqHeader);
    if (result?.status === 200) {
      dispatch(setLogin({ user: result.data, token: token }));
      close();
      onSubmitProps.resetForm();
    }
  };

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
    occupation: user?.occupation || "",
    picture: user?.picture || "",
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} p={5}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={editSchema}
          enableReinitialize
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
                {preview && (
                  <Box
                    mt="1rem"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={preview}
                      alt="Preview"
                      style={{
                        maxWidth: "150px",
                        maxHeight: "205px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                )}
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
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
                  error={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
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
      </Box>
    </Modal>
  );
};

export default Editform;
