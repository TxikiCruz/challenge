import React from 'react'
import Actions from './common/Actions'

const Basic = props => {
  const legend = props.legend
  const openModal = props.openModal
  const collapse = props.collapse
  const onChangeCollapse = props.onChangeCollapse

  return <div className="modLegend basic">
    <div className="top">
      {/* TODO: Drag components */}
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
        {
          <ul className="listItems">
            {
              legend.items.map((item, idx) => {
                return <li key={`basic_${idx}`}>
                  <span className="point" style={{ backgroundColor: item.color }}></span>
                  <span className="name">{item.name}</span>
                </li>
              })
            }
          </ul>
        }
      </div>
    : null
    }
  </div>
}

export default Basic