import { isAxiosError } from "axios";
import api from "../config/axios";
import { ResponseType } from "../types";

export async function getUser() {
  try {
    const { data } = await api<ResponseType>("/user");
    console.log(data);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
