import React, { Component } from 'react';
import '../Styles/Card.css'

interface CardProps {
  title: string;
  subtext: string;
  id: number;
  image: string;
}


class Card extends Component<CardProps, CardProps> {
  constructor(props: CardProps){
    super(props)
    this.state = props;
    this.setTitle = this.setTitle.bind(this)
  }


  setTitle(): any{
    console.log("was clicked");
    this.setState({title:"It was changed"})
  }

  render() {
    const { title, subtext: date, id, image   } = this.props;
    return (
      <div className='card' onClick={this.setTitle}>
      <div className='img-container' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='container'>
          <h4>{this.state.title}</h4>
          <p>{this.state.subtext}</p>
        </div>
      </div>
    );
  }

  
}

export default Card;