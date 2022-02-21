import React from 'react';
import {useState} from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header/>
            <div className='container'>
                <FeedbackList feedback={feedback}/>
                {/*<Card>This is my Card Styled Component Example</Card>*/}
            </div>
        </>
    );
}

export default App;