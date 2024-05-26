import './index.css'

// import Home from '../Home'

import AddItem from '../AddItem'

const Header = props => {
  const {addItemFunction} = props

  const onClickButton = () => addItemFunction(true)

  return (
    <>
      <nav className="header-container">
        <div className="logo-and-title-container">
          <img
            alt="NxtWave"
            className="logo"
            src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
          />
        </div>
        <ul className="nav-items-list">
          <li className="link-item">
            <button type="button" className="button" onClick={onClickButton}>
              Add Item
            </button>
          </li>

          <img
            alt="profile"
            className="profile-picture"
            src="https://s3-alpha-sig.figma.com/img/cf4d/3d9d/645049d8ead249354c5100844f0ee7bb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INwB~ujhSZAfwEqKNaDHlWSGLcS6h9079YGW6WVXzQl9kikr1i2uqOP70LCx53QHcDfb-RSo81BxRgdH6ZNTOqIdY1G54B-A4Ss5A9yRUjnie-EMgqDvOX~bjkkP2rylZNz8Uevhm14EQiDt9g~8gjJgVKITNFJTHIvT~teVb-QA9oUjwPFcvJiVXe9iaH0qbyMSYXBr2EtlaG1zP2C1VYX~Oa1jC04LiEg8Qx6EU6xFcVr1z8HzitSM14U0~1UbrtTlU6Ia8qdKfNtbYx4hUWudyj7hXpLyxh~cjxQETnWAVNNVjfnrED0lcq4bQ9BR5nGOMlnrRS~athgSiGrvAA__"
          />
        </ul>
      </nav>

      <hr className="horizental-ruler" />
    </>
  )
}

export default Header
