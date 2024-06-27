import mongoose, { Schema } from "mongoose";

const ecosistemaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fotoEcosistema: {
        type: String,
        required: true
    },
    descripcion1: {
        type: String,
        required: true
    },
    descripcion2: {
        type: String,
        required: true
    },
    descripcion3: {
        type: String,
        required: false
    },
    dato1: {
        type: String,
        required: true
    },
    dato2: {
        type: String,
        required: true
    },
    dato3: {
        type: String,
        required: true
    },
    imgDato1: {
        type: String,
        required: true
    },
    imgDato2: {
        type: String,
        required: true
    },
    imgDato3: {
        type: String,
        required: true
    },
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region"
    },
    capsulas: [{
        type: Schema.Types.ObjectId,
        ref: "Capsula"
    }]
})

export default mongoose.model("Ecosistema", ecosistemaSchema);