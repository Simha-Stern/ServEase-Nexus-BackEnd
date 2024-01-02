import { sendQueryToDatabase } from "../conections/conectToPG";

export const getAllUsers = async () => {
    const query = `SELECT * FROM users`;
    try{
        const result = await sendQueryToDatabase(query);
        return result.rows;
    }catch (err){
        console.error(err);
        throw err;
    }
}