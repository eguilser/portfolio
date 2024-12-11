// src/App.tsx

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import CourseList from './components/CourseList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la raíz "/" */}
        <Route path="/" element={<CourseList />} />

        {/* Ruta para la lista de cursos */}
        <Route path="/courses" element={<CourseList />} />

        {/* Ruta para los detalles de un curso */}
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
};
// En App.tsx o cualquier componente
console.log("El componente App está renderizando");
  
export default App;
