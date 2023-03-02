import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import './style.css';



class Menu extends Component {
    render() {
        return (
            <div className="top">
                <nav className="nav alert-dark queen-nav">
                    <button
                        className='btn btn-secondary m-2 queen-btn'
                        onClick={this.props.onClear}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                    >
                        Clear Board
                    </button>

                    <DiscreteSlider
                        default={4}
                        min={1}
                        max={8}
                        step={1}
                        title="Grid size"
                        onCountChange={this.props.onCountChange}
                        disable={this.props.disable}
                    />
                    <DiscreteSlider
                        default={50}
                        min={1}
                        max={100}
                        step={1}
                        title="Speed"
                        onCountChange={this.props.onSpeedChange}
                    />

                    <button
                        className='btn btn-warning btn-lg queen-btn2'
                        onClick={this.props.onViusalize}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                    >
                        Visualize
                    </button>

                </nav>
            </div>
        );
    }
    isClickable = () =>{
        if( this.props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}


export default Menu;