import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from 'src/pages'

export function AppRoutes() {
  return (
    <MemoryRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </MemoryRouter>
  )
}
