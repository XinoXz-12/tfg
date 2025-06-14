import { io } from "socket.io-client";

// Socket instance
export const socket = io(import.meta.env.VITE_BASE_URL_SOCKET, {
    withCredentials: true,
    autoConnect: false,
    transports: ["websocket"],
});
