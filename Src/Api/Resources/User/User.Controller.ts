import { Request, Response } from 'express'
import { UserService } from './User.Service'

const service = new UserService()

export async function verifyUser(req: Request, res: Response) {
  try {
    const result = await service.verify(req.body)
    res.json(result)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}
