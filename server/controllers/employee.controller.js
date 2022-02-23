const firebase = require('../database');
const firestore = firebase.firestore();

const getAllEmployees = async (req, res) => {
  try {
    const result = await firestore.collection('employees').get();
    const response = [];

    result.forEach((doc) => {
      response.push({ ...doc.data(), id: doc.id });
    });

    return res.status(200).send({
      collection: response,
      message: 'Successfully fetched all employees from database',
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

const saveNewEmployee = async (req, res) => {
  try {
    const data = req.body;
    const result = await firestore.collection('employees').add({ ...data });
    return res.status(201).send({
      result: result,
      message: 'Successfully saved new person to database',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await firestore.collection('employees').doc(id).update(body);
    return res
      .status(200)
      .send({ result, message: 'Successfully updated user' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllEmployees,
  saveNewEmployee,
  updateEmployee,
};
