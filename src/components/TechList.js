import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {

  state = {
    newTech: '',
    techs: [],
  };

  // executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // executado sempre que houver alterações nas props ou state
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // executado quando o componente deixar de existir
  componentDidUnmount() {
    // removeEventListener()
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(elem => tech !== elem) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button>Enviar</button>
      </form>
    );
  }
}

export default TechList;