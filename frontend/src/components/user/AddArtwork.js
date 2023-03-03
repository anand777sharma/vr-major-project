import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import app_config from "../../config";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddArtwork = () => {
  const url = app_config.api_url;
  const [selImage, setSelImage] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const navigate = useNavigate();

  const userForm = {
    title: "",
    image: "",
    description: "",
    price: "",
    artist: currentUser._id,
    createdAt: new Date(),
  };

  const userSubmit = (formdata) => {
    formdata.image = selImage;
    console.log(formdata);

    fetch(url + "/artwork/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Artwork Added!!",
          }).then(() => {
            navigate("/user/manageartwork");
          });
        });
      }
    });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: "2rem",
        background:
          "linear-gradient(to right, #fff3, #fff3), url(https://wallpaperaccess.com/full/3899650.jpg)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center h-100">
          <div className="col-md-7">
            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, errors, touched }) => (

                <div className="card " style={{ background: "url(https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/background-css-javascript/CSS%20background%20Animation.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="card-header">
                    <h2>Add New Artwork Here</h2>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <TextField
                        variant="standard"
                        className="mt-4 w-100"
                        label="Title"
                        id="title"
                        onChange={handleChange}
                        value={values.title}
                      />
                      <TextField
                        variant="standard"
                        className="mt-4 w-100"
                        label="Price"
                        id="price"
                        onChange={handleChange}
                        value={values.price}
                      />

                      <TextField
                        variant="standard"
                        className="mt-4 w-100"
                        label="Description"
                        id="description"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        value={values.description}
                      />
                      <input
                        type="file"
                        className="mt-4 form-control"
                        onChange={uploadFile}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        className="float-end mt-5"
                      >
                        Add Artwork
                      </Button>
                    </form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
          {/* <div className="col-md-5"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AddArtwork;