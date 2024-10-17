"use client"
import React from 'react'
import Content from "./_components/content"

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <div className="w-full max-w-[90vw]"> */}
      <div className="w-full">
        <Content />
      </div>
    </div>
  )
}

export default page;