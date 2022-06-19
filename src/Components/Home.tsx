import React, { Component } from 'react';
import Card from './Card';

interface HomeProps {
  title: string;
  subtitle?: string;
}

const adventures = [
    {
        title: "Adventure 1",
        subtext: "1-1-2020",
        id: 1
    },
    {
        title: "Adventure 2",
        subtext: "2-1-2021",
        id: 2
    },
]

const locations = [
  {
    title: "Absalom",
    subtext: "Greatest City On Golarian",
    id: 1
},
{
    title: "New Stetven",
    subtext: "Capital of Brevoy",
    id: 2
},
]

const npcs = [
  {
    title: "One Arm Jimmy",
    subtext: "Sidekick of Bastard Jack",
    id: 1
},
{
    title: "Krum",
    subtext: "Somewhere between God, Dwarf, and Construct",
    id: 2
},
]

class Home extends Component<HomeProps> {
  render() {
    const { title, subtitle   } = this.props;
    return (
      <>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div>
              <span>Adventures</span><br/>
              {adventures.map(el => <Card key={(el.id)} {...el}/>)}
            </div>
            <div>
              <span>Locations</span><br/>
              {locations.map(el => <Card key={(el.id)} {...el}/>)}
            </div>
            <div>
              <span>NPCs</span><br/>
              {npcs.map(el => <Card key={(el.id)} {...el}/>)}
            </div>
        </div>
      </>
    );
  }
}

export default Home;