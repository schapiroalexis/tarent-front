import { gql } from 'apollo-boost';

const GET_COURSES = gql`
  query Courses {
    courses {
      id
      title
      description
      schedules {
        startDate
        endDate
        availability
      }
      teacher {
        fullName
      }
    }
  }
`;

export { GET_COURSES };
