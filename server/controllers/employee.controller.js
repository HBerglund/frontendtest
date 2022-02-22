const firebase = require('../database');
const firestore = firebase.firestore();

const getAllEmployees = async (req, res) => {
  try {
    const result = await firestore.collection('employees').get();
    const response = [];

    result.forEach((doc) => {
      response.push({ ...doc.data(), id: doc.id });
    });

    return res.send({ collection: response });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllEmployees,
};
