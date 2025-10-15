import { useState, useEffect, useMemo } from 'react'

const QUERY_PARAM_CHANGE_EVENT_ID = 'query-param-change'

const isBrowser = () => typeof window !== 'undefined'

export const useQueryParams = <T extends Record<string, string>>() => {
  type QueryParams = Partial<T>

  const initialQueryParams = useMemo(() => {
    if (!isBrowser()) return {} as QueryParams
    // Extract query params from hash (format: #/path?param=value)
    const hash = window.location.hash
    const queryIndex = hash.indexOf('?')
    if (queryIndex === -1) return {} as QueryParams
    const searchString = hash.substring(queryIndex + 1)
    const urlParams = new URLSearchParams(searchString)
    return Object.fromEntries(urlParams) as QueryParams
  }, [])

  const [queryParams, setQueryParams] =
    useState<QueryParams>(initialQueryParams)

  useEffect(() => {
    if (!isBrowser()) return

    const urlParams = new URLSearchParams()
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlParams.set(key, value)
      }
    })

    const stringParams = urlParams.toString()
    // Get the current hash path (before any ?)
    const hash = window.location.hash
    const queryIndex = hash.indexOf('?')
    const hashPath = queryIndex === -1 ? hash : hash.substring(0, queryIndex)

    const newHash = hashPath + (stringParams ? `?${stringParams}` : '')

    // Only update if the hash actually changed
    if (newHash !== window.location.hash) {
      window.location.hash = newHash
    }
  }, [queryParams])

  // Observe changes to the params (back/forward navigation)
  useEffect(() => {
    if (!isBrowser()) return

    const handleHashChange = () => {
      const hash = window.location.hash
      const queryIndex = hash.indexOf('?')
      if (queryIndex === -1) {
        setQueryParams({} as QueryParams)
        return
      }
      const searchString = hash.substring(queryIndex + 1)
      const urlParams = new URLSearchParams(searchString)
      setQueryParams(Object.fromEntries(urlParams) as QueryParams)
    }

    window.addEventListener('hashchange', handleHashChange)
    document.addEventListener(QUERY_PARAM_CHANGE_EVENT_ID, handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener(
        QUERY_PARAM_CHANGE_EVENT_ID,
        handleHashChange
      )
    }
  }, [])

  return [queryParams, setQueryParams] as const
}
