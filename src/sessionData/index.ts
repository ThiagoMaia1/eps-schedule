// Export types
export type {
  DayOfWeek,
  Shift,
  Speaker,
  Location,
  Event,
  Session,
  TrackShift,
  TrackGroup,
  GeneralEvent,
  EventData,
} from './types'

// Export event router functions
export {
  getEventData,
  getAvailableEventPaths,
  getEventName,
} from './eventRouter'

// Export event data
export { default as eps2025Data } from './events/eps-2025'
export { default as epistemologiaAnaliticaUemaData } from './events/epistemologia-analitica-uema'
