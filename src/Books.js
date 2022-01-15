import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import axios from "./axios";
import { useForm } from "react-hook-form";
import {UploadButton} from "./Photos.js"

export default function Books() {
    const [name, setName] = useState("");

    useEffect(() => {
        
    }, []);

    // const inputRef = useRef(null)
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(inputRef.current.value);
    // }

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const handleSubmit = () => {
    //     console.log(name)
    // }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // async function createData(data) {
        //     const response = await axios.post("/create/person", {data});
    
        //     console.log(response.data)
        // }
         
        const params = new FormData();
        Object.keys(data).forEach(function(key) {
            params.append(
                'image', 
                postFileData.image ? postFileData.image : ''
            );
            params.append(
                key, 
                data[key]
            );
        }, data);
        console.log("params image", params.get("image"))
        console.log(`params email`, params.get("email"))
        console.log(`params name`, params.get("name"))
        // const formData = new FormData();
        // data.append(
        //     'image',
        //     postFileData.image ? postFileData.image : ''
        // );
        console.log("form data:" , params);
        // const response = axios.post('/image/store', params, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // });

        axios.post("/create/person", params, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log("ここ", error)
            })
        console.log(data)
        // axios.post(`http://localhost:8080/create/person`, { data })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        // createData(data)
    }

    const [postFileData, setPostFileData] = useState({})
    const changeUploadFile = async (event) => {
        const { name, files } = event.target;
        setPostFileData({
        ...postFileData,
        [name]: files[0],
        });
        console.log(name, files[0])
        event.target.value = '';
       
    };
    console.log(postFileData)
  
    return (
        <div className="App">
            <h1>Create</h1>
            <header className="App-header">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Name: </h4>
                    <input {...register('name', { required: true })} />
                    { errors.name && <span className="text-danger">名前は1文字以上</span> }
                    <h4>Email: </h4>
                    <input { ...register('email', { required: true })} />
                    { errors.email && <span className="text-danger">Emailは1文字以上</span> }
                    <UploadButton
                        className="primary"
                        name="image"
                        onChange={changeUploadFile}
                    >
                        アップロード
                    </UploadButton>
                    <div>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>

                    {/* <input onChange={handleNameChange} type="text" name="name" />
                    <input ref={inputRef} type="text" name="name" />
                    <button onClick={handleSubmit} >Submit</button> */}
            </header>
        </div>
    )
}


