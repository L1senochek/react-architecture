import { createBrowserRouter } from 'react-router-dom';

import { TaskPage } from 'pages/tasks/ui/TaskPage';
import { RegisterPage } from 'pages/register/ui/RegisterPage';
import { RefExamplesPage } from 'pages/refExamples/ui/RefExamplesPage';
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
      {
        path: '/ref-examples',
        element: <RefExamplesPage />,
      },
    ],
  },
]);
