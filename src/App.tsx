import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Menu from './components/menu/Menu'
import Repositories from './components/repositories/Repositories'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <Menu />
      <QueryClientProvider client={queryClient}>
        <Repositories />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
