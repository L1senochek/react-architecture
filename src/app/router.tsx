import { createBrowserRouter } from 'react-router-dom';

import { TaskPage } from 'pages/tasks/ui/TaskPage';
import { RegisterPage } from 'pages/register/ui/RegisterPage';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <TaskPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);
