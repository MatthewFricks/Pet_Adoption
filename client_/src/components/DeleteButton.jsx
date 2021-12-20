import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { petId, successCallback } = props;
    
    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePet}>
            Delete
        </button>
    )
}