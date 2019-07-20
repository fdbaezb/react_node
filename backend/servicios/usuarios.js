var https = require('https');

exports.loadUsers = function(consulta, next) {
    const options = {
        hostname: 'reqres.in',
        port: 443,
        path: '/api/users'+consulta,
        method: 'GET'
    }

    function obtenerUsuarios(options, cb) {

        const req = https.request(options, (res) => {
            //console.log(res.statusCode)
            var body = '';
            res.on('data', (d) => {
              body+=d;
            })
            res.on('end', ()=>{
                var val = JSON.parse(body);
                cb(val, null)
            })
        })
        req.on('error', cb)
        req.end()
    }
    
    // Se invoca el servicio RESTful con las opciones configuradas previamente.
    obtenerUsuarios(options, function (users, err) {
        if (err) {
            next(null, err);
        } else {
            next(users, null);
        }
    });
};