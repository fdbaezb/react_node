import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class UserCard extends Component {
    
    render() {
      return ( 
        <Card style={{display: 'flex', marginTop:'50px', height:'200px'}}>
          <div style={{display: 'flex',flexDirection: 'column', width: '70%'}}>
            <CardContent style={{flex: '1 0 auto'}}>
              <Typography component="h5" variant="h5">
                {this.props.first_name + " " + this.props.last_name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Id: {this.props.id_user}
              </Typography>
              <Typography variant="body1" >
                Nombre: {this.props.first_name}<br />
                Apellido: {this.props.last_name}<br />
                Email: {this.props.email}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            style={{width: '30%'}}
            image={this.props.avatar}
            title={this.props.first_name + " " + this.props.last_name}
          />
        </Card>
      );
    }
  }
  