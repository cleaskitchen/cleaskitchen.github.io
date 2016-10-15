import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar';
import GridListSingle from './components/GridListSingle';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const App = () => (
<MuiThemeProvider>
<div>
<NavBar />
<br />
<br />
<GridListSingle />
</div>
</MuiThemeProvider>
);

ReactDOM.render(
<App />,
    document.getElementById('app')
);