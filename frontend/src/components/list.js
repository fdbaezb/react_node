import React, {Component} from 'react';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';


export default class DatosUsuarios extends Component {
    render() {
      return ( 
        <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={this.props.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link 
                style={{cursor: 'pointer'}}
                color="inherit" 
                
                onClick={()=>this.props.detalleUsuarios(this.props.id_user)}
              >
                {this.props.first_name + " " + this.props.last_name}
              </Link>
            }
            secondary={
              <React.Fragment>
                {this.props.email}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
        </div>
      );
    }
  }
  