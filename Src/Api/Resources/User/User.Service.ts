import { NdmlAdapter } from './Adapters/ndml.adapter'
import { circuitBreaker } from './Integration/circuitBreaker'

export class UserService {
  private ndml = new NdmlAdapter()

  async verify(payload: any) {
    if (payload.source === 'NDML') {
      return circuitBreaker(() => this.ndml.verify(payload))
    }

    throw new Error('Unknown source')
  }
}
