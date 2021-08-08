import React from 'react';
import './Card.css';

function Card(props) {
    const widthCard = { width: "18rem" };
    return (
        <>
            <div class="col-lg-4">
                <div class="card cardBtn" style={widthCard}>
                    <img class="card-img-top" src={props.image} alt="Card cap" />
                    <div class="card-body">
                        <p class="card-text text-center">{props.Text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;