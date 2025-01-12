import React, { useEffect, useState } from "react";
import WidgetWrapper from "../widgetwrapper";
import { Box, Typography, useTheme } from "@mui/material";
import Friends from "./friends";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriends } from "../../services/allApi";
import { setFriends } from "../../redux";

const Friendlist = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
 console.log(friends);
 
  const [error, setError] = useState(null);

  const getFriends = async () => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const result = await getUserFriends(userId, reqHeader);
      if (result.status === 200) {
        // dispatch(setFriends({ friends: result?.data }));
        setError(null);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load friend list.");
    }
  };

  useEffect(() => {
    getFriends();
  }, [userId, token]);

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
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : friends?.length ? (
        friends.map((friend) => (
          <Box key={friend._id} display="flex" flexDirection="column" gap="1.5rem">
            <Friends
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picture}
            />
          </Box>
        ))
      ) : (
        <Typography color={palette.neutral.medium}>
          No friends found.
        </Typography>
      )}
    </WidgetWrapper>
  );
};

export default Friendlist;
