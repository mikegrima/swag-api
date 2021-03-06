import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import green from 'material-ui/colors/green';


import RoleTable from './RoleTable';
import S3MetadataTable from './S3MetadataTable';
import MetadataTable from './MetadataTable';


const styles = theme => ({
    card: {
        margin: 10,
    },
    avatar: {
        backgroundColor: green[500],
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});


class ServiceCard extends Component {
    render() {
        const classes = this.props.classes;
        let metadata = this.props.service.metadata ? this.props.service.metadata : {};

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Status" className={classes.avatar}>
                                {this.props.service.name.charAt(0)}
                            </Avatar>
                        }
                        title={this.props.service.name}
                        subheader={this.props.service.description}
                    />
                    <CardContent>
                        <RoleTable data={this.props.service.roles} />
                        {this.props.service.name === 's3' ? (
                            <S3MetadataTable data={metadata}/>
                        ) : (
                            <MetadataTable data={metadata}/>
                        )}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

ServiceCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceCard);