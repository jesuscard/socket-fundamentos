
    var socket = io();
    // escuchar mensajes
    socket.on('connect', function(){
        // console.log('Conectado al servidor')
    });
    
    socket.on('disconnect', function(){
        // console.log('Perdimos conexión con el servidos')
    });

    //emit se usan para enviar información
    socket.emit('salutations', { 
        usuario: 'Chubeto', 
        mensaje: 'Prueba' 
    }, function(resp) {
        console.log('Respuesta Servidos', resp)
    })
    
    socket.on('salutations', function(data){
        console.log('Servidor', data)
    })