import axios from "axios";
import { ResultPayload } from "../types";

class GoDockDockService {

    async getInitialData() {
        try{
            const response = await axios.get("/");
            return response.data.data; 
        } catch(err) {
            console.error("getInitialData", err);
            throw err;
        }
    };

    async saveItem(item: ResultPayload) {
        try {
            const response = await axios.post("/dock-dock");
            return response.data.data;
        } catch(err) {
            console.error("saveItem",err)
        }
    };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GoDockDockService();