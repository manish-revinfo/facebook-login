const UserModel = require("../Model/user.model");
const { compareHash } = require("../encryption/encryption");

class AuthCtrl {
  static userLogin(req, res) {
    const { email, password } = req.body;

    //first check wheather the user with given email id is available

    UserModel.findOne({ email: email })
      .then((result) => {
        if (!result) throw new Error("inavalid email");
        // the user is available then check password, if user is not vailable then call catch
        else if (compareHash(password, result?.password)) {
          res.status(200).send({ message: " login successful ", data: result });
        } else {
          res.status(404).send({ message: "Inavalid password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ message: "Inavalid email or User is diasble" });
      });
  }
}

module.exports = AuthCtrl;
