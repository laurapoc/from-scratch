import { useRecoilState } from 'recoil'

import { view as viewAtom } from '../../atoms'

const Menu = () => {
  const viewOptions = [
    '2018-12-01T09:07:21.20-07:00',
    '2021-02-01T09:07:21.20-07:00',
    '2021-05-01T09:07:21.20-07:00'
  ]
  const [view, setView] = useRecoilState(viewAtom)

  return (
    <nav className="menu">
      {viewOptions.map((date) => (
        <button
          style={{ margin: '2%' }}
          onClick={() => setView(date)}
          key={date}
        >
          Repos from {date}
        </button>
      ))}
    </nav>
  )
}

export default Menu
