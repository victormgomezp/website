import React, { Component } from 'react';

import SkillFund from '../img/skill_fund.png';

class PriceFinancing extends Component{

    constructor(props){
        super(props);

        this.state = {
            showCircleMonth: true,
            selectMonth: ''
        }
    }

    handleSelectMonth(key){
        console.log(key, 'llave!');
        this.setState({
            selectMonth: key
        })
    }

    render(){
        const props = this.props;
        const price = this.props.data;

        const linePrice = price.per_month.map((data, key)=>{
            return (
                (this.state.showCircleMonth && this.state.selectMonth == key) ?
                <div className="col-2 no-padding line-red" key={key}>
                    <div className="circle" onClick={() => this.handleSelectMonth(key)}>
                        <div className="point-circle"></div>
                    </div>
                    <div className="only-point-circle"></div>
                    <p className="month-selected">{data.duration}</p>
                </div>
                :
                <div className="col-2 no-padding line-red" key={key}>
                    <div onClick={() => this.handleSelectMonth(key)} style={{height:`11px`, width: `22px`}}>
                        <div className="only-point-circle"></div>
                    </div>
                    <p className="month">{data.duration}</p>
                </div>
            )
        })

        return(
            <div className="row justify-content-center full-width pricing-financing">
                <div className="col-9 title-pricing">
                <h2>Pricing & Financing</h2> 
                <p className="no-margin">{price.description}</p>
                    <div className="col-12 no-padding section-pricing-financing">
                        <div className="description-pricing-financing">
                            <h3 className="no-margin">{price.price}</h3>
                            <p className="no-margin pt-2">{price.description_price}</p>
                            {(props.btnApply) ? <button className="btn btn-red-large">Apply to the program</button> : ''}
                        </div>
                        <div className="flex-pricing-financing pb-4 pt-4">
                            <div className="col-3 no-padding">
                                <div className="line align-middle" />
                            </div>
                            <div className="col-1">
                                <p className="text-center text no-margin">Or</p>
                            </div>
                            <div className="col-8 no-padding">
                                <div className="line align-middle" />
                            </div>
                        </div>
                        <div className="description-pricing-financing">
                            <h3 className="no-margin pb-3">{price.extend_plan}</h3>
                        </div>
                    </div>
                    <div className="col-12 no-padding plan-price">
                        <p className="no-margin">
                            {price.extend_plan_description}
                        </p>
                        <div className="flex-plan-price">
                            <div className="col-2 no-padding line-red"></div>
                            { linePrice }
                        </div>
                        <span>
                            <button className="btn btn-red-large">Apply to Financing</button>
                        </span>
                        <span>
                            <img className="no-margin" src={SkillFund} style={{maxWidth:`50px`, position:`absolute`, bottom:`0px`}}/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceFinancing