export function UseGetCEP(newCep: string) {
  const newCEP = newCep.replace(/[^\d]/g, '')

  if (newCEP.length === 0) {
    return false
  } else if (newCEP.length < 8) {
    return false
  } else if (newCEP.length > 8) {
    return false
  }

  return true
}