import axios from 'axios';
import { useState, useEffect } from 'react';

const API = 'https://official-joke-api.appspot.com';

const useJoke = () => {
    const [loading, setLoading] = useState(true);
    const [joke, setJoke] = useState();
    const [punchline, setPunchline] = useState();
    const [error, setError] = useState(false);
    
    const getJoke = (cat) => {
        let jokeUrl = '/random_joke';
        if (cat != 'All')
            jokeUrl = '/jokes/' + cat.toLowerCase() + '/random';

        axios.get(API + jokeUrl)
        .then(function (response) {
            const res = response.data[0] ? response.data[0] : response.data;
            setLoading(false);
            setJoke(res.setup);
            setPunchline(res.punchline);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            setError("Error Fetching Joke");
        });
    }
    
    useEffect(() => {
        getJoke("All");
    }, []);

    const refetch = (cat) => {
        setLoading(true);
        setJoke();
        getJoke(cat);
    };


    return [loading, joke, punchline, error, refetch]
};

export default useJoke;