export interface RoomOrder {
  [hotel: string]: {
    [floor: string]: string[]
  }
}

export const roomOrder = {
  'Copley Place': {
    '1st': ['Boylston', 'Tremont'],
    '3rd': [
      'Boston University',
      'Brandeis',
      'Harvard',
      'MIT',
      'Northeastern',
      'Regis',
      'Simmons',
      'Suffolk',
      'Suﬀolk',
      'Tufts',
      'Wellesley',
    ],
    '4th': [
      'Falmouth',
      'Grand Ballroom Salon A',
      'Grand Ballroom Salon B',
      'Grand Ballroom Salon C',
      'Grand Ballroom Salon D',
      'Grand Ballroom Salon EFG',
      'Grand Ballroom Salon H',
      'Grand Ballroom Salon I',
      'Grand Ballroom Salon J',
      'Grand Ballroom Salon K',
      'Hyannis',
      'Nantucket',
      'Orleans',
      'Provincetown',
      'Vineyard',
      'Yarmouth',
    ],
    '5th': ['Maine', 'Massachusetts', 'New Hampshire', 'Vermont'],
  },
  Sheraton: {
    '2nd': [
      'Back Bay Ballroom A',
      'Back Bay Ballroom B',
      'Back Bay Ballroom C',
      'Back Bay Ballroom D',
    ],
    '3rd': ['Commonwealth', 'Fairfax A'],
  },
}

export const sortLocationsByRoomOrder = (
  locations: string[],
  roomOrder: RoomOrder
): string[] => {
  // Create a map of location to its sort order
  const orderMap = new Map<string, number>()
  let orderIndex = 0

  // Iterate through hotels in order (Copley Place first, then Sheraton)
  const hotels = ['Copley Place', 'Sheraton']
  const floors = ['1st', '2nd', '3rd', '4th', '5th']

  for (const hotel of hotels) {
    const hotelData = roomOrder[hotel]
    if (!hotelData) continue

    for (const floor of floors) {
      const rooms = hotelData[floor] || []
      for (const room of rooms) {
        // Match location strings like "Copley Place - First Floor: Boylston"
        const fullLocation = locations.find((loc) => {
          const locationParts = loc.split(':')
          if (locationParts.length !== 2) return false

          const floorPart = locationParts[0].trim()
          const roomPart = locationParts[1].trim()

          // Check if hotel matches, floor matches, and room matches
          return (
            floorPart.includes(hotel) &&
            floorPart.includes(floor) &&
            roomPart === room
          )
        })

        if (fullLocation) {
          orderMap.set(fullLocation, orderIndex++)
        }
      }
    }
  }

  // Sort locations based on the order map
  return [...locations].sort((a, b) => {
    const orderA = orderMap.get(a)
    const orderB = orderMap.get(b)

    // If both have defined orders, sort by order
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB
    }

    // If only one has an order, prioritize it
    if (orderA !== undefined) return -1
    if (orderB !== undefined) return 1

    // If neither has an order, maintain original order
    return 0
  })
}
