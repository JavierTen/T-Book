import Server from "./clases/server";
import userRoutes from "./routes/usuarios";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server;

//Body parser 
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//configuracion cors
server.app.use( cors({origin: true, credentials: true}) );

//rutas de la app
server.app.use('/user', userRoutes)

//conectar db
mongoose.connect('mongodb://localhost:27017/tbook',
    { useNewUrlParser: true, useCreateIndex: true }, (err)=>{
        if(err) throw err;

        console.log("Base de datos online")
        
    });

// levantar express
server.start(() => {
    console.log('Server corriendo en el puerto ', server.port)
});