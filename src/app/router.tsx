import { createBrowserRouter } from 'react-router-dom';

import { TaskPage } from 'pages/tasks/ui/TaskPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
]);
