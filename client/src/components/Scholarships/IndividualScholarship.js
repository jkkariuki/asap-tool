import React from "react";
import PropTypes from 'prop-types';

class IndividualScholarship extends React.Component {
    render() {
        const {style} = this.props

        return (
            <li style={style} className="list-group-item">
                {this.props.children}
            </li>
        )
    }
}

export default IndividualScholarship;

IndividualScholarship.props = {
    style: PropTypes.string,
  
  }