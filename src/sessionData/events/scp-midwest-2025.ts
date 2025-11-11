import type { EventData, GeneralEvent, TrackGroup } from '../types'

export const generalEvents: GeneralEvent[] = [
  {
    date: 'November 13th',
    dayOfWeek: 'Thursday',
    startTime: '1:00 PM',
    endTime: '1:30 PM',
    eventType: 'Check-in',
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'McKenna Hall Lobby',
    },
  },
  {
    date: 'November 13th',
    dayOfWeek: 'Thursday',
    startTime: '4:45 PM',
    endTime: '5:00 PM',
    eventType: 'Pre-Keynote Welcome & Opening Remarks',
    speakers: [
      {
        name: 'Joel Archer',
      },
      {
        name: 'Joel Chopp',
      },
      {
        name: 'John Ragsdale',
      },
    ],
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'McKenna Chapel',
    },
  },
  {
    date: 'November 13th',
    dayOfWeek: 'Thursday',
    startTime: '5:00 PM',
    endTime: '6:15 PM',
    eventType: 'Keynote Address',
    theme:
      "Integrated Emergent Dualism and the 'Bare Seed' of Heavenly Spiritual Bodies",
    speaker: {
      name: "Timothy O'Connor",
      affiliation: 'Indiana University',
    },
    speakers: [
      {
        name: 'Joel Chopp',
      },
    ],
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'McKenna Chapel',
    },
  },
  {
    date: 'November 14th',
    dayOfWeek: 'Friday',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    eventType: 'Light breakfast',
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '2nd',
      room: "J.C. McPheeter's Floor Lobby",
    },
  },
  {
    date: 'November 14th',
    dayOfWeek: 'Friday',
    startTime: '12:00 PM',
    endTime: '2:00 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'Cordelia Hall',
    },
  },
  {
    date: 'November 14th',
    dayOfWeek: 'Friday',
    startTime: '4:00 PM',
    endTime: '5:15 PM',
    eventType: 'Keynote Address',
    theme: 'Disability, Life After Death, and the True Self',
    speaker: {
      name: 'Eleonore Stump',
      affiliation: 'Saint Louis University',
    },
    speakers: [
      {
        name: 'Joel Archer',
      },
    ],
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'McKenna Chapel',
    },
  },
  {
    date: 'November 14th',
    dayOfWeek: 'Friday',
    startTime: '6:15 PM',
    endTime: '8:00 PM',
    eventType: 'Dinner and Banquet Speaker',
    theme: 'Presentation of the Winner of the Graduate Student Paper Award',
    speaker: {
      name: 'Timothy Pawl',
      affiliation: 'University of St. Thomas',
    },
    speakers: [
      {
        name: 'Michael L. Peterson',
      },
    ],
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'Banquet Main Dining Hall',
    },
  },
  {
    date: 'November 15th',
    dayOfWeek: 'Saturday',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    eventType: 'Light breakfast',
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '2nd',
      room: "J.C. McPheeter's Floor Lobby",
    },
  },
  {
    date: 'November 15th',
    dayOfWeek: 'Saturday',
    startTime: '10:45 AM',
    endTime: '11:00 AM',
    eventType: 'Concluding Remarks',
    location: {
      hotel: 'Asbury Theological Seminary',
      floor: '',
      room: 'McKenna Chapel',
    },
  },
]

export const Tracks: TrackGroup[] = [
  {
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '2:30 PM',
        moderator: {
          name: 'Chair 1',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '1:30 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'Noam Oren',
              affiliation: 'New York University',
            },
            theme: "On the Rationality of the Religious Believer's Grief",
          },
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Lizibeth Fischer',
              affiliation: 'University of Notre Dame',
            },
            theme:
              "'These three remain': On the Persistence of Faith in the Afterlife",
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '2:45 PM',
        endWindow: '3:45 PM',
        moderator: {
          name: 'Robert J. Hartman',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '2:45 PM',
            endTime: '3:15 PM',
            speaker: {
              name: 'Paul Rezkalla & Michael Willenborg',
              affiliation: 'US Air Force Academy & Pikes Peak State College',
            },
            theme: 'Disability, Virtue, and the New Creation',
          },
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '3:15 PM',
            endTime: '3:45 PM',
            speaker: {
              name: 'Aaron Davis',
              affiliation: 'University of St. Andrews',
            },
            theme: 'Heavenly Puzzles: Disability and the Intermediate State',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '4:00 PM',
        endWindow: '4:30 PM',
        moderator: {
          name: 'David Bradshaw',
          affiliation: 'University of Kentucky',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'David Vander Laan',
              affiliation: 'Westmont College',
            },
            theme: 'Time Management for Immortals',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '9:30 AM',
        moderator: {
          name: 'Chair 7',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '8:30 AM',
            endTime: '9:00 AM',
            speaker: {
              name: 'Chandler Warren',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Heavenly Freedom: Anselmian and Thomistic Inspired Solutions for a Contemporary Problem',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '9:00 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Christopher Hauser & Therese Jean Shimkus',
              affiliation: 'The University of Scranton',
            },
            theme: 'The Problem of Heavenly Freedom: Two Ways Forward',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '9:45 AM',
        endWindow: '10:45 AM',
        moderator: {
          name: 'Joel Archer',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '9:45 AM',
            endTime: '10:15 AM',
            speaker: {
              name: 'Jeffrey Hause',
              affiliation: 'Creighton University',
            },
            theme:
              "The Inexorable Progress—or Regress—of the Next Life in Abelard's Collationes",
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '10:15 AM',
            endTime: '10:45 AM',
            speaker: {
              name: 'Sarah C. Bruns',
              affiliation: 'Asbury University',
            },
            theme:
              'Loving into Damnation: A Puzzle of Desire in the Thomistic Model',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '11:00 AM',
        endWindow: '12:00 PM',
        moderator: {
          name: 'Matthew Baddorf',
          affiliation: 'Walters State Community College',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '11:00 AM',
            endTime: '11:30 AM',
            speaker: {
              name: 'Leigh Vicens',
              affiliation: 'Augustana University',
            },
            theme: 'Hopeful Universalism and the Desires of the Heart',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '11:30 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Natalia Lopez',
              affiliation: 'Baylor University',
            },
            theme: 'Has Rea defeated hopeful universalism?',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:00 PM',
        moderator: {
          name: 'Thomas McCall',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Harriet Baber',
              affiliation: 'University of San Diego',
            },
            theme:
              'Personites, the First-Person Perspective, and What Matters in Survival',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Jon Kelly',
              affiliation: 'University of St. Andrews',
            },
            theme:
              'On the Possibility of an Abstract Nature Neo-Dyothelitic Christology (and what this means for the resurrection)',
          },
        ],
      },
      {
        dayOfWeek: 'Saturday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '9:30 AM',
        moderator: {
          name: 'Chair 15',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '8:30 AM',
            endTime: '9:00 AM',
            speaker: {
              name: 'Jeremy W. Skrzypek',
              affiliation: 'Ohio Dominican University',
            },
            theme: 'Creation and the Puzzle of Prior Knowledge',
          },
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '9:00 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Emily McCarty',
              affiliation: 'Samford University',
            },
            theme: 'Eternity and Prayer: Can a Timeless God Respond to Prayer?',
          },
        ],
      },
      {
        dayOfWeek: 'Saturday',
        shift: 'AM',
        startWindow: '9:45 AM',
        endWindow: '10:45 AM',
        moderator: {
          name: 'Chair 17',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 230',
        },
        sessions: [
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '9:45 AM',
            endTime: '10:15 AM',
            speaker: {
              name: 'Joshua Mugg & James Van Slyke',
              affiliation: 'Park University & Fresno Pacific University',
            },
            theme:
              'Are the Folk Faith Doxasticists? An Experimental Philosophy Foray into Philosophy of Religion',
          },
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '10:15 AM',
            endTime: '10:45 AM',
            speaker: {
              name: 'Phil Woodward',
              affiliation: 'Niagara University',
            },
            theme: 'What is Reasoning?',
          },
        ],
      },
    ],
  },
  {
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '2:30 PM',
        moderator: {
          name: 'Aaron Davis',
          affiliation: 'University of St. Andrews',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '1:30 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'David Bradshaw',
              affiliation: 'University of Kentucky',
            },
            theme: 'An Eastern Orthodox View of Judgment and the Afterlife',
          },
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Matthew Baddorf',
              affiliation: 'Walters State Community College',
            },
            theme: 'Corporate Final Judgment',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '2:45 PM',
        endWindow: '3:45 PM',
        moderator: {
          name: 'Chair 4',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '2:45 PM',
            endTime: '3:15 PM',
            speaker: {
              name: 'Jacob Huls',
              affiliation: 'Saint Louis University',
            },
            theme: 'Punishment, Reward, and Corruptionism',
          },
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '3:15 PM',
            endTime: '3:45 PM',
            speaker: {
              name: 'A. G. Holdier',
              affiliation: 'University of Notre Dame',
            },
            theme: 'An Illocutionary Puzzle for Divine Threats of Hell',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '4:00 PM',
        endWindow: '4:30 PM',
        moderator: {
          name: 'Nicholas S. Grounds',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 13th',
            dayOfWeek: 'Thursday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Ryan Shields',
              affiliation: 'Arizona Christian University',
            },
            theme: 'Can God Restore Moral Agency Postmortem?',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '9:30 AM',
        moderator: {
          name: 'Jeremy W. Skrzypek',
          affiliation: 'Ohio Dominican University',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '8:30 AM',
            endTime: '9:00 AM',
            speaker: {
              name: 'Clarke A. Moore',
              affiliation: 'Anderson University',
            },
            theme:
              'Defending a Thomistic-Constitutional Account of Resurrection and Identity: A Response to Critics of Stump and Baker',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '9:00 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Ethan Williams',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme: 'Does Bodily Resurrection Require Animalism?',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '9:45 AM',
        endWindow: '10:45 AM',
        moderator: {
          name: 'Chris Willard-Kyle',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '9:45 AM',
            endTime: '10:15 AM',
            speaker: {
              name: 'Devid Viezzi',
              affiliation: 'Independent Scholar',
            },
            theme: 'Hell, Evil, and Freedom – A Thomistic Case for Issuantism',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '10:15 AM',
            endTime: '10:45 AM',
            speaker: {
              name: 'Daniel Rubio',
              affiliation: 'Toronto Metropolitan University',
            },
            theme: 'Non-trichotomous Afterlife Axiology',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'AM',
        startWindow: '11:00 AM',
        endWindow: '12:00 PM',
        moderator: {
          name: 'Joseph Okello',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '11:00 AM',
            endTime: '11:30 AM',
            speaker: {
              name: 'Thiago Pereira Maia',
              affiliation: 'Universidade Federal do Ceará',
            },
            theme:
              'Definitiveness and the Afterlife: Rethinking the Grounds of Eternity',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '11:30 AM',
            endTime: '12:00 PM',
            speaker: {
              name: 'Maria Waggoner & Tim Pawl',
              affiliation: 'Purdue University & University of St. Thomas',
            },
            theme: 'An Empirical Defense for Fearing the Fires of Hell',
          },
        ],
      },
      {
        dayOfWeek: 'Friday',
        shift: 'PM',
        startWindow: '2:00 PM',
        endWindow: '3:00 PM',
        moderator: {
          name: 'Kevin Kinghorn',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Daniel Grasso',
              affiliation: 'Saint Louis University',
            },
            theme:
              'Annihilationism, Goodness, and Love: Two Stumpian Arguments Against Annihilationism',
          },
          {
            date: 'November 14th',
            dayOfWeek: 'Friday',
            startTime: '2:30 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Blake McAllister',
              affiliation: 'Hillsdale College',
            },
            theme:
              "An Offer We Can't Refuse: How to Guarantee Free Acceptance of Salvation",
          },
        ],
      },
      {
        dayOfWeek: 'Saturday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '9:30 AM',
        moderator: {
          name: 'Chair 16',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '8:30 AM',
            endTime: '9:00 AM',
            speaker: {
              name: 'Andrew Blanton',
              affiliation: 'University of Birmingham',
            },
            theme: 'The Range Argument From Nonbelief',
          },
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '9:00 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Mark Jennings & Michael DeBord-Hall',
              affiliation:
                'Franciscan University of Steubenville & Baylor University',
            },
            theme: "What's Still Wrong with Tooley's Argument from Evil?",
          },
        ],
      },
      {
        dayOfWeek: 'Saturday',
        shift: 'AM',
        startWindow: '9:45 AM',
        endWindow: '10:45 AM',
        moderator: {
          name: 'Chair 18',
        },
        location: {
          hotel: 'Asbury Theological Seminary',
          floor: '',
          room: 'Stanger Hall 231',
        },
        sessions: [
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '9:45 AM',
            endTime: '10:15 AM',
            speaker: {
              name: 'Devin Santiago Dettman',
              affiliation: 'Baylor University',
            },
            theme: 'Moral Virtue of Reasonable Nonbelievers',
          },
          {
            date: 'November 15th',
            dayOfWeek: 'Saturday',
            startTime: '10:15 AM',
            endTime: '10:45 AM',
            speaker: {
              name: 'Christopher King',
              affiliation: 'Toccoa Falls College & Johnson University',
            },
            theme:
              "Who Needs Essentialism? Social Construction and Essentialism in do Vale's Gender as Love.",
          },
        ],
      },
    ],
  },
]

const eventData: EventData = {
  name: 'SCP Midwest Conference 2025',
  generalEvents,
  Tracks,
  footerConfig: {
    officialSourceUrl: 'https://www.societyofchristianphilosophers.com/',
    officialSourceName: 'Society of Christian Philosophers',
    lastUpdated: 'November 11, 2025',
  },
}

export default eventData
