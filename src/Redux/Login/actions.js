    import axios from "axios";
    import { LOGIN_NOT, LOGIN_SUCCESS } from "./actionTypes";

    export const loginUser = async (credentials, dispatch) => {

        const API_URL = `${import.meta.env.VITE_API_URL}/user/login`;

        try {
            const res = await axios.post(API_URL, credentials);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

            const isAuthUser =  {
                isAuth: true,
                token: res.data.token,
                data: res.data.user.username,
            };

            localStorage.setItem("user", JSON.stringify(isAuthUser));

            return { success: true, message: "Login successful" };
            }catch (error) {
                dispatch ({ type: LOGIN_NOT });

                return { success: false, message: error.message || "Login failed"};
            }
        };