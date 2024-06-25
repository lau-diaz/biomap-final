import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    fotoRegion: {
        type: String,
        required: true,
    },
    subZona: {
        type: String,
        required: true,
    },
    imgMapa: {
        type: String,
        required: true,
    },
    imgRegion: {
        type: String,
        required: true,
    },
    ecosistema1: {
        type: String,
        required: true
    },
    ecosistema2: {
        type: String,
        required: true
    },
    ecosistema3: {
        type: String,
        required: false
    },
})

export default mongoose.model("Region", regionSchema);