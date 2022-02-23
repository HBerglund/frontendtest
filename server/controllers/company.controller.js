const firebase = require('../database');
const firestore = firebase.firestore();

const getAllCompanies = async (req, res) => {
  try {
    const result = await firestore.collection('companies').get();
    const response = [];

    result.forEach((doc) => {
      response.push({ ...doc.data(), id: doc.id });
    });

    return res.status(200).send({
      collection: response,
      message: 'Successfully fetched all companies from database',
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

const saveNewCompany = async (req, res) => {
  try {
    const data = req.body;
    const result = await firestore.collection('companies').add({ ...data });
    return res.status(201).send({
      result: result,
      message: 'Successfully saved new company to database',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllCompanies,
  saveNewCompany,
};
