import React from "react"
import locationicon from "../images/location-icon.png"

export default function Card(props) {

    return (
        <div className="card">
            <img src = {`../images/${props.item.imageUrl}`} alt = "grid" className="card--image"/>
            <div className="card--details">
                <img src = {locationicon} alt = "locationicon" className="card--location--icon"/>
                &nbsp;<span className="card--location">{props.item.location.toUpperCase()}</span>
                &nbsp;&nbsp;&nbsp;<span className="card--googlemaps"><a href={props.item.googleMapsUrl}> View on Google Maps</a> </span>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </div>
    )
}