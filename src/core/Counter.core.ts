export function getLength(text: string): number {
  return text.length
}

export function getNumberOfWords(text: string): number {
  const regex = /\w+/gm
  const result = text.match(regex)
  return result ? result.length : 0
}

export function getNumberOfLetters(text: string): number {
  const regex = /[a-zA-Z]/gm
  const result = text.match(regex)
  return result ? result.length : 0
}

export function getNumberOfNumbers(text: string): number {
  const regex = /\d/gm
  const result = text.match(regex)
  return result ? result.length : 0
}

export function getNumberOfSpaces(text: string): number {
  const regex = /\s/gm
  const result = text.match(regex)
  return result ? result.length : 0
}

export function getNumberOfSpecialChars(text: string): number {
  const regex = /[^\w\s]/gm
  const result = text.match(regex)
  return result ? result.length : 0
}
