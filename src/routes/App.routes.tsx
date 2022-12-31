import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from 'src/pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
