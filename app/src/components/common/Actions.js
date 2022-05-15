import React from 'react'

const Actions = props => {
  const legend = props.legend
  const openModal = props.openModal
  const collapse = props.collapse
  const onChangeCollapse = props.onChangeCollapse

  return <div className="actions">
    <ul>
      <li>
        {/* TODO: Visibility button */}
        <button className="btnIcon btnShow">
          <span className="icon-show"></span>
        </button>
      </li>
      <li>
        <button
          className="btnIcon btnInfo"
          title="Layer Info"
          onClick={() => openModal(legend)}
        >
          <span className="icon-info"></span>
        </button>
      </li>
      <li>
        <button
          className={ collapse !== legend.id ? 'btnIcon btnCollapse' : 'btnIcon btnCollapse open' }
          title={ collapse !== legend.id ? 'Collapse layer' : 'Expand layer' }
          onClick={ () => onChangeCollapse(legend.id) }
        >
          <span className="icon-arrow-down"></span>
        </button>
      </li>
    </ul>
  </div>
}

export default Actions