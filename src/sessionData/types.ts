export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'
export type Shift = 'AM' | 'PM' | 'Evening' | 'Other'
export type Speaker = {
  name: string
  affiliation?: string
  isInvitedGuest?: boolean
}

export const RESPONSE = 'Response'

export type Location = {
  hotel: string
  floor: string
  room: string
}

export type Event = {
  date: string
  dayOfWeek: DayOfWeek
  startTime: string
  endTime: string
  location?: Location
  isCancelled?: boolean
  originalEventIfMoved?: Pick<
    Event,
    'date' | 'startTime' | 'endTime' | 'location'
  >
}

export type Session = Event &
  (
    | {
        speaker: Speaker
        theme: string
      }
    | {
        isPanelDiscussion?: boolean
        isQAndA?: boolean
        speakers?: Speaker[]
        theme?: string
      }
  )

export type TrackShift = {
  dayOfWeek: DayOfWeek
  shift: Shift
  /** Earliest start time among sessions in this block */
  startWindow?: string
  /** Latest end time among sessions in this block */
  endWindow?: string
  sessions: Session[]
  moderator?: Speaker
  location: Location
  subtheme?: string
  specialClassifications?: string[]
}

export type TrackGroup = {
  /** Track name; null when a session has no program track */
  track: string | null
  shifts: TrackShift[]
  specialClassifications?: string[]
}

export type GeneralEvent = Event & {
  location: Location
  eventType: string // e.g., "Morning Prayer", "Lunch", "ETS Plenary Session I"
  theme?: string // Optional subtitle/topic
  speaker?: Speaker
  speakers?: Speaker[]
  isSpecialEvent?: boolean
  specialClassifications?: string[]
}

export interface ClassificationColors {
  background: string
  border: string
}

export interface FooterConfig {
  officialSourceUrl: string
  officialSourceName: string
  lastUpdated?: string // Date string for when the event data was last updated (optional)
}

export interface EventData {
  generalEvents: GeneralEvent[]
  Tracks: TrackGroup[]
  venues?: string[]
  classificationColors?: Record<string, ClassificationColors>
  hideSpecialEventsByDefault?: boolean
  name: string
  footerConfig: FooterConfig
}
