import {Request, Response} from "express"
import { DockParam } from "../types";
import AppService from "../service/app.service";
class AppController {

    async getInitialData(req: Request, res: Response) {
        try {
            const goDockDockInitialData = AppService.getInitialData();
            return res.status(200).json({data: goDockDockInitialData});
        } catch(err) {
            return res.status(500).json({message: err})
        }
    };

    async getDataByQuery(req: Request, res: Response) {
        try {
            const {query} = req.query as unknown as DockParam;
            const goDockDockData = await AppService.getDataByQuery(query);
            return res.status(200).json({data: goDockDockData});
        } catch(err) {
            return res.status(500).json({message: err})
        }
    };

    async getQueryHistory(req: Request, res: Response) {
        try{
            const {query} = req.body;
            const goDockDockData = await AppService.getAndStoreDateByQuery(query);
            return res.status(200).json({data: goDockDockData});
        } catch(err) {
            return res.status(500).json({message: err})
        }
    };
}

export default new AppController();