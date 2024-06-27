import Ecosistema from '../models/ecosistema.model.js'

export const createEcosistema = async (req, res) => {
    const { nombre, fotoEcosistema, descripcion1, descripcion2, descripcion3, dato1, dato2, dato3, imgDato1, imgDato2, imgDato3, region, capsulas } = req.body
    const newEcosistema = new Ecosistema({
        nombre, 
        fotoEcosistema, 
        descripcion1, 
        descripcion2, 
        descripcion3, 
        dato1, 
        dato2, 
        dato3, 
        imgDato1, 
        imgDato2, 
        imgDato3, 
        region,
        capsulas
    });
    const savedEcosistema = await newEcosistema.save();
    res.json(savedEcosistema)
}

export const updateEcosistema = async (req, res) => {
    const ecosistema = await Ecosistema.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!ecosistema) return res.status(404).json({
        message: 'Ecosistema not found'
    })
    res.json(ecosistema)
}

// export const getEcosistema = async (req, res) => {
//     const ecosistema = await Ecosistema.findById(req.params.id)
//     if (!ecosistema) return res.status(404).json({
//         message: 'Ecosistema not found'
//     })
//     res.json(ecosistema)
// }

export const deleteEcosistema = async (req, res) => {
    const ecosistema = await Ecosistema.findByIdAndDelete(req.params.id)
    if (!ecosistema) return res.status(404).json({
        message: 'Ecosistema not found'
    })
    return res.sendStatus(204);
}

export const getEcosistemas = async (req, res) => {
    const ecosistemas = await Ecosistema.find()
    if (!ecosistemas) return res.status(404).json({
        message: 'Ecosistemas not found'
    })
    return res.json(ecosistemas)
}

export const getEcosistema = async (req, res) => {
    try{
        const ecosistema = await Ecosistema.findById(req.params.id).populate('capsulas');
        if (!ecosistema) {
            return res.status(404).json({
                message: 'Ecosistema no encontrado'
            })
        }
        res.json(ecosistema);
    } catch (error) {
        console.error('Error al obtener el ecosistema:', ecosistema);
        res.status(500).json({ message: 'Error del servidor al obtener el ecosistema' });
    }
}