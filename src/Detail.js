import React from 'react';
import {useParams} from "react-router-dom"

function Detail(props) {

    // const id = props.match.params.id;
    const {id} = useParams();
    console.log(id, "koko");
    return (
        <h2>Detail {id}</h2>
    );
}

export default Detail;
