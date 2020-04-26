import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es necesario"]
    },
    apellido:{
        type: String,
        required: [true, "El apellido es necesario"]
    },
    avatar:{
        type: String,
        default: 'av-1.png'
    },
    idEstudiante:{
        type: String,
        unique: true,
        required: [true, 'El id es necesario'] 
    },
    facultad:{
        type: String,
        required: [true, 'La facultad es necesaria']
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: [true, 'la contraseña en necesaria'],     
    }


});

usuarioSchema.method('compararPass', function(password: string=''): boolean{
    if (bcrypt.compareSync(password, this.password)){
        return true;
    }else {
        return false;
    }
})

interface IUsuario extends Document {
    nombre: string;
    apellido: string;
    avatar: string;
    idEstudiante: string;
    facultad: string;
    email: string;
    password: string;

    compararPass(password: string): boolean;

}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);