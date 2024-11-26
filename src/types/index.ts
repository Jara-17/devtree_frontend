export type ResponseType = {
  message: string;
  data: User;
};

export type User = {
  name: string;
  lastname: string;
  handle: string;
  email: string;
  _id: string;
};

export type RegisterForm = Pick<
  User,
  "name" | "lastname" | "handle" | "email"
> & {
  password: string;
  password_confirmation: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};
