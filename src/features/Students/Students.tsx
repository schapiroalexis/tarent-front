import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import * as studentQueries from 'features/Students/queries';
import { BackDropSpinner } from 'components/Spinner';
import DrawerContainer from 'components/DrawerContainer/DrawerContainer';
import { useQuery } from '@apollo/react-hooks';
import { setSchedules } from 'features/Schedules/schedulesSlice';

const Students: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(studentQueries.GET_STUDENTS);

  return (
    <DrawerContainer>
      {loading ? <BackDropSpinner /> : <pre>{JSON.stringify(data.students, null, 2)}</pre>}
    </DrawerContainer>
  );
};

export default Students;
