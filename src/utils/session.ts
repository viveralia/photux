interface User {
  email: string;
}

export const saveSessionToCache = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const recoverSessionFromCache = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const deleteSessionFromCache = () => {
  localStorage.removeItem("user");
};
