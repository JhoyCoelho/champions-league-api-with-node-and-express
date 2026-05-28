import { PlayerModel } from "../models/player-model";
import * as playerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";


export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;
    
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};

export const postPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await playerRepository.insertPlayer(player);
        response = await httpResponse.created();
    } else {
        response = await httpResponse.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;

    const player = await playerRepository.findPlayerById(id);

    if (player) {
        await playerRepository.deletePlayer(id);
        response = await httpResponse.ok({ message: "Player deleted successfully" });
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};