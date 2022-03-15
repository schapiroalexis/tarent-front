import { gql } from 'apollo-boost';

const GET_SCHEDULES = gql`
  query Schedules {
    schedules {
      id
      startDate
      endDate
      availability
      course {
        title
        teacher {
          fullName
        }
      }
    }
  }
`;

export { GET_SCHEDULES };
