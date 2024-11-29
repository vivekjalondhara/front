export const logoutHelper = () => {
  const rememberMeData = localStorage.getItem("remember-me");

  localStorage.clear();

  if (rememberMeData) {
    localStorage.setItem("remember-me", rememberMeData);
  }
};
