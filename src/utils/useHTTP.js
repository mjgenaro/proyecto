import { useEffect, useState } from 'react';
import axios from 'axios';

const useGet = ({url, params = {}, initialState = []}) =>{
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const get = async () => {
            try{
                const { data : Jugadores } = await axios.get(url, params);
                console.log(Jugadores);
                setData(Jugadores);
            }
            catch(err){
                console.log(err)
                setError(true);
            }
        }
        get();
    },[url]);
    return [data, error];
};

const usePost = ({url, params = {}, initialState = []}) =>{
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const post = async () => {
            try{
                const Jugadores = await axios.post(url, params);
                console.log(Jugadores);
                setData(Jugadores);
            }
            catch(err){
                console.log(err)
                setError(true);
            }
        }
        post();
    },[url]);
    return [data, error];
};


export default {useGet, usePost};
