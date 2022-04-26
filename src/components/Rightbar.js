import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography varient="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6oHscTdjP7Jvyvw-jjvIsm8ATgqHFeQeHIaUZn0u3mf-Akq_SZFplqZL7JzPHpRy&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://yt3.ggpht.com/ytc/AKedOLSoOzF87J7UApGUrkRy8X9YHBEokNzojHHdyZG7dw=s900-c-k-c0x00ffffff-no-rj"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?cs=srgb&dl=pexels-carlos-oliva-3586966.jpg&fm=jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?cs=srgb&dl=pexels-roberto-nickson-2478248.jpg&fm=jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography varient="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6oHscTdjP7Jvyvw-jjvIsm8ATgqHFeQeHIaUZn0u3mf-Akq_SZFplqZL7JzPHpRy&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Jack Pritom Soren
                  </Typography>
                  {
                    " — Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://yt3.ggpht.com/ytc/AKedOLSoOzF87J7UApGUrkRy8X9YHBEokNzojHHdyZG7dw=s900-c-k-c0x00ffffff-no-rj"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Jack, Partho, Abrianna
                  </Typography>
                  {
                    " — Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Rightbar;
