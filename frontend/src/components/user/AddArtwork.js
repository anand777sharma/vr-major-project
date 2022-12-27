import { Formik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';

const AddArtwork = () => {

    const url = app_config.api_url;

    const [selImage, setSelImage] = useState("");

    const userSubmit = async (formdata) => {
        formdata.image = selImage;
        console.log(formdata);
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch(url+'/art/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(response.status === 200){
            console.log('artwork added');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'Artwork added Successfuly'
            })
        }
    }

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        setSelImage(file.name);
        fd.append("myfile", file);
        fetch(url + "/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploaded");
          }
        });
      };

  return (
    <div>
        <div className="container pt-5">
            <div className="card">
                <div className="card-body">
                    <Formik 
                    initialValues={{title : '', discription : '', owner : '', price : '', category : ''}}
                    onSubmit={userSubmit}>
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Title</label>
                                <input className='form-control' id="title" onChange={handleChange} value={values.title} />
                                <label>Discription</label>
                                <input className='form-control' id="discription" onChange={handleChange} value={values.discription} />
                                <label>owner</label>
                                <input className='form-control' id="owner" onChange={handleChange} value={values.owner} />
                                <label>Price</label>
                                <input className='form-control' id="price" onChange={handleChange} value={values.price} />
                                <label>Category</label>
                                <input className='form-control' id="category" onChange={handleChange} value={values.category} />
                                <label>Upload File</label>
                                <input className='form-control' onChange={uploadImage} type="file" />
                            <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddArtwork;