'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/utils/store'

const providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}

export default providers
