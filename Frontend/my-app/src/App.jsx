import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Books from "./pages/Books";
import UserDashboard from "./pages/UserDashboard";
import Analysis from "./pages/Analysis";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CourseDetails from "./pages/CourseDetails";
import BookDetails from "./pages/BookDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "courses",
        children: [
          {
            index: true,
            element: <Courses />
          },
          {
            path: ":courseId",
            element: <CourseDetails />
          }
        ]
      },
      {
        path: "books",
        children: [
          {
            index: true,
            element: <Books />
          },
          {
            path: ":bookId",
            element: <BookDetails />
          }
        ]
      },
      {
        path: "dashboard",
        element: <ProtectedRoute><UserDashboard /></ProtectedRoute>
      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: "checkout",
        element: <ProtectedRoute><Checkout /></ProtectedRoute>
      },
      {
        path: "analysis",
        children: [
          {
            index: true,
            element: <Analysis />
          },
          {
            path: "premium",
            element: <ProtectedRoute><Analysis premium={true} /></ProtectedRoute>
          }
        ]
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
