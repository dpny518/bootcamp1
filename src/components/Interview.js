// Interview.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSubmitInterview = () => {
        console.log("Interview submitted");
        setIsRecording(false); // Stop recording on submit
        navigate('/report'); // Navigate to the report page
    };

    const handleStartInterview = () => {
        setIsRecording(true); // Start recording
    };

    return (
        <div>
            <h1>Interview</h1>
            <div>
                <video ref={videoRef} autoPlay width="640" height="480" />
            </div>
            <div>
                <h2>{questions[currentQuestionIndex]}</h2>
            </div>
            <div>
                {currentQuestionIndex < questions.length - 1 ? (
                    <button onClick={handleNextQuestion}>Next Question</button>
                ) : (
                    <button onClick={handleSubmitInterview}>Submit Interview</button>
                )}
            </div>
            {!isRecording && <button onClick={handleStartInterview}>Start Interview</button>}
        </div>
    );
};

export default Interview;
