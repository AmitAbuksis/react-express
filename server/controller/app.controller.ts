import {Request, Response} from "express"
import AppService from "../service/app.service";
class AppController {

    async getDataByQuery(req: Request, res: Response) {
        try {
            const goDockDockData = await AppService.getDataByQuery();
            return res.status(200).json({data: goDockDockData});
        } catch(err) {
            return res.status(500).json({message: err})
        }
    };

    async getQueryHistory(req: Request, res: Response) {
        try{
            const goDockDockData = await AppService.getAndStoreDateByQuery();
            return res.status(200).json({data: goDockDockData});
        } catch(err) {
            return res.status(500).json({message: err})
        }
    };
}

export default new AppController();