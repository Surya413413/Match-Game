import './index.css'

const ProjectItem = props => {
  const {projectDetails, onClickImage} = props
  const {category, imageUrl, thumbnailUrl, id} = projectDetails

  const onMatchImg = () => {
    onClickImage(thumbnailUrl)
  }
  return (
    <li className="project-item-container">
      <button type="button" onClick={onMatchImg}>
        <img
          className="project-item-image"
          src={thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ProjectItem
