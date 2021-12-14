import { useContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Gallery from './components/gallery/Gallery'

import Menu from './components/menu/Menu'
import Repositories from './components/repositories/Repositories'
import { galleryPageContext } from './shared/contexts'

const queryClient = new QueryClient()

// `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a74fcefb4992870b07e1d3fd84ba3e7&text=flower&per_page=5&page=1&format=json&nojsoncallback=true`

const App = () => {
  const contextCValue = useContext(galleryPageContext)
  const [page, setPage] = useState(contextCValue)

  return (
    <>
      <galleryPageContext.Provider value={[page, setPage]}>
        <Menu />
        <QueryClientProvider client={queryClient}>
          {page !== 0 ? <Gallery /> : <Repositories />}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </galleryPageContext.Provider>
    </>
  )
}

export default App
