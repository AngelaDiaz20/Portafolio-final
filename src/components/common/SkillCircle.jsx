import React from 'react'


function SkillCircle(props) {

    return (
        <article>
          <div className={`skills-circle ${props.classContainer}`}>
            <img src={props.image} alt={props.name} className={props.classImage}/>
          </div>
          <p>{props.name}</p>
        </article>
    )
}

export default SkillCircle 