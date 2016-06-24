import React, {Component} from 'react';

export default class ResolutionSingle extends Component {

    toggleChecked() {
        Meteor.call("toggleResolution", this.props.resolution)
    }

    deleteResolution() {
        Meteor.call("deleteResolution", this.props.resolution);
    }

    render() {
        const resolutionClass = this.props.resolution.complete ? "checked" : "";
        const status = this.props.resolution.complete ? <span className="completed">Completed</span> : '';
        
        return (
            <li className={resolutionClass}>
                <input type="checkbox"
                       id={this.props.resolution._id}
                       readOnly={true}
                       checked={this.props.resolution.complete}
                       onClick={this.toggleChecked.bind(this)}/>
                <label htmlFor={this.props.resolution._id}>{this.props.resolution.text}</label>
                {status}
                <button className="btn-cancel"
                        onClick={this.deleteResolution.bind(this)}>
                    &times;
                </button>
            </li>
        );
    }
}
