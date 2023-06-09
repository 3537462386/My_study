import { UserModel } from './user.model';
export declare const getUser: (condition: string) => (param: string) => Promise<any>;
export declare const createUser: (user: UserModel) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[]>;
export declare const getUserByName: (param: string) => Promise<any>;
