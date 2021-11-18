import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

import Repositories from './Repositories'

const queryClient = new QueryClient()

const fakeRepositories = [
  {
    id: 1,
    name: 'pizza_app'
  },
  {
    id: 2,
    name: 'rocket_app'
  }
]

describe('<Repositories />', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Repositories />
        </RecoilRoot>
      </QueryClientProvider>
    )
  })

  it('calls the fetch method as expected', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeRepositories)
      })
    ) as jest.Mock

    expect(await screen.findByText('pizza_app')).toBeInTheDocument()
    expect(await screen.findByText('rocket_app')).toBeInTheDocument()
  })
})
