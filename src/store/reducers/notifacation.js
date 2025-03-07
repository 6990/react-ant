import { createSlice } from '@reduxjs/toolkit'

const notifacationSlice = createSlice({
    name: 'notifacation',
    initialState: {
        notifacation: {
            show: false,
            message: 'Error',
            type: 'error',
            description: 'Error',
            showIcon: true,
            closable: true
        }
    },
    reducers: {
        setNotifacation: (state, action) => {
            state.notifacation = {
               ...state.notifacation,
               ...action.payload
            };
        }
    }
})

export const { setNotifacation } = notifacationSlice.actions
export default notifacationSlice.reducer
