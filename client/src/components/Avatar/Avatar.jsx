import React from 'react'

const Avatar = ({children,backgroundColor,px,py,borderRadius,color,fontSize}) => {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || "black",
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor:"cursor" || null
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar