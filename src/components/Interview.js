import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import './Interview.css';
import { useNavigate } from 'react-router-dom'; // Updated import

const Interview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const navigate = useNavigate(); // Updated to useNavigate
  
  const questions = [
    "Tell me about your experience with the Red Cross volunteering.",
    "What motivated you to pursue a degree in biology?",
    "Describe a challenging project you've worked on in high school.",
    "What extracurricular activities are you most proud of?",
  ];

  const webcamRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    // Simulate recording behavior
    setTimeout(() => setTranscript(questions[currentQuestionIndex]), 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const nextQuestion = () => {
    setTranscript(''); // Clear transcript between questions
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, navigate to report page
      navigate("/report"); // Updated to use navigate
    }
  };

  return (
    <div className="interview-container">
      <div className="interview-box">
        <h1>College Interview AI</h1>

        {/* Webcam View */}
        <div className="webcam-wrapper">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam-view"
          />
        </div>

        {/* Start and Stop Recording Buttons */}
        {!isRecording && (
          <button onClick={startRecording}>
            {currentQuestionIndex === questions.length - 1 ? "Submit Interview" : "Start Interview"}
          </button>
        )}

        {isRecording && (
          <>
            <div className="recording">Recording...</div>
            <button className="stop-button" onClick={stopRecording}>Stop Recording</button>
          </>
        )}

        {/* Transcript */}
        {transcript && (
          <div className="transcript">
            <p><strong>Interviewer Question:</strong></p>
            <p>{transcript}</p>
          </div>
        )}

        {/* Next Question Button */}
        {transcript && currentQuestionIndex < questions.length - 1 && (
          <button className="next-button" onClick={nextQuestion}>
            Next Question
          </button>
        )}

        {/* Submit Interview Button */}
        {transcript && currentQuestionIndex === questions.length - 1 && (
          <button className="submit-button" onClick={nextQuestion}>
            Submit Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default Interview;
