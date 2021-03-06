import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import SuggestionCard from "../SuggestionCard/SuggestionCard"
import { Tabs, Button, Row } from 'antd';
import "./mapcard.css"
import API from '../../utils/API'

const { TabPane } = Tabs;

export default function MapCard(props) {
  const [suggestions, setSuggestions] = useState([])

  const { id } = useParams()


  useEffect(() => {
    API.getSuggestionsForMap(id).then(res => {
      const suggestionArr = res.data.map(suggestion => {
        return suggestion
      })
      setSuggestions(suggestionArr)
      console.log(suggestionArr);
    })
      .catch(err => console.log('err', err))
  }, [])

  const tabsArr = [];

  for (let i = 0; i < props.categories.length; i++) {
    tabsArr.push(
      <TabPane tab={props.categories[i]} key={i} suggestions={props.suggestions}>
        <Row>
          {suggestions.map(sug => props.categories[i] === sug.category ? <SuggestionCard key={sug._id} suggestions={sug} /> : null)}
        </Row>
      </TabPane>);
  }

  const addSugBtn = `/addsuggestion/${id}`
  const itinBtn = `/itinerary/${id}`

  return (
    <>
      <div className="mapcard-wrapper">

        <div className="card-container">
          <Tabs type="card">
            {tabsArr.map(item => { return item })}
          </Tabs>
          <Row className="add-sug-row" justify="center">
            <Button className="add-sug-btn" href={addSugBtn} data-sug-map-id={id}> Add Suggestion</Button>
          </Row>
          <Row className="add-sug-row" justify="center">
            <Button className="itin-btn" href={itinBtn} data-map-id={id}>Itinerary</Button>
            {/* <Link>
              to={{
                pathname: "/addsuggestion",
                state: { 
                  // pass down information about the map
                }
                }}
                <Button className="add-sug-btn" href="/addsuggestion">Add Suggestion</Button>
            </Link> */}
          </Row>
        </div>
      </div>
    </>
  )
}