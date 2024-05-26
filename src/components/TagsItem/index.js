import './index.css'

const TagsItem = props => {
  const {tagsDetails} = props
  const {title, iconUrl, link, description, category, id, tag} = tagsDetails

  return (
    <div className="tags-item-container">
      <div className="image-title-container">
        <div className="icon-container">
          <img src={iconUrl} className="icon-image" alt="logo" />
        </div>
        <div className="title-container">
          <h3 className="title-heading">{title}</h3>
          <p>{category}</p>
        </div>
      </div>
      <div className="anchor-description">
        <a href={link} className="anchor-tag">
          {link}
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default TagsItem
