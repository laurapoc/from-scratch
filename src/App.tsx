import { QueryClient, QueryClientProvider } from 'react-query'
import Menu from './components/menu/Menu'
import Repositories from './components/repositories/Repositories'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <Menu />
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>
    </>
  )
}

export default App
