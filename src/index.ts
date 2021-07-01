import mongoose from "mongoose";


const commonMongoSave = async (model, callback) => {
  model
    .save()
    .then((savedModel) => {
      callback(savedModel);
    })
    .catch((err) => {
      throw new Api500Error(err.message || "Internall Server Error");
    });
};


const commonMongoFindOne = async (model, id, callback) => {
  const optionalModel = await model.findById(id);

  if (!optionalModel) throw new Api404Error(`Resources with id ${id} not found`);
  callback(optionalModel);
};


const commonMongoFindAll = async (model, callback) => {
  model
    .find()
    .then((foundModel) => {
      callback(foundModel);
    })
    .catch((err) => {
      throw new Api500Error(err.message || "Internall Server Error");
    });
};

const commonMongoDelete = async (model, id, callback) => {
  const optionalModel = await model.findByIdAndDelete(id);

  if (!optionalModel) throw new Api404Error(`Resources with id ${id} not found`);
  callback(optionalModel);
};

export default {
  commonMongoSave,
  commonMongoFindOne,
  commonMongoFindAll,
  commonMongoDelete,
};
