import React, { useState, useEffect } from 'react'
import API from "../../utils/API";
import NavBar from '../../components/NavBar/navbar';
import UserCard from '../../components/UserCard/UserCard'
import "./user.css"
import MapCarousel from '../../components/MapCarousel/MapCarousel';

export default function User() {
    const [maps, setMaps] = useState([])

    useEffect(() => {
        API.getAllMaps().then(data => {
            console.log('data', data)
            const prunedMaps = data.data.map(item => {
              return{
                  name: item.name,
                  _id: item._id
              }
            } )
            setMaps(prunedMaps)
        }
        )
            .catch(err => console.log('err', err))
    }, [])

    return (
        <>
        <div className="user-background">
            <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px" />
            <UserCard maps={maps}/>
        </div>
        </>
    )
}
