import React, { useEffect, useRef } from 'react'

function ProgressBar({progressBar}) {

  useEffect(() => { 
    console.log(progressBar)
    progressBarRef.current.style.right = `${(100 - progressBar)}%`;
  }, [progressBar])

  const progressBarRef = useRef()

  return (
    <div className="progress-bar" ref={progressBarRef}></div>
  )
}

export default ProgressBar