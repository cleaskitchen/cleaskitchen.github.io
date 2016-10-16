import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import GridListSingle from './components/GridListSingle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import EventsCard from './components/EventsCard';


injectTapEventPlugin();

const App = () => (

<MuiThemeProvider>
<div>
<NavBar />
<br />
<br />
<GridListSingle />
<br />
<br />
<EventsCard />
</div>
</MuiThemeProvider>
);

ReactDOM.render(
<App />,
    document.getElementById('app')
);