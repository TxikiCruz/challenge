import React, { useState, useEffect } from 'react'
import Actions from './common/Actions'

const Choropleth = props => {
  const legend = props.legend
  const openModal = props.openModal
  const collapse = props.collapse
  const onChangeCollapse = props.onChangeCollapse

  return <div className="modLegend choropleth">
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
          {
            <ul className="listChoropleth">
              {
                legend.items.map((item, idx) => {
                  return <li key={`choropleth_name_${idx}`}>
                    <span className="bar" style={{ backgroundColor: item.color }}></span>
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

export default Choropleth