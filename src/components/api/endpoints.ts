export default {
  serverBaseurl: "http://localhost:3000",
  api: {
    user: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getone: "/users/",
      getAll: "/users",
    },
    auth: {
      userLogin: "/auth/login",
    },
  },
};
