import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-600 h-16 flex items-center justify-center">
      <h1 className="text-center text-gray-100 font-bold ">
        {new Date().getFullYear()}
      </h1>
    </footer>
  )
}

export default Footer
