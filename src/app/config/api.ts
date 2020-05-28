import { environment } from '../../environments/environment'

export const baseURL = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsURL = baseURL + '/products'
export const cartURL = baseURL + '/cart'