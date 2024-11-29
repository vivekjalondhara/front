export const PUBLIC_NAVIGATION = Object.freeze({
  login: "/auth/login",
  register: "/auth/register",
  forgotPassword: "/auth/forgot-password",
  notAuthorized: "/not-authorized",
});

export const PRIVATE_NAVIGATION = Object.freeze({
  dashboard: { view: "/" },
  task: {
    detail: {
      view: (id = ":id") => `/task/${id}`,
    },
    edit: {
      view: (id = ":id") => `/task/edit/${id}`,
    },
    new: { view: "/new" },
  },
});
