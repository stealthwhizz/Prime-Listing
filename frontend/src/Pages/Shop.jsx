import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import About from '../Components/Aboutpage/about'


const Shop = () => {

  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/newcollections') 
      .then((res) => res.json()) 
      .then((data) => setNewCollection(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  return (
    <div>
      <Hero/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
      <About/>
    </div>
  )
}

export default Shop;