import { API, endpoints } from "../src/components/api";
class AuthServices {
  static userLogin(user) {
    return API.post(endpoints.api.auth.userLogin, user).then((response) => {
      return response;
    });
  }
}

export default AuthServices;
