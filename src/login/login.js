import { style } from "@mui/system";   
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const MyForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionResult, setSubmissionResult] = useState('');

    const handleNameChange = (name) => {
        setName(name);
        setNameError(name.length > 5 ? '' : 'Name must be greater than 5 characters');
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
        setPasswordError(password.length > 8 ? '' : 'Password must be greater than 8 characters');
    };

    const handleSubmit = () => {
        if (name.length > 5 && password.length > 8) {
            setIsSubmitting(true);

            setTimeout(() => {
                setSubmissionResult(`Successfully submitted. Name: ${name}, Password: ${password}`);
                setIsSubmitting(false);
            }, 2000);
        } else {
            setSubmissionResult('');
            alert('Please fix the form errors.');
        }
    };

    return (
        <div style={styles.container}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Enter Your Name"
            />
            {nameError && <div style={styles.error}>{nameError}</div>}

            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder="Enter your Password"
            />
            {passwordError && <div styles={style.error}>{passwordError}</div>}

            <button onClick={handleSubmit}>Submit</button>

            {isSubmitting && (
                <div style={styles.progresscontainer}>
                    <CircularProgressbar 
                        value={45}
                        text="Submitting"
                    />
                </div>
            )}

            {submissionResult && <div styles={styles.subMissionResult}>{submissionResult}</div>}
        </div>
    );
};

const styles = {
    container: {
        padding: 16,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    progresscontainer: {
        marginTop: 20,
        width:'80px',
        margin:'auto',
    },
    subMissionResult: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
    },
};

export default MyForm;
