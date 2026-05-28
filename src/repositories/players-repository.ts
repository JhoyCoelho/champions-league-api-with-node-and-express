import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    { 
        id: 1,
        name: "Ronaldo",
        club: "Real Madrid",
        nationality: "Portuguese",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 85,
            shooting: 92,
            passing: 88,
            dribbling: 91,
            defending: 75,
            physical: 80
        }
    },
    { 
        id: 2,
        name: "Messi",
        club: "Barcelona",
        nationality: "Argentine",
        position: "Forward",
        statistics: {
            overall: 90,
            pace: 85,
            shooting: 92,
            passing: 88,
            dribbling: 91,
            defending: 75,
            physical: 80
        }
    },
    { 
        id: 3,
        name: "Neymar",
        club: "Paris Saint-Germain",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            overall: 88,
            pace: 90,
            shooting: 90,
            passing: 85,
            dribbling: 92,
            defending: 70,
            physical: 75
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id)
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deletePlayer = async (id: number) => {
    const index = database.findIndex( (player) => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
    }
};