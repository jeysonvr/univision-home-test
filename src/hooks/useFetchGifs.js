import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( keyword, offset = 0 ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs (keyword, offset)
            .then( imgs => {
                if( offset > 0 ){
                    setState({
                        data: state.data.concat(imgs),
                        loading: false
                    });
                } else {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }
            });

    }, [keyword, offset]);


    return state;

}