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
        <div class= "container">
            <div className="page">
                <h2 className='text'>These pets are looking for a good home</h2>
                
                <hr />
                <Link className="btn-success btn-lg"  to={"/new"}>
                    Add a pet to the shelter
                </Link>
                <hr />

                {pet.map((pet, idx) => {
                    return (
                        <p key={idx}>
                            <div className= "PetList">
                                {pet.name}, {pet.type} |
                                <Link className="btn btn-primary btn-sm" to={"/pet/" + pet._id}>
                                    Details
                                </Link>
                                |
                                |
                                <Link className="btn btn-secondary btn-sm" to={"/edit/" + pet._id}>
                                    Edit
                                </Link>
                                |
                            </div>
                        </p>
                    )
                })}
            </div>
        </div>
    );
}

export default PetList;