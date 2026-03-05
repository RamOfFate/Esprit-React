import axios from "axios";
import type { EventProps } from "../EventProps";

const url = "http://localhost:3000/events";

export const getallEvents = async (id:string) => {
    id = id || "";
    return await axios.get(`${url}/${id}`);

};

export const addEvent = async (event: EventProps) => {
    return await axios.post(url, event);
};

export const editEvent = async (id:string, event:EventProps) => {
    return await axios.put(`${url}/${id}`, event);
};

export const deleteEvent = async (name: string) => {
    return await axios.delete(`${url}/${name}`);
};