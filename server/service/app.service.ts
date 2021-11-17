import axios from "axios";
import { getGoDockDockUrl } from "../utils/goDockDock.utils";
class AppService {

    async getInitialData() {
        try {
            // read from saved file and return
        } catch(err) {
            throw err;
        }
    };

    async getDataByQuery(query: string) {
        try {
            const url = getGoDockDockUrl(query);
            const goDockDockData = await axios.get(url);
            // Need to understand how data should return
        } catch(err) {
            throw err;
        }
    }

    async getAndStoreDateByQuery(query: string) {
        try {
            const url = getGoDockDockUrl(query);
            const goDockDockData = await axios.get(url);
            // Need to understand how data should return
            // save data to file
        } catch(err) {
            throw err;
        }
    }
}

export default new AppService();