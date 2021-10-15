import React, { useEffect, useCallback } from "react";
import './Card.css';
import mer from '../../img/1.jpeg';
import mou from '../../img/2.jpeg';
import man from '../../img/3.jpeg';

function Card(props) {
    const [pic, setPic] = React.useState(props.item.brand)

    useEffect(() => {
        if (props.item.brand === 'MERON Tea') {
            setPic(mer)
        }
        if (props.item.brand === 'MounTea') {
            setPic(mou)
        }
        if (props.item.brand === 'Manana Tea') {
            setPic(man)
        }
    }, [pic])
    console.log(props, '0100101')
    return (
        <section className='card'>
            <div className='card__column'>
                <img className='card__img' src={pic} />
            </div>
            <div className='card__column'>
                <p className='card__text card__name'>{props.item.brand}</p>
                <p className='card__text card__data'>{props.item.date}</p>
                <p className='card__text card__mesto'>Область {props.item.oblast}</p>
                <p className='card__text card__quantity'>{props.item.quantity} шт.</p>
                <p className='card__text card__prise'>Цена {props.item.totalPrice} рублей</p>
                <p className='card__text card__save'>Со склада {props.item.warehouseName}</p>
            </div>
        </section>
    );
}

export default Card;