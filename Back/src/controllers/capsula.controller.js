import Capsula from "../models/capsula.model.js";

export const createCapsula = async (req, res) => {
    const { nombre, imgCentral, nombreCtf, descripcion1, descripcion2, descripcion3, tipoAlim, imgAlim1, imgAlim2, imgAlim3, amenazado, dato1, dato2, dato3, imgDato1, imgDato2, imgDato3, ecosistema } = req.body
    const newCapsula = new Capsula({
        nombre, 
        imgCentral, 
        nombreCtf, 
        descripcion1, 
        descripcion2, 
        descripcion3, 
        tipoAlim, 
        imgAlim1, 
        imgAlim2, 
        imgAlim3,
        amenazado, 
        dato1, 
        dato2, 
        dato3, 
        imgDato1, 
        imgDato2, 
        imgDato3,
        ecosistema
    });
    const savedCapsula = await newCapsula.save();
    res.json(savedCapsula)
}

export const updateCapsula = async (req, res) => {
    const capsula = await Capsula.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    if (!capsula) return res.status(404).json({
        message: 'Capsula not found'
    })
    res.json(capsula)
}

export const getCapsula = async (req, res) => {
    const capsula = await Capsula.findById(req.params.id)
    if (!capsula) return res.status(404).json({
        message: 'Capsula not found'
    })
    res.json(capsula)
}

export const deleteCapsula = async (req, res) => {
    const capsula = await Capsula.findByIdAndDelete(req.params.id)
    if (!capsula) return res.status(404).json({
        message: 'Capsula not found'
    })
    return res.sendStatus(204);
}

export const getCapsulas = async (req, res) => {
    const capsulas = await Capsula.find()
    if (!capsulas) return res.status(404).json({
        message: 'Capsulas not found'
    })
    return res.json(capsulas);
}