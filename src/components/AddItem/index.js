import {BiLeftArrowAlt} from 'react-icons/bi'

import './index.css'

const AddItem = () => (
  <div className="add-item-container">
    <div className="add-items">
      <div className="arrow-container">
        <BiLeftArrowAlt className="arrow" />
        <p className="user">User</p>
      </div>

      <div className="details-container">
        <h1 className="detail-heading">Item Details</h1>
        <div className="input-container">
          <label className="label" htmlFor="item-title">
            ITEM TITLE
          </label>
          <input type="text" id="item-title" className="input-element" />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="link-title">
            LINK
          </label>
          <input type="text" id="link-title" className="input-element" />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="icon-title">
            ICON URL
          </label>
          <input type="text" id="icon-title" className="input-element" />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="select-element">
            TAG NAME
          </label>
          <select className="select-container" name="users" id="select-element">
            <option value="user">User</option>
            <option value="request">Request</option>
            <option value="response">Response</option>
          </select>
        </div>

        <div className="input-container">
          <label className="label" htmlFor="category-title">
            CATEGORY
          </label>
          <input type="text" id="category-title" className="input-element" />
        </div>
        <div className="description-container">
          <label className="label" htmlFor="description-title">
            DESCRIPTION
          </label>
          <input
            type="text"
            id="description-title"
            className="input-description"
          />
        </div>
        <div>
          <div className="button-container">
            <button type="button" className="button">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img
        className="image"
        src="https://s3-alpha-sig.figma.com/img/4451/ed3a/155011c955cbce9bdc9f5a65f80e1282?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JANMBaQOYR4pbhpFFZG0v3Lo-dT9JJdtND8TetmAamY-3JuuxSDIHMutJp~FlsTb1EwD2Knu5s8v~neh-Dha6azCDkjtfBKZzvTJiFyoel2j8dCnOZNM8ZZwYotvKItEOQ1K0BTXLDhbhW45PXeosKPev4ruZeqVfrdlPC1ZaJWyNQK6f~hlTBfPgjAqqpO-mDqQ-w0JtEPPWjx75X6EowqeVx5yPM-hrnvP57Tw~VZjSGFAetLT~6aXuBlv-s76tQX51elL2K-ssp95ouO6H-I2u7MDEhpCYoaVLWxxdpdk4HuBSU0bd5cbbUu8zmHAGKDFsFjZ4QDBOkva1aszuQ__"
      />
    </div>
  </div>
)

export default AddItem
