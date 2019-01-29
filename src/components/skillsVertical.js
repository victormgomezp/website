import React, { Component } from 'react'

import logo from '../img/slack.png'

class SkillsVertical extends Component{
    render(){
        const skills = this.props.data;

        const sectionSkill = skills.map((description, key)=>{
            const r = description.description.map((data, i)=>{
                return (
                    <div className="col-9 pb-5" key={i}>
                        <div className="flex-skill">
                            <div className="logo col-2">
                                <img src={data.icon.childImageSharp.fluid.src}/>
                            </div>
                            <div className="col-10 title-skill">
                                <h3 className="no-margin">{data.title}</h3>
                            </div>
                            <div className="col-12 pt-4 description-skill">
                                <p className="no-margin">{data.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            return r;
        })
        return(
            <div>
            <div className="row full-width justify-content-center title-skills-course">
                <div className="col-9">
                    <h2>Skills:</h2>
                    <h2 className="pt-4">{ skills.map((data) => data.titleTechnology) }</h2>
                    <p className="pt-5">{ skills.map((data) => data.subtitle) }</p>
                </div>
            </div>
            <div className="row full-width justify-content-center skills-course pt-4">
                {sectionSkill}
            </div>
            </div>
        )
    }
}

export default SkillsVertical