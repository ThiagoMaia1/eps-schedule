import React from 'react'

/**
 * Highlights matching text in a string based on search query
 * @param text - The text to highlight
 * @param searchQuery - The search query to match
 * @returns React elements with highlighted text
 */
export const highlightText = (
  text: string,
  searchQuery: string
): React.ReactNode => {
  if (!searchQuery.trim() || !text) {
    return text
  }

  const searchLower = searchQuery.toLowerCase()
  const textLower = text.toLowerCase()

  // Find all matches
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let matchIndex = textLower.indexOf(searchLower)

  while (matchIndex !== -1) {
    // Add text before match
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex))
    }

    // Add highlighted match
    const matchedText = text.substring(
      matchIndex,
      matchIndex + searchQuery.length
    )
    parts.push(
      <mark key={`${matchIndex}-${matchedText}`} className="highlight">
        {matchedText}
      </mark>
    )

    lastIndex = matchIndex + searchQuery.length
    matchIndex = textLower.indexOf(searchLower, lastIndex)
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return <>{parts}</>
}
