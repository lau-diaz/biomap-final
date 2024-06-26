import mongoose from "mongoose";

const capsulaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    imgCentral: {
        type: String,
        required: true
    },
    nombreCtf: {
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
        required: true
    },
    tipoAlim: {
        type: String,
        required: true
    },
    imgAlim1: {
        type: String,
        required: true
    },
    imgAlim2: {
        type: String,
        required: true
    },
    imgAlim3: {
        type: String,
        required: false
    },
    amenazado: {
        type: Boolean,
        required: true
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
    }
});

export default mongoose.model("Capsula", capsulaSchema)