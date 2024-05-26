import React, {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import TagsItem from '../TagsItem'
import Header from '../Header'
import AddItem from '../AddItem'
import ButtonItem from '../ButtonItem'

import './index.css'

const tagName = [
  {tabId: 'RESOURCES', displayText: 'Resources'},
  {tabId: 'REQUEST', displayText: 'Request'},
  {tabId: 'USER', displayText: 'User'},
]

class Home extends Component {
  state = {
    tagsData: [],
    searchInput: '',
    activeTabId: 'RESOURCES',
    active: false,
  }

  componentDidMount() {
    this.getRepositories()
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  addItemFunction = () => {
    this.setState(prevState => ({active: !prevState.active}))
  }

  getRepositories = async () => {
    const apiUrl = `https://media-content.ccbp.in/website/react-assignment/resources.json`
    const response = await fetch(apiUrl)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(eachTag => ({
        title: eachTag.title,
        iconUrl: eachTag.icon_url,
        link: eachTag.link,
        description: eachTag.description,
        category: eachTag.category,
        tag: eachTag.tag,
        id: eachTag.id,
      }))
      this.setState({tagsData: updatedData})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredApps = () => {
    const {searchInput, tagsData, activeTabId} = this.state
    let searchResults = tagsData
    if (searchInput) {
      searchResults = searchResults.filter(eachUser =>
        eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    }
    const filteredApps = searchResults.filter(app =>
      app.tag.toUpperCase().includes(activeTabId.toUpperCase()),
    )
    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput, tagsData} = this.state
    const searchResults = tagsData.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId, active} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getFilteredApps(searchResults)

    return (
      <>
        <Header active={active} addItemFunction={this.addItemFunction} />
        <div className="home-container">
          {active ? (
            <AddItem />
          ) : (
            <>
              <ul className="tag-name-container">
                {tagName.map(eachTab => (
                  <ButtonItem
                    key={eachTab.tabId}
                    tabDetails={eachTab}
                    setActiveTabId={this.setActiveTabId}
                    isActive={activeTabId === eachTab.tabId}
                  />
                ))}
              </ul>

              <div className="items-container">
                <div className="input-search-container">
                  <div className="search-icon-container">
                    <FaSearch className="search-icon" />
                  </div>
                  <input
                    type="search"
                    className="input-search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                  />
                </div>

                <ul className="repositories-list">
                  {filteredApps.map(eachRepository => (
                    <TagsItem
                      key={eachRepository.id}
                      tagsDetails={eachRepository}
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}

export default Home
