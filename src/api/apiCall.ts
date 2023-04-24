import {gql} from "@apollo/client";

export const GET_EPISODES = gql`
    query get_episodes($episodes :FilterEpisode){
        episodes(filter: $episodes){
            results{
                episode
                name
                air_date
            }
            info{
                count
            }
        }
    }`;

