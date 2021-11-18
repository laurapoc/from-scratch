import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import App from './App'

describe('<App />', () => {
  it('renders correctly', () => {
    const container = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )
    expect(screen.getByText('Loading data...')).toBeInTheDocument()
  })
})
