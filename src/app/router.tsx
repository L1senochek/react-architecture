import { Navigate, Route, Routes } from 'react-router-dom';

import { TaskPage } from 'pages/tasks/ui/TaskPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tasks" replace />} />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="*" element={<Navigate to="/tasks" replace />} />
    </Routes>
  );
}
