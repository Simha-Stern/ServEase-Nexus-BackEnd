export const typeDefs = `#graphql
  # Comments in GraphQL Strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every User in our data source.
  type Query {
    getAllUsers: [User]

}
  type User {
    user_id: String
    first_name: String
    last_name: String
    email: String
    password: String
    is_admin: Boolean
    token: String
  }
`;
