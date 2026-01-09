import express from 'express'
import userRoutes from './Api/Resources/User/User.Router'

const app = express()
app.use(express.json())

app.use('/User', userRoutes)

export default app
