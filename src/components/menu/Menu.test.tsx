import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import Menu from './Menu'

describe('<Menu />', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Menu />
      </RecoilRoot>
    )
  })

  it('renders correctly', () => {
    expect(screen.getByText('Repos since 2018-12-01')).toBeInTheDocument()
  })
})
