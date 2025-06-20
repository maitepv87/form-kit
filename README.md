# **Form Kit**

## **Description**

FormKit is a **modern, accessible, and modular multi-step form** built with React and TailwindCSS. It showcases real-world frontend patterns like custom hooks for managing state and validation, step-based navigation, and visual error handling.

Its architecture is clean, scalable, and reusable—demonstrating thoughtful UI structure, user-centric experience, and best practices in React development.

### **Key Features**

- **Custom hook (`useFormKit`)** to manage steps, values, and submission
- **Step-by-step navigation** with isolated and declarative step rendering
- **Per-step validation logic** with accessible error messages
- **Success screen** with reset functionality
- **TailwindCSS-styled components** for modern, minimal UI
- **Modular structure** with separate components for each form step

This project is part of my portfolio to demonstrate my ability to build structured, accessible, and user-friendly React applications.

## **Technologies Used**

- **React** – Declarative UI with component-based structure
- **TailwindCSS** – Utility-first styling for flexibility and responsiveness
- **React Router DOM** – Client-side routing for scalable navigation
- **Vite** – Lightning-fast dev environment
- **Custom Hooks** – Reusable logic abstraction (`useFormKit`)
- **Prop Composition** – Clean data flow between steps
- **Centralized validation** – via `utils/validateStep.js`
- **Accessibility standards** – Semantic markup and keyboard-aware controls

## **Getting Started**

### **Installation & Setup**

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/maitepv87/form-kit.git
   cd form-kit

   ```

2. Install dependencie:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Then open http://localhost:3000 in your browser.
