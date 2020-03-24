import { UserActionTypes } from './user.types'
import CartActionTypes from '../Cart/cart.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

