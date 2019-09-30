import gql from 'graphql-tag';

export const typeDefs = gql`
  type Robot {
    name: String!
    status: String!
  }
`;

export const resolvers = {};