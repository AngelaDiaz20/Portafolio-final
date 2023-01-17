import React from 'react'

function CardProject (props) {

    const { id, name, image } = props.item;

    return (
        <article className='card-project'>
            <div className='card-title'>
                <h2>{name}</h2>
                <i></i>
            </div>
            <img src={image} alt={name}/>
        </article>
    )
}

export default CardProject 