import React from "react";
import './episodes.css'

const Episodes: React.FC = () => {

    return (
        <main className='d-grid'>
            <section>
                <div className='title'>
                    <h1 className='my-1-h1 '>Episodes of the
                        <span> 4th </span> season of the series
                    </h1>
                    <h1 className='my-2-h1'> Rick and Morty</h1>
                </div>
                <img src="/images/image.png" style={{maxWidth: '100%'}} alt='RickAndMortyImage'
                     className='img-fluid'/>
            </section>
        </main>
    )

}
export default Episodes
