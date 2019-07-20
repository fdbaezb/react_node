import React, {Component} from 'react';

import UserCard from '../components/user';
import DatosUsuarios from '../components/list';

import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Pagination from "material-ui-flat-pagination";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class Index extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: [], offset: 1, userResponse:[] };
      this.detalleUsuarios = this.detalleUsuarios.bind(this);
  }
  
  paginaUsuarios(page) {
      fetch("http://localhost:3001/users?page="+page)
          .then(res => res.json())
          .then(res => this.setState({ apiResponse: res }));
      this.setState({ offset: page-1 });
      this.setState({ userResponse: [] });
  }

  detalleUsuarios(id) {
    fetch("http://localhost:3001/users/"+id)
        .then(res => res.json())
        .then(res => this.setState({ userResponse: res }));
  }

  componentWillMount() {
      this.paginaUsuarios(1);
  }

  user(){
    var usuario=this.state.userResponse;
    var arr_usuario = [];
    Object.keys(usuario).forEach(function(key) {
      if (key==="data") {
        arr_usuario.push(usuario[key]);    
      }
    });
    return arr_usuario.map((item) => {
      return(
        <UserCard id_user={item.id} first_name={item.first_name} last_name={item.last_name} avatar={item.avatar} email={item.email} />
        );
    })
  }

  render(){
    var usuarios=this.state.apiResponse;
    var arr_general = [];

    Object.keys(usuarios).forEach(function(key) {
      if (key==="data") {
        usuarios[key].forEach(element => {
          arr_general.push(element);    
        });
      }
    });
    return (
        <Container maxWidth="sm">
          <Card style={{minWidth: 275}}>
            <CardContent>
              <List style={{width: '90%'}}>
                {arr_general.map(item => <DatosUsuarios key={item.id} detalleUsuarios={this.detalleUsuarios} id_user={item.id} first_name={item.first_name} last_name={item.last_name} avatar={item.avatar} email={item.email} />)}  
              </List>
              <Pagination
                limit={1}
                offset={this.state.offset}
                total={4}
                onClick={(e, offset) => this.paginaUsuarios(offset+1)}
              />
            </CardContent>
          </Card>
          {this.user()}
        </Container>
    );
  }

}



export default Index;
