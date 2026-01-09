let failures = 0

export async function circuitBreaker<T>(fn: () => Promise<T>): Promise<T> {
  if (failures >= 3) {
    throw new Error('Circuit open')
  }

  try {
    const res = await fn()
    failures = 0
    return res
  } catch (e) {
    failures++
    throw e
  }
}
