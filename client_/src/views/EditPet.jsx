import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";


const Edit = () => {
    const { idParam } = useParams();
    console.log(idParam)
    const history = useHistory(); 

    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${idParam}`)
            .then(res=>{
                console.log("response***", res)
                setPetInfo(res.data.results)
                console.log(res.data.results)
            })
            .catch(err=>console.log("error*** ", err))
    },[idParam])


    const changeHandler = (e)=>{
        console.log("something changed")
        console.log(e.target.name, e.target.value)
        setPetInfo({ 
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${idParam}`, petInfo )
            .then(res=>{
                console.log("response****",res)
                history.push(`/pet/${idParam}`);
            })
            .catch(err=> console.log("error****, ", err))
    }


    return (
        <div>
            <h1>Edit {petInfo.name} </h1>
            <form onSubmit={submitHandler}>
            <div>
                    <label htmlFor="">Name:</label><br/>
                    <input onChange={ changeHandler } type="text" name="name" id="" value = {petInfo.name}/>
                    {/* <p className="text-danger">{ validationErrors.name?.message }</p> */}
                </div>
                <div>
                    <label>Type:</label><br/>
                    <input onChange={ changeHandler } type="text" name="type" id="" value = {petInfo.type}/>
                    {/* <p className="text-danger">{ validationErrors.type?.message }</p> */}
                </div>
                <div>
                    <label>Description</label><br/>
                    <input onChange={ changeHandler } type="text" name="description" id="" value = {petInfo.description}/>
                    {/* <p className="text-danger">{ validationErrors.description?.message }</p> */}
                </div>
                <div>
                    <label>Skill 1</label><br/>
                    <input onChange={ changeHandler } type="text" name="skill1" id="" value = {petInfo.skill1}/>
                </div>
                <div>
                    <label>Skill 2</label><br/>
                    <input onChange={ changeHandler } type="text" name="skill2" id="" value = {petInfo.skill2}/>
                </div>
                <div>
                    <label>Skill 3</label><br/>
                    <input onChange={ changeHandler } type="text" name="skill3" id="" value = {petInfo.skill3}/>
                </div>
                <h4><Link to = {`/`} className="btn btn-info">Home</Link> | <input className= "btn btn-primary"type="submit" value="Update" /></h4>
                
            </form>
        </div>
    );
};


export default Edit;