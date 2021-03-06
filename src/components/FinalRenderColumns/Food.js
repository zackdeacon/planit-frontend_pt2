import React from 'react'
import { Card, Col } from 'antd'

export default function Food(props) {
  
    return (
        <Col text="center" sm={{span:6}}>
        <h1 className="columnTitle">Food</h1>
        <div className="RenderCardDiv">
        <Card className="setCardHeight" type="inner" title="uyeicbyebyiebv"
              style={{ margin: "10px" }} headStyle={{ backgroundColor: "#987b55" }} >
              <a href={props.link} style={{ color: "#945440" }}>Link to website</a>
              <h3>Price: ${props.cost}</h3>
              <p>Description: {props.description}</p>
            </Card>
        </div>
        </Col>
          )
}
