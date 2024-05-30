//Toast components
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message, timeout = 5000) =>
  toast.success(message, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export const notifyError = (message, timeout = 5000) =>
  toast.error(message, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
