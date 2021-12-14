import { useContext, useState } from 'react'
import { useRecoilState } from 'recoil'

import { view as viewAtom } from '../../atoms'
import { formatDate } from '../../utils/constants'
import { galleryPageContext } from '../../shared/contexts'

const Menu = () => {
  const viewOptions = [
    '2018-12-01T09:07:21.20-07:00',
    '2021-02-01T09:07:21.20-07:00',
    '2021-05-01T09:07:21.20-07:00'
  ]
  /* eslint-disable */
  const [view, setView] = useRecoilState(viewAtom)

  const [page, setPage] = useContext(galleryPageContext)

  const onImageUpButtonClick = () => {
    setPage((val: number) => val + 1)
  }
  const onImageDownButtonClick = () => {
    page > 0 && setPage((val: number) => val - 1)
    // setPage((val: number) => val - 1)
  }

  const onDateButtonClick = (date: string) => {
    setPage(0)
    setView(date)
  }

  return (
    <nav className="menu" style={{ textAlign: 'center' }}>
      {viewOptions.map((date) => (
        <button
          style={{ margin: '2%' }}
          onClick={() => onDateButtonClick(date)}
          key={date}
        >
          Repos since {formatDate(date)}
        </button>
      ))}
      <div>
        <h4>Images from Flickr.com:</h4>
        {page === 0 && (
          <button onClick={onImageUpButtonClick} style={{ margin: '2%' }}>
            Show images
          </button>
        )}

        {page > 0 && (
          <div>
            <button onClick={onImageUpButtonClick} style={{ margin: '2%' }}>
              Show next page
            </button>
            <button onClick={onImageDownButtonClick} style={{ margin: '2%' }}>
              Show previous page
            </button>
            <p>
              <strong>page {page}</strong>
            </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Menu
