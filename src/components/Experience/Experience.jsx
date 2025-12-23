import React from 'react';
import styes from "./Experience.module.css";
import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";
import history from "../../data/history.json"

const Experience = () => {
  return (
    <section className={styes.container} id='experience'>
        <h2 className={styes.title}>Experience</h2>
        <div className={styes.content}>
          <div className={styes.skills}>
            {skills.map((skill,id)=>{
              return <div key={id} className={styes.skill}>
                <div className={styes.imageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                <p>{skill.title}</p>
              </div>
            })}
          </div>
          <ul className={styes.history}>
            {history.map((history,id)=>{
              return <li key={id} className={styes.historyItem}>
                <img src={getImageUrl(history.imageSrc)} alt={`${history.organization} Logo`} />
                <div className={styes.historyItemDetails}>
                  <h3>{`${history.role}, ${history.organization}`}</h3>
                  <p>{`${history.startDate} - ${history.endDate}`}</p>
                </div>
              </li>
            })}
          </ul>
        </div>
    </section>
  )
}

export default Experience
