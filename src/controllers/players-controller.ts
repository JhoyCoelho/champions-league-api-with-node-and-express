import { Request, Response } from 'express';
import * as service from '../services/players-services';
import { ok } from '../utils/http-helper';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const httpResponse = await service.getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};