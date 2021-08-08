import React from 'react';
import './Card.css';
import {cards} from '../../services/cards';
import {useHistory} from 'react-router-dom';

function Card() {
    let history = useHistory();
    const widthCard = { width: "18rem" };
    const cardsContent = JSON.parse(cards);
    const goToPage = (page) =>{
        history.push(page);
    }
    return (
        <>
            {
                cardsContent.cards.map((content,index) => (
                        <div class="col-lg-4">
                            <div class="card cardBtn" style={widthCard} onClick={()=>goToPage(content.page)}>
                                <img class="card-img-top" src={`${process.env.PUBLIC_URL}/${content.image}.png`} alt="Card cap" />
                                <div class="card-body">
                                    <p class="card-text text-center">{content.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}

export default Card;