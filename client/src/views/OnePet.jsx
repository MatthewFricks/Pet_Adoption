import axios from 'axios'
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { useHistory, Link } from "react-router-dom";

const OnePet = () => {
    const { idParam } = useParams();
    const [petInfo, setPetInfo] = useState({})
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${idParam}`)
            .then(res => {
                console.log("response***", res)
                setPetInfo(res.data.results)
            })
            .catch(err => console.log("error***", err))
    }, [idParam])


    const deleteClickHandler = () => {
        axios.delete(`http://localhost:8000/api/pet/${petInfo._id}`)
            .then(res => {
                console.log("response after delete", res)
                history.push("/")
            })
            .catch(err => console.log("Delete error****", err))

    }

    return (
        <div className='container'>
            <div className='page'>
                <h2>Details about: {petInfo.name}</h2>

                <p>Type: {petInfo.type}</p>
                <p>Description: {petInfo.description}</p>
                <p>Skill 1: {petInfo.skill1}</p>
                <p>Skill 2: {petInfo.skill2}</p>
                <p>Skill 3: {petInfo.skill3}</p>
                <h4><Link to={"/"} className="btn btn-info">Home</Link> | <button onClick={deleteClickHandler} className="btn btn-danger">Adopt {petInfo.name}</button></h4>
            </div>
        </div>
    );
};

export default OnePet;

