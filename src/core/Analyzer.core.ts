export function isPalindrome(text: string): boolean {
  const trimmedText = text.trim()
  return trimmedText === trimmedText.split('').reverse().join('')
}
