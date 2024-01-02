import { getAllUsers } from "../dal/userDal";

export const allUsers =  async () => {
    const data = await getAllUsers();
    if (data) {
        return data
    }
    throw new Error("error getting all users .service")
  };
  