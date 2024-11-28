export type ApiResponse<T> = {
  message: string;
  data: T;
};

export type Image = {
  image: string;
};

export type User = {
  name: string;
  lastname: string;
  handle: string;
  email: string;
  description: string;
  _id: string;
  image: string;
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

export type ProfileForm = Pick<User, "handle" | "description">;

export type SocialNetwork = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
};
export type DevTreeLink = Pick<SocialNetwork, "name" | "url" | "enabled">;
