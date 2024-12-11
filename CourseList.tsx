// src/components/CourseList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../redux/slices/coursesSlice';
import type { AppDispatch, RootState } from '../redux/store';
import { Course } from '../types/CourseTypes'; // Importamos el tipo Course

const CourseList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const searchTerm = useSelector((state: RootState) => state.ui.searchTerm);
  const status = useSelector((state: RootState) => state.courses.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  const filteredCourses = courses.filter((course: Course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {filteredCourses.map((course: Course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log("El componente App está renderizando");
export default CourseList;
