import React from 'react';
import {Card,CardMedia} from 'material-ui/Card';
import {Grid,Row,Col} from 'react-bootstrap';

const EventsCard = () => (
    <Grid>
        <Row>
            <Col md={4}>
                <Card>
                    <CardMedia>
                        <img src="./images/Chalkboard-background.jpg" />
                    </CardMedia>
                </Card>
            </Col>
        </Row>
    </Grid>
);

export default EventsCard;
