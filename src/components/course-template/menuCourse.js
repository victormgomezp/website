import React, { Component } from 'react';

class MenuCourse extends Component{
    render(){

        const data = this.props.data;
        const menuFixed = data.menu.map((titleMenu, i)=>{
            return (
                <li key={i}>{titleMenu.title}</li>
                );
        })

        return(
            <div className="row full-width menu-course">
                <div className="flex-menu-course">
                    <div className="menu">
                        <ul>
                            {menuFixed}
                        </ul>
                        <button className="btn btn-red">
                            Apply Now
                        </button>
                    </div>
                    <div className="menu-description">
                        <ul>
                            <li>
                                <h3 className="title">Title</h3>
                                <p className="description">Descripcion</p>
                            </li>
                            <li>
                                <h3 className="title">Title</h3>
                                <p className="description">Descripcion</p>
                            </li>
                            <li>
                                <h3 className="title">Title</h3>
                                <p className="description">Descripcion</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCourse