import React, { Component } from 'react'

class TrainnerCourse extends Component{
    render(){
        const trainner = this.props.data;
        const titleTrainner = trainner.map((data, key)=>{
            return (
                <div key={key}>
                    <h2>{data.title}</h2>
                    <p>{data.subtitle}</p>
                </div>
            )
        })

        const descriptionTrainner = trainner.map((description, key)=>{
            const div = description.description.map((data, i)=>{
                return (
                    <div className="trainner col-6" key={i}>
                        <img src={data.img.childImageSharp.fluid.src}/>
                        <span className="align-bottom">{data.trainer}</span>
                        <p>{data.description}</p>
                    </div>
                )
            })
            return div;
        })

        return(
            <div className="row full-width justify-content-center trainer-course">
                <div className="col-9">
                    { titleTrainner }
                    <div className="flex-trainner-course pt-4">
                        { descriptionTrainner }
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainnerCourse