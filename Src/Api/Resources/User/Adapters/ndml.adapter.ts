import { createHttpClient } from '../Integration/httpClient'

const client = createHttpClient(process.env.NDML_BASE_URL!)

export class NdmlAdapter {
  async verify(payload: any) {
    // simulate downstream call
    return {
      vendor: 'NDML',
      status: 'VERIFIED',
      payload
    }
  }
}
