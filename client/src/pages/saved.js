import React, {useState, useEffect} from 'react';

// Components
import Card from "../components/Card"

//API
import API from '../utils/API';

const Saved = () => {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(()=>{
        API.findAllWhereSaved().then(responseSavedArticles => {
            setSavedArticles(responseSavedArticles.data);
        });

    }, [API]);
    return (
        <div>
          
            <p>Saved page</p>
        </div>
    )
}

export default Saved;