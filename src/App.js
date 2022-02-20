import React from 'react';
import Header from "./components/Header";

function App(props) {

    return (
        <>
            <Header text={true}/>
            <div className='container'>
                <h1>My App</h1>
            </div>
        </>

    );
}

export default App;