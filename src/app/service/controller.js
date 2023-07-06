const model =  require('../../../models/chemModel');

const create = async (req, res) => { 
    const data = req.body;
    const chem = await model.create(data);
    res.status(200).json(chem.toJSON())
}

const getAll = async (req, res) => {
    const allChemicals = await model.findAndCountAll({
        limit: 9,
        offset: (req.params.page - 1) * 9
    });
    res.status(200).json({data: allChemicals})
}

const getChemical = async (req, res) => {
    const chemical = await model.findByPk(req.params.id);
    // console.log("Got chemical: ", chemical);
    res.status(200).json({data: chemical})
}
const deleteChemical = async (req, res) => {
    const chemical = await model.destroy({
        where: {
            id: req.params.id
        }
    });
    // console.log("deleted chemical: ", chemical);
    res.status(200).json({data: chemical})
}
const updateChemical = async (req, res) => {
    const updatedData = req.body;
    // console.log('bod: ', updatedData, req.params.id);
    const chemical = await model.update(updatedData, {
        where: {
            id: req.params.id
        }
    })
    // console.log("updated chemical: ", chemical);
    res.status(200).json({data: chemical})
}
module.exports = {
    create,
    getAll,
    getChemical,
    deleteChemical,
    updateChemical
}