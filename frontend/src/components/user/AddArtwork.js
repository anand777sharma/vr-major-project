import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const AddArtwork = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);
        // 1. Url
        // 2. Request Method
        // 3. Data
        // 4. Data Format

        // to send request on backend - to connect frontend and backend.
        const response = await fetch('http://localhost:5000/user/add', {
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