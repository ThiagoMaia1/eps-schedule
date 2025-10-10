export interface Speaker {
  name: string
  affiliation?: string
  isInvitedGuest?: boolean
}

export interface ScheduleEntry {
  id: string // Unique identifier for the session
  speaker?: string
  affiliation?: string
  speakers?: Speaker[] // Array of speakers for panel discussions
  theme?: string
  eventType?: string // For general events: "Morning Prayer", "Lunch", "ETS Plenary Session I", etc.
  originalTime?: string
  startTime: string // Start time of the session (e.g., "9:00 AM")
  endTime: string // End time of the session (e.g., "9:40 AM")
  startMinutes: number // Start time in minutes since midnight (parsed once during data load)
  endMinutes: number // End time in minutes since midnight (parsed once during data load)
  isEPS?: boolean
  track?: string
  hasRoomConflict?: boolean
  isGeneralEvent?: boolean
  isSpecialEvent?: boolean
  isPanelOrQA?: boolean // True for panel discussions and Q&A sessions
  isPanelDiscussion?: boolean // True for panel discussions specifically
  isQAndA?: boolean // True for Q&A sessions specifically
  shiftId?: string // ID of the shift this session belongs to
  moderator?: {
    name: string
    affiliation?: string
  }
  isInvitedGuest?: boolean // True for invited guest speakers
}

export interface ShiftBlock {
  id: string
  moderator: {
    name: string
    affiliation?: string
  }
  startTime: string
  endTime: string
  startMinutes: number // Start time in minutes since midnight (parsed once during data load)
  endMinutes: number // End time in minutes since midnight (parsed once during data load)
  dayOfWeek: string
  shift: string
  track?: string | null
  subtheme?: string
  hasRoomConflict?: boolean
}

export interface ScheduleData {
  day: string
  locations: string[]
  timeSlots: {
    time: string
    sessions: { [location: string]: ScheduleEntry[] }
  }[]
  shifts: ShiftBlock[] // Moderator blocks for this day
}
