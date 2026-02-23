import React from 'react'

const Container = ({ClassName, children}) => {
  return (
    <div className={`max-w-[1320px] mx-auto ${ClassName}`}>
        {children}
    </div>
  )
}

export default Container