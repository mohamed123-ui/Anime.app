import React, { Suspense } from 'react'
import Header from './(Commponents)/Header'
import Anime from './(Commponents)/Anime'

export default function page() {
  return (
    <div className='bg-black'>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
      <Anime />
    </Suspense>
    </div>
  )
}
