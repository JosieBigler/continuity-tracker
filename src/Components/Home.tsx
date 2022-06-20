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
        id: 1,
        image: "/images/adventure-placeholder.png"
    },
    {
        title: "Adventure 2",
        subtext: "2-1-2021",
        id: 2,
        image: "/images/adventure-placeholder.png"
    },
]

const locations = [
  {
    title: "Absalom",
    subtext: "Greatest City On Golarian",
    id: 1,
    image: "/images/adventure-placeholder.png"
},
{
    title: "New Stetven",
    subtext: "Capital of Brevoy",
    id: 2,
    image: "/images/adventure-placeholder.png"
},
]

const npcs = [
  {
    title: "One Arm Jimmy",
    subtext: "Sidekick of Bastard Jack",
    id: 1,
    image: "/images/npc.png"
},
{
    title: "Krum",
    subtext: "Somewhere between God, Dwarf, and Construct",
    id: 2,
    image: "/images/npc.png"
},
]

class Home extends Component<HomeProps> {
  render() {
    const { title, subtitle   } = this.props;
    return (
      <> 
      <section  style={{ width: "100%", textAlign: "left" }}>Home Page Testing</section>
      <section  style={{  textAlign: "left", padding: "0 3%" }}>
        <h1 style={{ fontSize: "2.75rem", fontWeight: "900", margin: "20px 0 0px 0" }}>Last Time On . . .</h1>
        <Card key={(adventures[adventures.length - 1].id)} {...adventures[adventures.length - 1]}/>
      </section>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, padding: "0 3%" }}>
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
        </section> 
      </>
    );
  }
}

export default Home;