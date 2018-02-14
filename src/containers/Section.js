import React, { Component } from 'react';
import LeftHandSection from './LeftHandSection'
import RightHandSection from './RightHandSection'

class Section extends Component {

  setPattern = (patternId, hand) => {
    this.props.setPattern(this.props.section.id, patternId, hand);
  }

  render() {
    return (
      <div className = "handGroup">
        <div >Right hand:</div><RightHandSection pattern={this.props.section.rightHand} setPattern={this.setPattern} />
        <div >Left hand:</div><LeftHandSection pattern={this.props.section.leftHand} setPattern={this.setPattern} />
      </div>
    );
  }
}

export default Section;