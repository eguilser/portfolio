import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Course } from '../types/CourseTypes';
import LessonDetail from './LessonDetail'; // Importamos el componente LessonDetail

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch('/courses.json');
        const data: Course[] = await response.json();

        if (id) {
          const selectedCourse = data.find(c => c.id === parseInt(id));
          setCourse(selectedCourse || null);
        }
      } catch (error) {
        console.error('Error fetching the course:', error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return <p>Loading course...</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Modules</h3>
      <ul>
        {course.modules.map((module, index) => (
          <li key={index}>
            <h4>{module.title}</h4>
            <ul>
              {module.lessons.map((lesson, idx) => (
                <li key={idx}>
                  {/* Hacer clic en una lección para mostrar sus detalles */}
                  <button onClick={() => setSelectedLesson(lesson.title)}>
                    {lesson.title}
                  </button>
                  {selectedLesson === lesson.title && (
                    <LessonDetail content={lesson.content} />
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log("El componente App está renderizando");
export default CourseDetail;
