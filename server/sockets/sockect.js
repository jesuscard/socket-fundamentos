const {io} = require('../server')
io.on('connection',client =>{

    console.log('usuario conectado')

    client.emit('salutations',{
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta aplicación'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado')
    })

    //Escuchar el cliente
    client.on('salutations', (data, callback) => {
        console.log(data)

        client.broadcast.emit('salutations', data)
        // if (mensaje.usuario){
        //     callback({
        //         resp: 'Todo Salió bien'
        //     })

        // } else {
        //    callback({
        //         resp: 'Todo Salió malllalalala'
        //     })
        // }

    });
})