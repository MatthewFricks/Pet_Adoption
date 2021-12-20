import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const PetList = (props) => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setPet(res.data));
    }, [])
    
    return (
        <div>
            <h2>These pets are looking for a good home</h2>
            |
            <Link className= "btn btn-link" to={"/new"}>
                Add a pet to the shelter
            </Link> 
            |
            {pet.map((pet, idx) => {
                return (
                    <p key={idx}>
                        <div>
                            {pet.name}, {pet.type} |
                            
                            <Link className= "btn btn-link" to={"/pet/" + pet._id}>
                                Details
                            </Link> 
                            |
                            |
                            <Link className= "btn btn-link" to={"/edit/" + pet._id}>
                                Edit
                            </Link> 
                            |
                        </div>
                    </p>
                )
            })}
        </div>
    );
}
    
export default PetList;