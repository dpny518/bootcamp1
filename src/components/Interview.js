// Interview.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Interview.css';
const questions = [
    "What is your name?",
    "What is your experience in this field?",
    "Why do you want this job?",
    "What are your strengths and weaknesses?"
];

const Interview = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false); // State to manage recording status
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        let stream;
        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };

        if (isRecording) {
            startCamera();
        } else {
            // Cleanup the camera when not recording
            if (videoRef.current && videoRef.current.srcObject) {
                const currentStream = videoRef.current.srcObject;
                const tracks = currentStream.getTracks();
                tracks.forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
        }

        return () => {
            // Cleanup when component unmounts
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [isRecording]); // Effect runs when isRecording changes

    const handleStartInterview = () => {
        setIsRecording(true); // Start recording
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmitInterview(); // Submit interview if it's the last question
        }
    };

    const handleSubmitInterview = () => {
        console.log("Interview submitted");
        setIsRecording(false); // Stop recording on submit
        navigate('/report'); // Navigate to the report page
    };

    return (
        <div>
            <h1>Interview</h1>
            {isRecording && <div><video ref={videoRef} autoPlay width="640" height="480" /></div>}
            <div>
                {isRecording ? (
                    <h2>{questions[currentQuestionIndex]}</h2>
                ) : (
                    <h2>Press "Start Interview" to begin.</h2>
                )}
            </div>
            <div>
                {!isRecording ? (
                    <button onClick={handleStartInterview}>Start Interview</button>
                ) : (
                    <button onClick={handleNextQuestion}>
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Submit Interview"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Interview;
