# continuity-tracker
An application to track continuity in a Pen and Paper game, such as DnD, Pathfinder, or Shadowrun. 

#Planned Feature Rough Outline
1. Users can create Campaigns. They are the GM of that Campaign. 
2. Users can invite other uses to their Campaign, they give the role of Player in that Campaign. 
3. Players can create Player Characters. They can add PLOT relevant information. (Maybe we can add an optional Review from GM). 
4. GM's can create sessions, NPCs, Locations (I'm waffling on Locations), and Events. 

**Campaigns**
Campaigns are the top level data element. This is the collection of Players in a narrative Story. 

**Player Characters (PC)**
Campaigns have many PCs.  For now, PCs only have 1 Campaign. A future feature would be to tie many Campaigns together. 

**Non Player Characters (NPC)** 
These are plot important characters controlled by the GM. They have the same relationship to a campaign as a PC. 

**Locations**
These are plot important locations within the campaign. 

**Events**
These are plot specific points in the campaign. This could be the Death of a PC / NPC. Aquiring a specific piece of loot. Learning a key piece of information. 

**Session**
This is the real-life session where gameplay happens. This date should correlate to a real-life date. Players who played, etc. . . We could very well drop this data item. With the introduction of Sessions, we now have to maintain 2 timelines.  The real world Timeline and the Campaign Timeline.
