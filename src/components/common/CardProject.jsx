import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { IoIosRocket } from 'react-icons/io'

function CardProject(props) {

    const { id, name, image } = props.item;

    return (
        // <article className='card-project'>
        //     <div className='card-title'>
        //         <h2>{name}</h2>
        //         <i></i>
        //     </div>
        //     <img src={image} alt={name}/>
        // </article>

        <article className='card-project card'>
            <div className='card-title'>
                <h2>{name}</h2>
                <i></i>
            </div>
            <div class="img img1"></div>
            <div class="img img2"></div>
            <img src={image} alt={name} className="img-top"/>
            <img src={image} alt={name} className="img-bottom"/>
            <div class="card__content">
                <div className='btn-card'><IoIosRocket className='icon'/> <p>Despliegue</p></div>
                <div className='btn-card'><GrGithub className='icon'/> <p>Repositorio</p></div>
            </div>
        </article>
    )
}

export default CardProject 