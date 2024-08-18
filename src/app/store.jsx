import cartSlice from '@/features/cartSlice'
import themeSlice from '@/features/themeSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    cart:cartSlice,
    theme:themeSlice
  },
})