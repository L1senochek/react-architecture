import { Route, Routes } from 'react-router-dom';

import { TaskPage } from 'pages/tasks/ui/TaskPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
    </Routes>
  );
}
