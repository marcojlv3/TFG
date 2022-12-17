import { Difficulty, Muscles } from '../enums/enums';

export class BaseExercise {
    name: String;
    description: String;
    level: Difficulty;
    muscles: Muscles[];
    image: String;
    videoURL: String;

    constructor(name: string, description: string, level: Difficulty, muscles: Muscles[], image: String, videoURL:String ) {
        this.name = name;
        this.description = description;
        this.level = level;
        this.muscles = muscles;
        this.image = image;
    }
};
