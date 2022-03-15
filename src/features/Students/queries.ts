import { gql } from 'apollo-boost';

const GET_STUDENTS = gql`
  query Students {
    students {
      fullName
      enrolled
      enrollments {
        id
        schedule {
          id
          startDate
          course {
            title
          }
        }
      }
    }
  }
`;

export { GET_STUDENTS };
