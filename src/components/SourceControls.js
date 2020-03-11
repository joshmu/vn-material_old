import React from 'react'

const SourceControls = ({ urlSource, setUrlSource }) => {
  return (
    <div className="sourceControls">
      <button
        className={urlSource ? 'active' : 'inactive'}
        onClick={() => setUrlSource(true)}
      >
        URL
      </button>

      <button
        className={urlSource ? 'inactive' : 'active'}
        onClick={() => setUrlSource(false)}
      >
        File
      </button>
    </div>
  )
}

export default SourceControls
