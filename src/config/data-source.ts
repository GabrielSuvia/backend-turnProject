import {DataSource} from "typeorm";
import {Usser} from "../entity/userEntity";
import {Credential} from "../entity/credentialEntity";
import {Turn} from "../entity/turnEntity";
import dotenv from "dotenv"

dotenv.config();
export const AppDataSource = new DataSource({
    type: "postgres",
    host:process.env.HOST_DBR,
    port:Number(process.env.PORT_DBR),
    username:process.env.USERNAME_DBR,
    password:process.env.PASSWORD_DBR,
    database:process.env.DATABASER,
   // dropSchema:true,
    synchronize: true,
    logging: false,
    entities: [Usser, Credential, Turn],
    subscribers: [],
    migrations: ["dist/migration/*.js"],

});

export const dataBaseUser = AppDataSource.getRepository(Usser);
export const dataBaseCredential = AppDataSource.getRepository(Credential);
export const dataBaseTurn = AppDataSource.getRepository(Turn);