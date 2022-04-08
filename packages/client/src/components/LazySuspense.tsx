import React, { FC, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Alert, Box, CircularProgress } from "@mui/material"

interface LazySuspenseProps {
  name?: string
  fallback?: React.ReactNode
}

const LazySuspense: FC<LazySuspenseProps> = ({ children, fallback, name }) => {
  return (
    <ErrorBoundary FallbackComponent={({ error }) => {
      console.log(`Unable to render: ${name || "UI"}, with error:`, error.message)
      return <Alert severity="error">Error: something went wrong!</Alert>
    }}>
      <Suspense fallback={fallback || <Box sx={{ p: "2rem", textAlign: "center" }}><CircularProgress/></Box>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default LazySuspense
