# 🚀 **The React TypeScript Wizard!**

Welcome to **The React TypeScript Wizard!**, a responsive web application designed to showcase a catalogue of online courses. This project demonstrates advanced React and TypeScript skills, with features like course browsing, detailed lesson viewing, and a powerful state management system using Redux Toolkit.

---

## 🌟 **Features**

- 📚 Browse and explore a catalogue of online courses.
- 📝 View detailed course descriptions, modules, and lessons.
- 🎥 Render different content types seamlessly (text, video, audio, podcasts).
- 🔍 **Search functionality** to find courses by title or description.
- 🔄 State management using **Redux Toolkit** with asynchronous data fetching.
- 📱 Fully responsive design for an excellent user experience on all devices.

---

## 🛠️ **Technologies Used**

- **Frontend**: React + TypeScript
- **State Management**: Redux Toolkit
- **Data Fetching**: Async Thunks
- **Styling**: TailwindCSS
- **Hosting**: GitHub Pages
- **Testing**: Basic Unit Tests with Jest

---

## 💡 **Project Overview**

The application provides users with an intuitive interface to:

1. Browse courses and their details.
2. View course modules and lessons, with dynamic navigation.
3. Access multi-type content: text, video, audio, and podcasts.
4. Search courses by keywords for quick access.

---


## 🛠️ **Setup and Installation**

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eguilser/react-typescript-wizard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-typescript-wizard
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📋 **Functionality Breakdown**

### Course Browsing
- Display a list of all courses.
- Search courses by title or description.

### Course Details
- View course description and modules.
- Navigate through lessons in each module.

### Lesson Viewer
- Render lesson content with support for text, video, audio, and podcast formats.

---

## 🏗️ **Redux Toolkit Implementation**

1. **Store Setup**: Configured with `configureStore`.
2. **Slices**:
   - Courses: Handles course data.
   - Current Course: Tracks selected course, module, and lesson.
   - UI State: Manages search and navigation states.
3. **Async Thunks**: Fetch courses data from a JSON file.
4. **Selectors**: Memoized selectors for efficient state management.

---

## 🔍 **TypeScript Features**

- Strict type checking with custom interfaces for:
  - Courses, Modules, Lessons, and Content.
- Full typing for React functional components and Redux state management.
- Ensures maintainable and error-free code.

---

## 🧪 **Testing**

- Basic unit tests implemented using Jest.
- Coverage for:
  - Reducers and actions.
  - Component rendering and interactivity.

---

## 📩 **Contact**

Sergio (eguilser)  
[GitHub Profile](https://github.com/eguilser)  
[LinkedIn Profile](https://www.linkedin.com/in/sergio-egu%C3%ADluz-43482a265/) 

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🌟 **Acknowledgements**

- Inspired by the React and TypeScript developer community.
- Thanks to Redux Toolkit and TailwindCSS for simplifying development.


---
