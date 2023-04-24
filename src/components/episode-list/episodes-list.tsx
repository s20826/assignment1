import * as React from 'react';
import {Episode} from "../../common/interfaces/episode";
import './episode-list.css'

interface EpisodeListProps {
    episodes: Episode[],
    count: number
}

const EpisodesList: React.FC<EpisodeListProps> = ({episodes, count}: EpisodeListProps) => {
    return (
        <ul className='list-group '>
            {episodes.map((episode, index) =>
                <li className='list-group-item border-0' style={{padding: 0}} key={index}>
                    <div className="row">
                        <div className="div-index col-sm-3 col-md-3 col-xl-2 border-end">{episode.episode}</div>
                        <div className="div-name col-sm-6 offset-sm-1 col-md-7 offset-md-0"
                             style={index % 2 ? {color: '#DAED49'} : {color: '#00BDD4'}}>
                            {episode.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="div-empty col-sm-3 col-md-3 col-xl-2 border-end"></div>
                        <div className="div-air-date col-sm-6 offset-sm-1 col-md-7 offset-md-0">
                            {episode.air_date}
                        </div>
                    </div>
                    {index + 1 !== count && <hr/>}
                </li>
            )}
        </ul>
    )
}

export default EpisodesList
