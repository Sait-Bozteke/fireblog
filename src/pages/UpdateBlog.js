import React,{useContext} from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { createUser, googleSignUp } from "../helpers/firebase";
import registerImg from "../assets/blok.png";
import googleImg from "../assets/google.png";
import { BlogContext } from "../context/BlogContext";
import {AuthContext} from "../context/AuthContext"
import app from "../helpers/firebase";
import Toastify from "../helpers/toastNotify";



const UpDateBlog = () => {
  const {updateBlog,dataBlog} = useContext(BlogContext)
  const { user, email } = useContext(AuthContext);
  const location = useLocation()
  let data = location.state.item
  const initialVlaues = {
    ...data,title: data.title, image: data.image, content: data.content 
  }
  const[info,setInfo]= useState(initialVlaues)
//const [updatedData,setUpdatedData] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(info);
    Toastify("succsess")
    navigate("/");
    
   
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  

  
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{ borderRadius: "10px", boxShadow: "10px 10px 10px black" }}
      >
        <Box
          sx={{
            height: "100vh",
            marginTop: "20vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="register_img"
            src={registerImg}
            sx={{ width: 180, height: 180 }}
            style={{ backgroundColor: "rgb(24,101,129)" }}
          />
          <Typography
            variant="h6"
            component="h6"
            sx={{ m: 3 }}
            style={{ color: "rgb(24,101,129)" }}
          >
            ???????????? UPDATE BLOG ????????????
          </Typography>

          <form onSubmit={handleSubmit} >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  id="title"
                  label="Title"
                  name="title"
                  value={info.title}
                  onChange={handleChange}
                  variant="outlined"
                  type="text"
                  autoComplete="on"
                  //onChange={(e)=>setEmail(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="image"
                  label="image URL"
                  name="image"
                  value={info.image}
                  onChange={handleChange}
                  variant="outlined"
                  type="image url"
                  autoComplete="current-password"
                  //onChange={(e)=>setPassword(e.target.value)}
                  required
                  //size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                label="Content"
                name="content"
                value={info.content}
                onChange={handleChange}
                  maxRows={8}
                  aria-label="maximum height"
                  placeholder="Content"
                  fullWidth
                  style={{ width: 600,height: 150 }}
                />
              </Grid>

              <Grid item xs={12} container rowSpacing={0}>
                <Button
                  style={{ backgroundColor: "rgb(24,101,129)" }}
                  variant="contained"
                  color="primary"
                  sx={{ m: 1 }}
                  fullWidth
                  type="submit"
                
                >
                  UPDATE
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default UpDateBlog;