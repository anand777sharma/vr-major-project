import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageArtwork = () => {

    const [artList, setArtList] = useState([]);

    const getDataFromBackend = async() => {
        const response = await fetch('http://localhost:5000/art/getall')
        
        const data = await response.json()
        console.log(data);
        setArtList(data);
    };

    const deleteArtwork = async(id) =>{
        console.log(id);
         const response = await fetch('http://localhost:5000/art/delete/'+id, {
           method : 'DELETE' 
         })
         console.log(response.status);
         getDataFromBackend();
         toast.success('Artwork Deleted 😎');
    }

    useEffect(() => {
        getDataFromBackend();
    }, []);

    const displayArtwork = () => {
      return <table className='table table-striped table-light'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Owner</th>
                <th>Price</th>
                <th>image</th>
                <th>CreatedAT</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {
                artList.map((artwork) => (
                    <tr>
                    <td>{artwork._id}</td>                    
                    <td>{artwork.title}</td>                    
                    <td>{artwork.description}</td>                    
                    <td>{artwork.owner}</td>                    
                    <td>{artwork.price}</td>                    
                    <td>{artwork.image}</td>                    
                    <td>{artwork.createdAt}</td>                    
                    <td>{artwork.category}</td>                    

                    <td>
                        <button className='btn btn-danger' onClick={() => {deleteArtwork(artwork._id)}}>
                         <i className='fas fa-pen' />
                        </button>
                    </td>
                </tr>
                ))
            }
        </tbody>
      </table>
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Artwork Manager</h1>
            <hr/>
            <div className='row'>
                <div className='col-md'>
                    {displayArtwork()}
                </div>
             </div>
            </div>
    )
}
export default ManageArtwork;