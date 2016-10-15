import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavBar = () => (
    <AppBar
        title="Clea's Kitchen"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style = {{textAlign:"center" , backgroundColor:"#673AB7", fontFamily: "'Lobster Two', cursive"}}
    />
);

export default NavBar;