import { useState, useEffect, useMemo } from 'react'

const QUERY_PARAM_CHANGE_EVENT_ID = 'query-param-change'

const isBrowser = () => typeof window !== 'undefined'

export const useQueryParams = <T extends Record<string, string>>() => {
  type QueryParams = Partial<T>

  const initialQueryParams = useMemo(() => {
    if (!isBrowser()) return {} as QueryParams
    const urlParams = new URLSearchParams(window.location.search)
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
    const newState =
      window.location.pathname + (stringParams ? `?${stringParams}` : '')

    // Only update if the URL actually changed
    if (newState !== window.location.pathname + window.location.search) {
      window.history.pushState({}, '', newState)
    }
  }, [queryParams])

  // Observe changes to the params (back/forward navigation)
  useEffect(() => {
    if (!isBrowser()) return

    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      setQueryParams(Object.fromEntries(urlParams) as QueryParams)
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener(QUERY_PARAM_CHANGE_EVENT_ID, handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener(QUERY_PARAM_CHANGE_EVENT_ID, handlePopState)
    }
  }, [])

  return [queryParams, setQueryParams] as const
}
