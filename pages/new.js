import React from 'react'

const New = () => {
  return (
    <div><video  className='absolute -z-0 top-0' width="full" height="240" loop autoPlay muted>
    <source src="/video.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
  </video></div>
  )
}

export default New