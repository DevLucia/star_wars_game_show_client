import React, { Component } from 'react';

import contestantService from '../services/contestants.service';

import '../styles/contestants.css';

class Contestants extends Component {
  state = {
    contestants: []
  };

  componentDidMount() {
    return contestantService.contestantList()
      .then(
        (contestants) => {
          console.log('contestants', contestants);
          this.setState({
              contestants: contestants
          })
      }),
      (error) => console.error(error)
  }

  render() {
    return ( 
    <div> Hola </div>

    );
  }
}

export default Contestants;