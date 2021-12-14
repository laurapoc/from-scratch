import { useContext, useState } from 'react'
import { useRecoilState } from 'recoil'

import { view as viewAtom } from '../../atoms'
import { formatDate } from '../../helpers/constants'
import { galleryPageContext } from '../../shared/contexts'

const Menu = () => {
  const viewOptions = [
    '2018-12-01T09:07:21.20-07:00',
    '2021-02-01T09:07:21.20-07:00',
    '2021-05-01T09:07:21.20-07:00'
  ]
  /* eslint-disable */
  const [view, setView] = useRecoilState(viewAtom)

  let [value, setValue] = useContext(galleryPageContext)
  console.log(value)

  const onImageButtonClick = () => {
    setValue((val: number) => val + 1)
    console.log(value)
  }

  return (
    <nav className="menu" style={{ textAlign: 'center' }}>
      {viewOptions.map((date) => (
        <button
          style={{ margin: '2%' }}
          onClick={() => setView(date)}
          key={date}
        >
          Repos since {formatDate(date)}
        </button>
      ))}
      <button onClick={onImageButtonClick}>
        Show Flickr images {value} page
      </button>
    </nav>
  )
}

export default Menu
