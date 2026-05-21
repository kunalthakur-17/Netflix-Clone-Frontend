import { APICore } from "../../helpers/api/apiCore";
import { LOGIN, LOGOUT, REGISTER } from "../../constants/endpoint";

const api = new APICore();

export const login = (data) => api.create(LOGIN, data);
export const logout = () => api.create(LOGOUT, {});
export const signup = (data) => api.create(REGISTER, data);
