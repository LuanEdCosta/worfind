export function isPalindrome(text: string): boolean {
  const trimmedText = text.trim()
  return trimmedText === trimmedText.split('').reverse().join('')
}

export function hasUppercaseLetter(text: string): boolean {
  const regex = /[A-Z]/gm
  return regex.test(text)
}

export function hasLowercaseLetter(text: string): boolean {
  const regex = /[a-z]/gm
  return regex.test(text)
}

export function hasNumber(text: string): boolean {
  const regex = /\d/gm
  return regex.test(text)
}

export function hasSpecialChar(text: string): boolean {
  const regex = /[^\w\s]/gm
  return regex.test(text)
}
