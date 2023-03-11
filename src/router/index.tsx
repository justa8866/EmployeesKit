import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import EmployeePage from '../pages/EmployeePage'
import HomePage from '../pages/HomePage'
import RoutesList from './routes'

const router = createBrowserRouter([
  {
    path: RoutesList.Home,
    element: <HomePage />,
  },
  {
    path: RoutesList.Employee,
    element: <EmployeePage />,
  },
])

export default router
