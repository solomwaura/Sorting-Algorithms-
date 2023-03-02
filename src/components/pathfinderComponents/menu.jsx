import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import './style.css';

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark path-nav" >
                <SimpleSelect
                    onAlgoChanged = {this.props.onAlgoChanged}
                    items={this.props.algorithms}
                />
                <SimpleSelect
                    onAlgoChanged={this.props.onMazeChanged}
                    items={this.props.mazes}
                />
                <button
                    className='btn btn-lg btn-secondary m-2 path-btn'
                    onClick={this.props.onCreateMaze}>
                    Create Maze
                </button>
                <button
                    onClick={this.props.onVisualize}
                    className="btn btn-warning btn-lg path-btn"
                >Visualize</button>
                <button
                    onClick={this.props.onClearPath}
                    className='btn btn-danger btn-lg m-2 path-btn1'>Clear Path</button>
                <button
                    onClick={this.props.onClearBoard}
                    className='btn btn-danger btn-lg m-2 path-btn1'>Clear Board</button>
            </nav>
        );
    }
}

export default Menu;