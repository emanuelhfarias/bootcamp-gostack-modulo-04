import React, { Component } from 'react';

class TechList extends Component {

  state = {
    techs: ['NodeJS', 'Express', 'ReactJS', 'React Native'],
  };

  render() {
    console.log(this.state);

    return (
      <ul>
        <li>NodeJS</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;