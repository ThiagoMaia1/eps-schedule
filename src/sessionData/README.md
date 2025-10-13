# Session Data Organization

This folder contains the reorganized session data for the EPS Schedule application, supporting multiple events with routing capabilities.

## Structure

```
sessionData/
├── types.ts                 # TypeScript type definitions for all events
├── eventRouter.ts           # Router to select event data based on URL path
├── index.ts                # Main exports for the sessionData module
├── events/                 # Individual event data files
│   ├── eps-2025.ts         # ETS 2025 Boston event data
│   └── epistemologia-analitica-uema.ts  # Epistemologia Analítica UEMA event data
└── README.md               # This file
```

## Types

The `types.ts` file contains all the type definitions used across events:

- `DayOfWeek`: Union type for days of the week
- `Shift`: Time periods (AM, PM, Evening, Other)
- `Speaker`: Speaker information with optional affiliation and guest status
- `Location`: Venue information (hotel/building, floor, room)
- `Event`: Base event with date, time, and location
- `Session`: Individual session with speaker(s) and theme
- `TrackShift`: Block of sessions with a moderator
- `TrackGroup`: Collection of track shifts
- `GeneralEvent`: Events like lunch, coffee breaks, plenary sessions
- `EventData`: Main interface containing general events and tracks
- `ClassificationColors`: Background and border colors for special classifications

## Classification System

Sessions can be assigned special classifications (e.g., "Evangelical Philosophical Society") that affect their visual appearance and filtering options.

### Classification Hierarchy

Classifications can be defined at three levels, with priority given to the most specific:

1. **Session level** (highest priority) - Currently not implemented in data structure, but reserved for future use
2. **Track-Shift level** - Applied to all sessions within a specific shift
3. **Track level** (lowest priority) - Applied to all sessions in the entire track

The `primaryClassification` field in `ScheduleEntry` automatically contains the highest priority classification available for each session.

### Defining Classification Colors

In your event data file, define colors for each classification:

```typescript
classificationColors: {
  'Evangelical Philosophical Society': {
    background: '#ebf5ff',  // Light blue background
    border: '#93c5fd',       // Blue border
  },
}
```

Sessions with a `primaryClassification` will use these colors instead of the default white background.

## Event Router

The `eventRouter.ts` provides functions to:

### `getEventData(path?: string): EventData`

Returns event data based on the URL path. If no path is provided, uses `window.location.pathname`.

**Supported paths:**

- `/` or `/eps-2025` → ETS 2025 Boston
- `/epistemologia-analitica-uema` → Epistemologia Analítica UEMA

### `getAvailableEventPaths(): string[]`

Returns an array of all registered event paths (excluding the root path).

### `getEventName(path: string): string`

Returns the human-readable name for an event given its path.

## Adding a New Event

To add a new event:

1. **Create a new event data file** in the `events/` folder (e.g., `my-event-2026.ts`):

```typescript
import type { EventData, GeneralEvent, TrackGroup } from '../types'

export const generalEvents: GeneralEvent[] = [
  // Define general events (registration, lunch, coffee breaks, etc.)
  {
    date: 'March 15th',
    dayOfWeek: 'Monday',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    eventType: 'Registration',
    location: {
      hotel: 'Conference Center',
      floor: '1st',
      room: 'Main Entrance',
    },
  },
  // ... more general events
]

export const Tracks: TrackGroup[] = [
  // Define tracks with shifts and sessions
  {
    track: 'Track Name',
    specialClassifications: ['Evangelical Theological Society'], // Optional: Add classifications like 'Evangelical Philosophical Society'
    shifts: [
      {
        dayOfWeek: 'Monday',
        shift: 'AM',
        startWindow: '10:00 AM',
        endWindow: '12:00 PM',
        moderator: {
          name: 'Moderator Name',
          affiliation: 'Institution',
        },
        location: {
          hotel: 'Conference Center',
          floor: '2nd',
          room: 'Room A',
        },
        sessions: [
          {
            date: 'March 15th',
            dayOfWeek: 'Monday',
            startTime: '10:00 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Speaker Name',
              affiliation: 'Institution',
            },
            theme: 'Session Title',
          },
          // ... more sessions
        ],
      },
      // ... more shifts
    ],
  },
  // ... more tracks
]

const eventData: EventData = {
  generalEvents,
  Tracks,
  venues: ['Venue Name 1', 'Venue Name 2'], // List all venues (hotels) for this event
  classificationColors: {
    // Optional: Define custom background/border colors for special classifications
    'Evangelical Philosophical Society': {
      background: '#ebf5ff',
      border: '#93c5fd',
    },
    'Other Classification': {
      background: '#f0fdf4',
      border: '#86efac',
    },
  },
}

export default eventData
```

2. **Update the event router** in `eventRouter.ts`:

```typescript
import myEvent2026Data from './events/my-event-2026'

const eventDataMap: Record<string, EventData> = {
  '/eps-2025': eps2025Data,
  '/epistemologia-analitica-uema': epistemologiaAnaliticaUemaData,
  '/my-event-2026': myEvent2026Data, // Add your new event
  '/': eps2025Data,
}

// Also update the event names:
const eventNames: Record<string, string> = {
  '/eps-2025': 'ETS 2025 - Boston',
  '/epistemologia-analitica-uema': 'Epistemologia Analítica UEMA',
  '/my-event-2026': 'My Event 2026', // Add your event name
  '/': 'ETS 2025 - Boston',
}
```

3. **Export from the index** in `index.ts`:

```typescript
export { default as myEvent2026Data } from './events/my-event-2026'
```

4. **Test your event** by navigating to the path (e.g., `http://localhost:5173/my-event-2026`)

## Usage

### In Components

```typescript
import { useCurrentPath } from './hooks/useCurrentPath'
import { getScheduleData } from './utils/scheduleParser'
import { getEventName } from './sessionData'

function MyComponent() {
  // Track current path with automatic re-rendering on navigation
  const currentPath = useCurrentPath()

  // Get schedule data for current path
  const scheduleData = useMemo(
    () => getScheduleData(currentPath),
    [currentPath]
  )

  // Get human-readable event name
  const eventName = getEventName(currentPath)

  // Use scheduleData...
}
```

### Direct API Usage

```typescript
import { getEventData, getEventName, type EventData } from './sessionData'

// Get event data for a specific path
const eventData = getEventData('/epistemologia-analitica-uema')

// Get event name for a specific path
const eventName = getEventName('/epistemologia-analitica-uema')
```

## Notes

- The router automatically selects the appropriate event based on the URL path
- Each event can have its own structure of locations, days, and sessions
- The types are flexible to accommodate different event formats
- All time parsing and schedule generation is handled automatically by `scheduleParser.ts`
