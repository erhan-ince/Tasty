import React from 'react';
import {
    Link
} from "react-router-dom";

const CategoryItem = (props) => {
    return (  
        <Link to={`/recipee/${props.id}`}>
            <div className='CategoryItem'>
                <img src={props.url} alt="" />
                <h2>{props.title}</h2>
            </div>
        </Link>
    );
}

export default CategoryItem;