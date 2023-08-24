import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, onChangeThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails

  const onClickButtonElement = () => {
    onChangeThumbnail(id)
  }

  return (
    <>
      <li className="list-style">
        <button type="button" className="button" onClick={onClickButtonElement}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
