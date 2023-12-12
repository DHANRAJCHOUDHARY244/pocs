import React from 'react';
import Review from './Review';
import './index.css'
function App() {
    return (
        <>
            <div className="test-head">
                TESTIMONIALS
            </div>
            <main className='main' style={{marginBottom: '40px'}}>
                <section className='sidebar-slider'>
                    <h1>
                        What do people praise about <br />
                        <span>POCS?</span>
                    </h1>
                </section>
                <section className="container-test">
                    <div children="title">
                        <div className="underline"></div>
                    </div>
                    <Review />
                </section>
            </main>
        </>
    );
}

export default App;
