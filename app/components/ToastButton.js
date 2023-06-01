'use client'

import {toast } from 'react-hot-toast'

const ToastButton = () => {
  return (
    <button onClick={() => toast.success('yOOOOO it worked')}>toast me bro 🍞</button>
  )
}

export default ToastButton