import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on user {
        id
        email
        name
      }
    }
  }
`;

export function useUser() {
  const data = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
