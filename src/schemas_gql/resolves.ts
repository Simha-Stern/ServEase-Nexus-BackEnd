import { allUsers } from "../services/userService";

export const resolvers = {
    Query: {
        getAllUsers: () => allUsers(),

    },
}