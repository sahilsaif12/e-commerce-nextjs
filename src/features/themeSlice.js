import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: true,
  },
  reducers: {
    toggle: (state) => {
        if (state.darkMode) {
            state.darkMode=false
        } else {
            state.darkMode=true
        }
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions

export default themeSlice.reducer