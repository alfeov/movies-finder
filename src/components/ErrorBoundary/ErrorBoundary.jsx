import { isRouteErrorResponse, useRouteError } from 'react-router'
import { EmptyMessage } from '@/components/EmptyMessage/EmptyMessage'

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <EmptyMessage message={error.message} />
  }

  return (
    <EmptyMessage
      message={error instanceof Error ? error.message : 'Unknown error'}
    />
  )
}
