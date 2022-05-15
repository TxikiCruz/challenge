import React, { useState, useEffect } from 'react'
import Actions from './common/Actions'

const Gradient = props => {
  const legend = props.legend
  const openModal = props.openModal
  const collapse = props.collapse
  const onChangeCollapse = props.onChangeCollapse

  const [colors, setColors] = useState([])
  const getGradientColors = () => {
    let temp = []
    let num = 1
    const total = 100/legend.items.length

    legend.items.forEach((item) => {
      temp.push(item.color + ' ' + total*num + '%')
      num++
    })
    setColors(temp)
  }

  useEffect(() => {
    getGradientColors()
  }, [])

  return <div className="modLegend gradient">
    <div className="top">
      <button className="btnIcon btnDrag">
        <span className="icon-drag-dots"></span>
      </button>

      <h2 className="title">{legend.name}</h2>

      <Actions
        legend={legend}
        collapse={collapse}
        onChangeCollapse={onChangeCollapse}
        openModal={openModal}
      />
    </div>

    { collapse !== legend.id ?
      <div className="content">
        <div className="modBar">
          <span className="bar" style={{ background: `linear-gradient(to right, ${colors})` }}></span>
          {
            <ul className="listGradientNames">
              {
                legend.items.map((item, idx) => {
                  return <li key={`gradient_name_${idx}`}>
                    <span className="name">{item.name}</span>
                  </li>
                })
              }
            </ul>
          }
        </div>
      </div>
      : null
    }
  </div>
}

export default Gradient