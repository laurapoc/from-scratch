import { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { galleryPageContext } from '../../shared/contexts'

const Gallery = () => {
  const [gallery, setGallery] = useState([])

  const [page, setPage] = useContext(galleryPageContext)

  const fetchImages = async (key: string, page: string) => {
    return await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a74fcefb4992870b07e1d3fd84ba3e7&text=flower&per_page=5&page=${page}&format=json&nojsoncallback=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setGallery(data.photos.photo)
      })
  }
  const { status } = useQuery(['page', page], () => fetchImages('page', page))

  return (
    <div>
      <h1>Image gallery</h1>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data...</div>}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {gallery &&
          gallery.map((image: any, index: number) => {
            const imagesource = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
            return (
              <div key={`${index}${image.id}`}>
                <img
                  src={imagesource}
                  alt={image.title}
                  style={{ width: '60%', margin: '2%' }}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Gallery
