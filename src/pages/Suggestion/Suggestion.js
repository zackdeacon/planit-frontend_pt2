import React, { useEffect, useState } from "react";
import {useParams, useHistory, useLocation} from "react-router-dom"
import API from "../../utils/API";
import NavBar from "../../components/NavBar/navbar";
import "./suggestion.css"
import SuggestionCreateForm from "../../components/SuggestionForm/suggestionForm"

function Suggestions() {
    const history = useHistory()

    let data = useLocation()
    console.log("this is data", data)

    const {id} = useParams()
    const subSugBtn = `/dashboard/${id}`

    //set book component initial state
    const [suggestions, setSuggestions] = useState([])

    //initialize form object state
    const [formObject, setFormObject]=useState({
        mapId:id,
        title: "",
        category: "",
        description: "",
        cost: "",
        link: ""
    })
    //load all maps, store them with setMaps
    useEffect(()=>{
        loadSuggestions()
        console.log(formObject)
    }, [])

    //load all maps and sets them to maps
    function loadSuggestions(){
        API.getAllSuggestions()
        .then(res=>
            setSuggestions(res.data)
        )
        .catch(err=>console.log(err))
    }

    //hanldeInputChange function to update objectForm State
    function handleInputChange(event){
        const {name,value}=event.target;
        setFormObject({...formObject,[name]:value})
        console.log("input change function", event.target)
    }

    //handleFormSubmit function to add formObject to Database
    function handleFormSubmit(event){
        // event.preventDefault();
        API.postNewSuggestion(formObject).then(data=>{
            console.log("here is your new suggestion", data)
            loadSuggestions();
            setFormObject({...formObject,
                title: "",
                category: "",
                description: "",
                cost: "",
                link: "",
            })
            
        }).then ((data) => {
            history.push(subSugBtn)
        })
    }
  
    
    return(
        <div className="suggestion-background">
        <NavBar logo="./assets/logos/logotxt.png" width="80px" left="-40px" top="10px"/>
        {/* form with controlled inputs */}
        <SuggestionCreateForm
            formData={formObject}
            handleChange={handleInputChange}
            handleSave={handleFormSubmit}
        />
        </div>
    )
    

}

export default Suggestions;