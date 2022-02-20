import React from 'react';

function App(props) {

    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments =[
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]
    const loading = false;
    if(loading) return <h1>Loading...</h1>

    const showComments = true;

    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComments &&(
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {
                            comments.map((comment, index) =>(
                                    <li key={index}>
                                        Index is: {index},
                                        Commend id is: {comment.id}
                                        and Comment is: {comment.text}
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                )
            }
        </div>
    );
}

export default App;