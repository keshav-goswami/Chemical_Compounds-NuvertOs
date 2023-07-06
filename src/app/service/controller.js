const model = require("../../../models/dataModel");

const getAllCompounds = async (req, res) => {
    const allChemicals = await model.findAndCountAll({
        limit: 9,
        offset: (req.params.page - 1) * 9,
    });
    res.status(200).json({ data: allChemicals });
};

const getCompound = async (req, res) => {
    const chemical = await model.findByPk(req.params.id);
    res.status(200).json({ data: chemical });
};

const createCompound = async (req, res) => {
    const data = req.body;
    const chem = await model.create(data);
    res.status(200).json(chem.toJSON());
};


const removeCompound = async (req, res) => {
    const chemical = await model.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ data: chemical });
};

const updateCompound = async (req, res) => {
    const updatedData = req.body;
    const chemical = await model.update(updatedData, {
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ data: chemical });
};

module.exports = {
    getAllCompounds,
    getCompound,
    createCompound,
    removeCompound,
    updateCompound,
};
