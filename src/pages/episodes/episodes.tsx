import React from "react";
import './episodes.css'
import {useQuery} from "@apollo/client";
import {GET_EPISODES} from "../../api/apiCall";

const Episodes: React.FC = () => {

    const {loading, error, data} = useQuery(GET_EPISODES, {
        variables: {"episodes": {"episode": "S04"}}
    })
    let content;
    if (error) {
        content = <p>Error : {error.message}</p>
    } else if (loading) {
        content = <p>Loading...</p>
    } else {
        content= {data}
        console.log(content)
    }
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
