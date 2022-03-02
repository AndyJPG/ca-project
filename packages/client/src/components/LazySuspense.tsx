import {FC, Suspense} from "react"
import {ErrorBoundary} from "react-error-boundary"

const LazySuspense: FC = (props) => {
  return (
    <ErrorBoundary FallbackComponent={({error}) => <div>Error: {error.message}</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        {props.children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default LazySuspense
