import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title 
            image
            link
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String! $email: String!, $password: String!)
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }`