import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto'
    }
};

const tilesData = [
    {
        img: './images/2016-10-15 (1).jpg',
        title: 'Two day marinated Pot Roast'

    },
    {
        img: './images/2016-10-15 (2).jpg',
        title: 'Garlic Braised Tiger Prawns'

    },
    {
        img: './images/2016-10-15 (3).jpg',
        title: 'Teriyaki Glazed Salmon'

    },
    {
        img: './images/2016-10-15.jpg',
        title: 'Half-Pound Burger'

    },
    {
        img: './images/Screen Shot 2016-10-15 at 3.10.39 PM.png',
        title: 'Three-Bean Chili'

    },
    {
        img: './images/Screen Shot 2016-10-15 at 3.13.18 PM.png',
        title: 'Blackened Salmon'

    },
    {
        img: './images/Screen Shot 2016-10-15 at 3.13.55 PM.png',
        title: 'Butter Chicken with Naan'

    },
    {
        img: './images/Screen Shot 2016-10-15 at 3.14.26 PM.png',
        title: 'Prime Rib with fire-roasted veggies'

    }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListSingle = () => (
    <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListSingle;