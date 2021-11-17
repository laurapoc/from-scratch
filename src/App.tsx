import { QueryClient, QueryClientProvider } from 'react-query'
import Repos from './components/Repos'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Repos />
    </QueryClientProvider>
  )
}

export default App
