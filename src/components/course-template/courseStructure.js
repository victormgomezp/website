import React, { Component } from 'react';

class CourseStructure extends Component{
    render(){
        const props = this.props.data;

        const menu = props.menu_structure.map((data, key)=>{
            return(
                <li key={key}>{data.title}</li>
            )
        });

        return(
            <div className="row full-width justify-content-center course-structure">
                <div className="col-9">
                <h2>Course Structure</h2>
                    <div className="flex-course-structure">
                        <div className="description-course">
                            <h3>Description Course</h3>
                            <p>Text description</p>
                            <p className="possible-project">Possible Projects:</p>
                            <p>CSS Postcard</p>
                        </div> 
                        <div className="menu-course">
                            <ul className="">
                                { menu }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseStructure