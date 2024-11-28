import { isAxiosError } from "axios";
import api from "../config/axios";
import { ApiResponse, Image, User } from "../types";

export async function getUser() {
  try {
    const { data } = await api<ApiResponse<User>>("/user");

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateProfile(formData: User) {
  try {
    const { data } = await api.patch<ApiResponse<User>>("/user", formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || error.response.data.errors);
    }
  }
}

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const { data }: ApiResponse<Image> = await api.post(
      "/user/image",
      formData
    );
    return data.image;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
