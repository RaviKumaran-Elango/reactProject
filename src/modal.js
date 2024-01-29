import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./homepage";

const SimpleModal=({isopen,handleClose})=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit =()=>{
        //handle from submission logic here
        console.log('From submitted',formData);
        //close the modal after submission
        handleClose();
    };
    return(
        <Dialog open={isopen} onClose={handleClose}>
            <DialogTitle>modal Title</DialogTitle>
            <DialogContent>
                <from>
                    <TextField 
                    label="Username"
                    name="name"
                    value={formData.name}
                    onchange={handleChange}
                    fullwidth
                    margin="normal"
                    />
                    <TextField
                    label="password"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                    fullwidth
                    margin="normal"
                    />
                    <Link a href={"/"}>login</Link>
                </from>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>close</Button>
                <Button onClick={handleSubmit} color="primary"> Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

const Modal=()=>{ 
    const [isModalOpen, setIsModalOpen]= useState(false);

    const handleOpenModal=()=>{
        setIsModalOpen(true);
    };

    const handleCloseModal=()=>{
        setIsModalOpen(false);
    };
    return(
        <div>
            <Button variant="outlined" onClick={handleOpenModal}>Order Now</Button>
            <SimpleModal isopen={isModalOpen} handleClose={handleCloseModal}/>
        </div>
    );
};
export default Modal;