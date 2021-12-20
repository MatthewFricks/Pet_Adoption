import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";

const NewForm = () => {

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        name: null,
        type: null,
        description: null,
        skill1: null,
        skill2: null,
        skill3: null
    });

    let [validationErrors, setValidationErrors] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("***info-->", formInfo)
        axios.post("http://localhost:8000/api/pet", formInfo)
            .then(res => {
                console.log("***response-->", res)
                if (res.data.err) {
                    setValidationErrors(res.data.err.errors)
                }
                else {
                    history.push("/");
                }
            })
            .catch(err => console.log("error***", err))
    }

    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='container'>
            <div className='page'>
                <h2>Know a pet needing a home?</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="">Name:</label><br />
                        <input onChange={changeHandler} type="text" name="name" id="" />
                        <p className="text-danger">{validationErrors.name?.message}</p>
                    </div>
                    <div>
                        <label>Type:</label><br />
                        <input onChange={changeHandler} type="text" name="type" id="" />
                        <p className="text-danger">{validationErrors.type?.message}</p>
                    </div>
                    <div>
                        <label>Description</label><br />
                        <input onChange={changeHandler} type="text" name="description" id="" />
                        <p className="text-danger">{validationErrors.description?.message}</p>
                    </div>
                    <div>
                        <label>Skill 1</label><br />
                        <input onChange={changeHandler} type="text" name="skill1" id="" />
                    </div>
                    <div>
                        <label>Skill 2</label><br />
                        <input onChange={changeHandler} type="text" name="skill2" id="" />
                    </div>
                    <div>
                        <label>Skill 3</label><br />
                        <input onChange={changeHandler} type="text" name="skill3" id="" />
                    </div>
                    <Link to={"/"} className="btn btn-info">Home</Link>
                    <input className='btn btn-secondary' type="submit" />
                </form>
            </div>
        </div>
    )
}
export default NewForm;