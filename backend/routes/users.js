var express = require('express');
var router = express.Router();
var userService = require('../servicios/usuarios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var pagina= '?page='+req.query.page;
  userService.loadUsers(pagina, function(users, err) {
    if (err) {
        console.error('Error al recuperar los usuarios');
        res.render('error', {
            message: 'Se ha producido un error. Contacte con el administrador.',
            error: null
        });
    } else {
        res.send(users);
    }
  });
});

router.get('/:id([0-9]+)/',function(req, res, next){
  var id= '/'+req.params['id'];
  userService.loadUsers(id, function(users, err) {
    if (err) {
        console.error('Error al recuperar los usuarios');
        res.render('error', {
            message: 'Se ha producido un error. Contacte con el administrador.',
            error: null
        });
    } else {
        res.send(users);
    }
  });
});

module.exports = router;
