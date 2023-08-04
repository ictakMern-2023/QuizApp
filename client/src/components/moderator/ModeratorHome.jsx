import React from 'react'
import ModeratorHeader from '../Header/ModeratorHeader'
import ModeratorMain from './ModeratorMain'

const ModeratorHome = () => {
  return (
   <>
   <div>
   <ModeratorHeader/>
    <ModeratorMain/>
   </div>
     <div style={{paddingTop:'100px'}}>
      <h2>Moderator home</h2>
    </div>
   </>
  )
}

export default ModeratorHome
