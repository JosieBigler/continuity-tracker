### continuity-tracker
An application to track continuity in a Pen and Paper game, such as DnD, Pathfinder, or Shadowrun. 

# Planned Feature Rough Outline
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
