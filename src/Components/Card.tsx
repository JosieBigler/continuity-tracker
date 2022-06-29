import React, { Component } from 'react';
import '../Styles/Card.css'

interface CardProps {
  title: string;
  subtext: string;
  id: number;
  image: string;
}


class Card extends Component<CardProps> {
  render() {
    const { title, subtext: date, id, image   } = this.props;
    return (
      <div className='card'>
      <div className='img-container' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='container'>
          <h4>{title}</h4>
          <p>{date}</p>
        </div>
      </div>
    );
  }
}

export default Card;