import { RouterProvider, createBrowserRouter } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Layout } from '@/components/Layout/Layout'
import { ErrorBoundaryOutlet } from '@/components/ErrorBoundaryOutlet/ErrorBoundaryOutlet'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { MoviesPage } from '@/pages/MoviesPage'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        // Rout that wrap all routes in ErrorBoundary handler
        Component: ErrorBoundaryOutlet,
        ErrorBoundary: ErrorBoundary,
        children: [
          {
            index: true,
            Component: MoviesPage,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
