import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import * as courseQueries from 'features/Courses/queries';
import { BackDropSpinner } from 'components/Spinner';
import DrawerContainer from 'components/DrawerContainer/DrawerContainer';
import { useQuery } from '@apollo/react-hooks';
import { setCourses } from 'features/Courses/coursesSlice';

const Courses: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(courseQueries.GET_COURSES);
  useEffect(() => {
    if (!loading) {
      dispatch(setCourses(data.courses));
    }
  }, [loading]);

  return (
    <DrawerContainer>
      {loading ? <BackDropSpinner /> : <pre>{JSON.stringify(data.courses, null, 2)}</pre>}
    </DrawerContainer>
  );
};

export default Courses;
