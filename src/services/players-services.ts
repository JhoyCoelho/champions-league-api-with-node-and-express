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