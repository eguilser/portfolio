// src/components/LessonDetail.tsx

import React from 'react';
import { Content } from '../types/CourseTypes';

interface LessonDetailProps {
  content: Content[];
}

const LessonDetail: React.FC<LessonDetailProps> = ({ content }) => {
  const renderContent = (content: Content) => {
    switch (content.type) {
      case 'text':
        return <p>{content.data}</p>;
      case 'video':
        return <iframe src={content.data} title="Video" />;
      case 'audio':
        return <audio controls src={content.data} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
};

export default LessonDetail;  // Asegúrate de tener esta línea
