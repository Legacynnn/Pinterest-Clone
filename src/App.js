import React, { useState, useEffect } from 'react'
import GlobalStyle from './style/GlobalStyle'
import Header from './components/Header/index'
import MainBoard from './components/MainBoard/index'
import unsplash from './api/unsplash'

function App() {
  
  const [pins, setNewPins] = useState([])


  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    console.log("on search submit", term)
    getImages(term).then((res) => {
      let results = res.data.results

      let newPins = [
        ...results,
        ...pins
      ]

      newPins.sort(function(a, b) {
        return 0.5 - Math.random()
      })
      setNewPins(newPins)
      
    })
  }

  const getNewPins = () => {
    let promises = []
    let pinData = []

    let pins = ['oceon', 'tokyo', 'dogs', 'cats', 'cars', 'bali', 'beach', 'Peaple', 'Film', 'Arts', 'Work', 'Business']

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res)=> {
          let results = res.data.results

          pinData = pinData.concat(results)

          pinData.sort(function (a, b) {
            return 0.5 - Math.random()
          })
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  }
  
  useEffect(() => {
    getNewPins()
    
  }, [])
  
  return(
    <div className="App">
      <GlobalStyle/>
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  )
}

export default App