import axios from 'axios'
import { API_URL } from '../constants'

export const registerRequest = user => axios.post(`${API_URL}/register`, user)