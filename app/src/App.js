import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Basic from './components/Basic'
import Gradient from './components/Gradient'
import Choropleth from './components/Choropleth'
import Modal from './components/common/Modal'
import logo from './assets/images/logo.svg'

function App() {
  const [legends, setLegends] = useState([])
  
  useEffect(() => {
    axios({
      url: './data.json',
    })
      .then((response) => {
        setLegends(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Modal
  const [modal, setModal] = useState(false)
  const [description, setDescription] = useState('')
  const openModal = (legend) => {
    setDescription(legend.description)
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  // Collapse
  const [collapse, setCollapse] = useState(null)
  const onChangeCollapse = (id) => {
    setCollapse(collapse === id ? null : id)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <img src={logo} alt="Vizzuality" />
        </div>
      </header>

      <main>
        <div className="container">
          {
            legends && legends.filter((legend) => legend.type === 'basic').map(legendBasic => (
              <Basic
                key='basic'
                legend={legendBasic}
                openModal={openModal}
                collapse={collapse}
                onChangeCollapse={onChangeCollapse}
              />
            ))
          }

          {
            legends && legends.filter((legend) => legend.type === 'gradient').map(legendBasic => (
              <Gradient
                key='gradient'
                legend={legendBasic}
                openModal={openModal}
                collapse={collapse}
                onChangeCollapse={onChangeCollapse}
              />
            ))
          }

          {
            legends && legends.filter((legend) => legend.type === 'choropleth').map(legendBasic => (
              <Choropleth
                key='choropleth'
                legend={legendBasic}
                openModal={openModal}
                collapse={collapse}
                onChangeCollapse={onChangeCollapse}
              />
            ))
          }
        </div>

        {modal ?
          <Modal closeModal={closeModal} description={description} />
          : null
        }
      </main>
    </>
  )
}

export default App
