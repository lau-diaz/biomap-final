import Region from '../models/region.model.js'

export const createRegion = async (req, res) => {
    const { nombre, fotoRegion, subZona, imgMapa, imgRegion, ecosistemas } = req.body
    const newRegion = new Region({
        nombre,
        fotoRegion,
        subZona,
        imgMapa,
        imgRegion,
        ecosistemas
    });
    const savedRegion = await newRegion.save();
    res.json(savedRegion)
}

export const updateRegion = async (req, res) => {
    const region = await Region.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!region) return res.status(404).json({
        message: 'Region not found'
    })
    res.json(region)
}

// export const getRegion = async (req, res) => {
//     const region = await Region.findById(req.params.id)
//     if (!region) return res.status(404).json({
//         message: 'Region not found'
//     })
//     res.json(region)
// }

export const deleteRegion = async (req, res) => {
    const region = await Region.findByIdAndDelete(req.params.id)
    if (!region) return res.status(404).json({
        message: 'Region not found'
    })
    return res.sendStatus(204);
}

export const getRegiones = async (req, res) => {
    const regiones = await Region.find()
    if (!regiones) return res.status(404).json({
        message: 'Regiones not found'
    })
    return res.json(regiones);
}

export const getRegion = async (req, res) => {
    try {
        const region = await Region.findById(req.params.id).populate('ecosistemas');
        if (!region) {
            return res.status(404).json({ message: 'Región no encontrada' });
        }
        res.json(region);
    } catch (error) {
        console.error('Error al obtener la región:', error);
        res.status(500).json({ message: 'Error del servidor al obtener la región' });
    }
};