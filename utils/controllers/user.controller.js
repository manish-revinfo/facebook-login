const User = require("../Model/user.model");
const { encrypt } = require("../encryption/encryption");

class UserCtrl {
  //user created

  static async createUser(req, res) {
    const user = req.body;
    if (!user.email)
      return res
        .status(500)
        .send({ message: "could not created the email", error: null });
    if (user.password) {
      user.password = encrypt(user.password);
    }

    User.create(user)
      .then((result) => {
        res.status(201).send({ message: "user  created", data: result });
      })
      .catch((err) => {
        res.status(500).send({ message: "could not created", error: err });
      });
  }

  //user updated

  static updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    User.findOneAndUpdate({ _id: id }, user, { new: true })
      .then((result) => {
        res.status(200).send({ message: "user updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not updated", error: err });
      });
  }

  //user deleted

  static deleteUser(req, res) {
    const { id } = req.params;

    User.findOneAndDelete({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "user deleted", data: result });
      })
      .catch((err) => {
        res.status(200).send({ message: "user not deleted", error: err });
      });
  }

  // user fetchOneUser

  static fetchOneUser(req, res) {
    const { id } = req.params;
    User.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "user list", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user list", error: err });
      });
  }

  // user fetchAllUser

  static fetchAllUser(req, res) {
    User.find()
      .then((result) => {
        res.status(200).send({ message: "user list", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user list", error: err });
      });
  }
}

module.exports = UserCtrl;
