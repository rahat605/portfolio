import React from 'react';
import styes from "./Experience.module.css";
import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";
import history from "../../data/history.json"

const Experience = () => {
  return (
    <section className={styes.container} id='experience'>
        <h2 className={styes.title}>Experience</h2>
        <div>
          <div>
            {skills.map((skill,id)=>{
              return <div key={id}>
                <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                <p>{skill.title}</p>
              </div>
            })}
          </div>
          <ul>
            {history.map((history,id)=>{
              return <li key={id}>
                <img src={getImageUrl(history.imageSrc)} alt="" />
              </li>
            })}
          </ul>
        </div>
    </section>
  )
}

export default Experience
