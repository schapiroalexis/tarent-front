import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import * as schedulesQueries from 'features/Schedules/queries';
import { BackDropSpinner } from 'components/Spinner';
import DrawerContainer from 'components/DrawerContainer/DrawerContainer';
import { useQuery } from '@apollo/react-hooks';
import { setSchedules } from 'features/Schedules/schedulesSlice';

const Schedules: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(schedulesQueries.GET_SCHEDULES);
  useEffect(() => {
    if (!loading) {
      dispatch(setSchedules(data.schedules));
    }
  }, [loading]);

  return (
    <DrawerContainer>
      {loading ? <BackDropSpinner /> : <pre>{JSON.stringify(data.schedules, null, 2)}</pre>}
    </DrawerContainer>
  );
};

export default Schedules;
