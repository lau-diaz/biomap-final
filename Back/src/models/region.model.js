import mongoose, { Schema } from 'mongoose';

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
    ecosistemas: [{
        type: Schema.Types.ObjectId,
        ref: "Ecosistema"
    }]
    
})

export default mongoose.model("Region", regionSchema);