import type { TrackGroup, GeneralEvent, EventData } from '../types'

export const RESPONSE = 'Response'

export const generalEvents: GeneralEvent[] = [
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '8:15 AM',
    endTime: '8:45 AM',
    eventType: 'Morning Prayer',
    location: {
      hotel: 'Copley Place',
      floor: '1st',
      room: 'Tremont',
    },
  },
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '12:15 PM',
    endTime: '1:15 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Copley Place',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '5:00 PM',
    endTime: '5:50 PM',
    eventType: 'ETS Plenary Session I',
    theme: 'The Bible and the Nicene Creed',
    speaker: {
      name: 'Craig Blaising',
    },
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons EFG',
    },
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '7:45 AM',
    endTime: '8:15 AM',
    eventType: 'Morning Prayer',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salon EFG',
    },
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '11:45 AM',
    endTime: '12:45 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Copley Place',
      floor: '1st',
      room: 'General',
    },
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '1:00 PM',
    endTime: '1:50 PM',
    eventType: 'ETS Plenary Session II',
    theme: 'Why is Nicaea so Important?',
    speaker: {
      name: 'Lewis Ayers',
    },
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salon EFG',
    },
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '2:00 PM',
    endTime: '2:50 PM',
    eventType: 'EPS Plenary Session',
    theme: 'A Philosopher among the Theologians',
    speaker: {
      name: 'Tim McGrew',
    },
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salon EFG',
    },
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '8:15 AM',
    endTime: '8:45 AM',
    eventType: 'Corporate Worship',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons EFG',
    },
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '9:00 AM',
    endTime: '9:50 AM',
    eventType: 'ETS Plenary Session III',
    theme:
      'The Substance of Pro-Nicene Evangelical Systematics: For Us and For Our Salvation',
    speaker: {
      name: 'Fred Sanders',
    },
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons EFG',
    },
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    eventType: 'ETS Business Meetings',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons EFG',
    },
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    eventType: 'EPS Business Meeting',
    location: {
      hotel: 'Copley Place',
      floor: '3rd',
      room: 'Harvard',
    },
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '11:15 AM',
    endTime: '12:45 PM',
    eventType: 'Lunch',
    location: {
      hotel: 'Copley Place',
      floor: '1st',
      room: 'General',
    },
  },
  // Special Events - Tuesday Evening
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '7:30 PM',
    endTime: '9:00 PM',
    eventType: 'Ethnic Minority Networking Reception',
    theme: 'Sponsored by Baker Academic and Brazos Press, IVP Academic',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons IJ',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '8:30 PM',
    endTime: '10:00 PM',
    eventType: 'Evangelical Philosophical Society Reception',
    location: {
      hotel: 'Sheraton',
      floor: '3rd',
      room: 'Commonwealth',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 18th',
    dayOfWeek: 'Tuesday',
    startTime: '9:00 PM',
    endTime: '10:30 PM',
    eventType: "Women's Networking Reception",
    theme: 'Sponsored by B&H Academic, IVP Academic',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons ABC',
    },
    isSpecialEvent: true,
  },
  // Special Events - Wednesday Morning
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '6:45 AM',
    endTime: '8:15 AM',
    eventType: 'Gordon-Conwell Alumni Breakfast',
    theme:
      'Join President Scott Sunquist and fellow alumni for breakfast. In addition to breakfast and time to connect, we will be together, hear seminary updates from Dr. Sunquist and other faculty members, and give away some recent books. Alumni, spouses, and prospective students are invited to attend.',
    location: {
      hotel: 'Copley Place',
      floor: '1st',
      room: 'Yard House Restaurant',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '11:45 AM',
    endTime: '12:45 PM',
    eventType: 'Tutku Tours Luncheon',
    theme:
      '"Paul\'s Cilician Journeys: Routes and Roads around Tarsus" with Dr. Mark Wilson and Dr. Glen Thompson',
    speakers: [{ name: 'Mark Wilson' }, { name: 'Glen Thompson' }],
    location: {
      hotel: 'Sheraton',
      floor: '3rd',
      room: 'Fairfax A',
    },
    isSpecialEvent: true,
  },
  // Special Events - Wednesday Evening
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '9:15 PM',
    endTime: '10:15 PM',
    eventType: 'Gateway Seminary PhD and ThM Dessert Reception',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Provincetown',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '9:15 PM',
    endTime: '11:00 PM',
    eventType: 'Ice Cream Social and Dialogue: "Nicaea and the Jewish People"',
    theme: 'Moderator: Darrell Bock',
    speakers: [
      {
        name: 'Craig Blaising',
        affiliation: 'Southwestern Baptist Theological Seminary',
      },
      {
        name: 'Michael Svigel',
        affiliation: 'Dallas Theological Seminary',
      },
      {
        name: 'Michael Rydelnik',
        affiliation: 'Moody Bible Institute',
      },
    ],
    location: {
      hotel: 'Sheraton',
      floor: '2nd',
      room: 'Fairfax B',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '9:15 PM',
    endTime: '11:59 PM',
    eventType: 'Southern Seminary Late Night',
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons BC',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 19th',
    dayOfWeek: 'Wednesday',
    startTime: '9:15 PM',
    endTime: '11:00 PM',
    eventType: 'Talbot School of Theology Alumni Event',
    location: {
      hotel: 'Copley Place',
      floor: '3rd',
      room: 'Regis',
    },
    isSpecialEvent: true,
  },
  // Special Events - Thursday Morning
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '6:30 AM',
    endTime: '8:00 AM',
    eventType: "ETS Program Unit Chair's Breakfast",
    location: {
      hotel: 'Copley Place',
      floor: '4th',
      room: 'Grand Ballroom Salons BC',
    },
    isSpecialEvent: true,
  },
  {
    date: 'November 20th',
    dayOfWeek: 'Thursday',
    startTime: '6:45 AM',
    endTime: '8:15 AM',
    eventType: 'Dallas Theological Seminary Alumni Breakfast',
    location: {
      hotel: 'Sheraton',
      floor: '2nd',
      room: 'Back Bay AB',
    },
    isSpecialEvent: true,
  },
]

export const Tracks: TrackGroup[] = [
  {
    track: 'Evangelical Philosophical Society',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Parker Settecase',
          affiliation: 'Palm Beach Atlantic University',
        },

        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Harvard',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Nick Meader',
              affiliation: 'Newcastle University',
            },
            theme:
              'A Proposed Modiﬁcation of Plantinga’s Evolutionary Argument Against Naturalism',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Jonathan Reibsamen',
              affiliation: 'Columbia International University',
            },
            theme: 'Is Petitionary Prayer Senseless?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Paul M. Gould',
              affiliation: 'Palm Beach Atlantic University',
            },
            theme:
              'Experiences of Beauty in Art as Signs of Transcendence: Claims in Need of Conﬁrmation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Ryan Smith',
              affiliation: 'Palm Beach Atlantic University',
            },
            theme: 'Timelessness, Life-everlasting, and an Actual Inﬁnite',
          },
        ],
      },
    ],
  },
  {
    track: 'Spiritual Formation / Sanctification',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'John Coe',
          affiliation:
            'Talbot School of Theology/Institute for Spiritual Formation',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Wellesley',
        },

        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Christy Gonet',
              affiliation: 'California Baptist University',
            },
            theme: 'Holding Fast and Drawing Near: Sanctiﬁcation in Hebrews',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Andrew Barron',
              affiliation: 'Tyndale University; Wycliﬀe College',
            },
            theme:
              'Beyond the Hyper-Cognitive: Rethinking Spiritual Formation for the Intellectually Disabled',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'John Coe',
              affiliation:
                'Talbot School of Theology, Institute for Spiritual Formation',
            },
            theme:
              'Spiritual Formation, Virtue, and Flourishing: What Does Jesus have to do with Aristotle?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Donald Love',
              affiliation: 'Liberty Baptist Theological Seminary',
            },
            theme:
              'With All your Heart and Mind: Biblical Communicative Imagination and Emotions in Prayer',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Messianic Jewish Studies: History, Theology and Praxis',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Hélène Dallaire',
          affiliation: 'Denver Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '8:55 AM',
            speaker: {
              name: 'Rich Robinson',
              affiliation: 'Jews for Jesus',
            },
            theme:
              'Can We Learn about the Jewishness of Christianity through the Nicene Creed?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:00 AM',
            endTime: '9:25 AM',
            speaker: {
              name: 'Amy Downey',
              affiliation: 'Tzedakah Ministries',
            },
            theme:
              "What Nicaea Still 'Gets' Right and Wrong about the Jewish Tri-Unity/Trinity",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:30 AM',
            endTime: '9:55 AM',
            speaker: {
              name: 'Jim Melnick',
              affiliation:
                'Lancaster Bible College/Life in Messiah International',
            },
            theme: 'Inﬂuences on Jewish Christianity in Syria Prior to Nicaea',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:00 AM',
            endTime: '10:25 AM',
            speaker: {
              name: 'Golan Broshi',
              affiliation: 'One for Israel-Bible College',
            },
            theme:
              'A Tale of Two Councils: Yavneh, Nicaea and the Parting of the Ways',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:30 AM',
            endTime: '10:55 AM',
            speaker: {
              name: 'Brian Crawford',
              affiliation: 'Chosen People Ministries',
            },
            theme:
              'Jewish Scholars on the Jewishness of Nicaea: Some Implications of a Recent Paradigm Shift',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:25 AM',
            speaker: {
              name: 'Igal German',
              affiliation: 'International Biblical Apologetics Association',
            },
            theme:
              'The Council of Nicaea and Its Reception in Contemporary Messianic Jewish Thought',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:30 AM',
            endTime: '11:40 AM',
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Commonwealth',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Trinitarian Studies',
    shifts: [
      {
        moderator: {
          name: 'Rich Day',
          affiliation: 'New Orleans Baptist Theological Seminary/Ratio Christi',
        },
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Ronnie Campbell',
              affiliation: 'Liberty University',
            },
            theme: 'The Trinity, Divine Simplicity, and the Identity Thesis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Kirk R. MacGregor',
              affiliation: 'McPherson College',
            },
            theme: 'A New Natural Theological Argument for the Trinity',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Drew Smith',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme: 'A Trinitarian Argument Against Modalized Essence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Eli Haitov & Andrew Ter Ern Loke',
              affiliation:
                'Israel College of the Bible & Hong Kong Baptist University',
            },
            theme: 'A New Hilbert’s Hotel Argument Against Past-Eternalism ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Suﬀolk',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track:
      'A Dogmatic Dialogue about the Christian Life: A Conversation Around Four Recent',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Steven Duby',
          affiliation: 'Phoenix Seminar y',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Adam Johnson',
              affiliation: 'Torrey Honors College, Biola University',
            },
            theme: 'Atonement and the Love of God',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Kelly Kapic',
              affiliation: 'Covenant College',
            },
            theme: 'Union with Christ and Human Response to God’s Love',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Fred Sanders',
              affiliation: 'Torrey Honors College, Biola University',
            },
            theme:
              'The Christian Life Ecytpally Considered: Impressively Trinitarian',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Christopher Holmes',
              affiliation: 'University of Otago',
            },
            theme:
              'Atonement and the Life of Faith: Participation and Imitation Applied',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Tremont',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'A Response to Reading the General Epistles Missiologically',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Michael Naylor',
          affiliation: 'Columbia International University',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Amy Peeler',
              affiliation: 'Wheaton College',
            },
            theme: 'A Response to Reading Hebrews Missiologically',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'J. D. Payne',
              affiliation: 'Samford University',
            },
            theme: 'A Response to Reading 1 Peter Missiologically',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Daniel K. Eng',
              affiliation: 'Western Seminary',
            },
            theme: 'A Response to Reading James Missiologically',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Abeneazer G. Urga',
              affiliation: 'Evangelical Theological College',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:50 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Edward Smither',
              affiliation: 'Columbia International University',
            },
            theme: RESPONSE,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Adventist Theological Society',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Alan Parker',
          affiliation: 'Southern Adventist University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Falmouth',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Beersheba Maywald-Jacob',
              affiliation:
                'Adventist International Institute of Advanced Studies',
            },
            theme:
              'Rethinking Missions to Postmoderns in the Indian Context: Narratives and Worldview Transformation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Diói Cruz',
              affiliation: 'Middle East University, Lebanon',
            },
            theme:
              'Biblical Identity and the Cultural Mandate: Reclaiming Diversity in Scripture and Society',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Felipe A. Masotti',
              affiliation: 'Adventist College of Paraná',
            },
            theme:
              'Divine Wisdom, Prophetical Understanding and Identitary Knowledge',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Dominic Bornand',
              affiliation: 'Seminar Schloss Bogenhofen',
            },
            theme:
              'Christian Identity and Unity in the Seven Letters: A First-Century Pastoral Perspective',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Christie Chadwick',
          affiliation: 'Adventist College of Paran⁄',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Falmouth',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Ruth Anne Reese',
              affiliation: 'Asbury Theological Seminary',
            },
            theme:
              'The Suﬀering Savior, the Suﬀering Church, and Right Behavior for Today: A Study in 1 Peter',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Isaac Malheiros',
              affiliation: 'Adventist University of Sao Paulo, Brazil',
            },
            theme:
              "Identity and Mission in Jesus' Journey to Jerusalem in the Gospel of Luke",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Luan Henrique Gomes Ribeiro',
              affiliation: 'Princeton Theological Seminary',
            },
            theme:
              'A New Race, a Third Race, or No Race? Revisiting Ethnic Reasoning in Early Christianity',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Keldie Paroschi',
              affiliation: 'Biblical Research Institute',
            },
            theme:
              'The Same Made New: The Resurrection Body as a Framework for Christian Identity',
          },
        ],
      },
    ],
  },
  {
    track: 'African Biblical Studies',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Craig Keener',
          affiliation: 'Asbury Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Orleans',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:50 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Craig Blomberg',
              affiliation: 'Denver Seminary',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:10 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Ahreum Kim',
              affiliation: 'University of Cambridge',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:40 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Vuyani Sindo',
              affiliation: 'George Whiteﬁeld College, Cape Town, South Africa',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:00 AM',
            endTime: '10:20 AM',
            speaker: {
              name: 'Miguel Echevarría',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:30 AM',
            endTime: '10:45 AM',
            speaker: {
              name: 'Sofanit T. Abebe',
              affiliation: 'Trinity College Bristol, UK',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:45 AM',
            endTime: '11:00 AM',
            speaker: {
              name: 'Abeneazer G. Urga',
              affiliation:
                'Evangelical Theological College; Ethiopian Graduate School of Theology',
            },
            theme:
              'Reading Hebrews and 1 Peter from Majority World Perspectives',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'American Christianity',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        subtheme: 'Creedalism in American',
        moderator: {
          name: 'Paul Sanchez',
          affiliation: 'Oklahoma Baptist University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'John Wilsey',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Constitution or Creed in the Presbyterian Modernist Controversy, 1924-1926',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:40 AM',
            endTime: '9:45 AM',
            theme: RESPONSE,
            speaker: {
              name: 'Miles Smith',
              isInvitedGuest: true,
              affiliation: 'Hillsdale College',
            },
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:45 AM',
            endTime: '10:25 AM',
            speaker: {
              name: 'Miles Smith',
              isInvitedGuest: true,
              affiliation: 'Hillsdale College',
            },
            theme: 'Creeds, Confession, and the Idea of the Christian Nation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:25 AM',
            endTime: '10:30 AM',
            theme: RESPONSE,
            speaker: {
              name: 'John Wilsey',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Paul Helseth',
              affiliation: 'University of Northwestern - St. Paul',
            },
            theme:
              "Samuel Miller, Confessional Orthodoxy, and 'The Littleness of Sectarian Bigotry'",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:20 AM',
            endTime: '11:25 AM',
            theme: RESPONSE,
            speaker: {
              name: 'Kenneth Stewart',
              affiliation: 'Covenant College',
            },
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:25 AM',
            endTime: '12:05 PM',
            speaker: {
              name: 'Kenneth Stewart',
              affiliation: 'Covenant College',
            },
            theme: 'J. Gresham Machen (d. 1937): Among the Evangelicals?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '12:05 PM',
            endTime: '12:10 PM',
            theme: RESPONSE,
            speaker: {
              name: 'Paul Helseth',
              affiliation: 'University of Northwestern - St. Paul',
            },
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'American Christianity',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'American Christianity in the 20th Century',
        moderator: {
          name: 'Donald Westblade',
          affiliation: 'Hillsdale College',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Nathan A. Finn',
              affiliation: 'North Greenville University',
            },
            theme:
              'Carl F. H. Henry as a Cultural Apologist: The Defense of Nicene Christology as a Test Case',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'John W. Tweeddale',
              affiliation: 'Reformation Bible College',
            },
            theme:
              'New Evangelical Networks and the Early Ministry of James Montgomery Boice',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Adam E. Peterson',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Our Fate is One: African American Creedal Christianity and the Rise of Jim Crow, 1895-1915',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Travis C. Hearne',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Disillusionment of Christian America: Reinhold Niebuhr’s Realist Turn ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Anglican Theology',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Greg Peters',
          affiliation: 'Biola University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Nantucket',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Joel Scandrett',
              affiliation: 'Trinity Anglican Seminary',
            },
            theme: 'Anglicanism: Creedal or Confessional?',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Lee Gatiss',
              affiliation: 'Greystone Theological Institute',
            },
            theme: 'The Anglican Doctrine of the Creeds',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Maurice Elliott',
              affiliation: 'Church of Ireland Theological Institute, Dublin',
            },
            theme:
              'The Nicene Heritage of Anglicanism: Identity, Doctrine and Liturgy',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Alex Fogleman',
              affiliation: 'Trinity Anglican Seminary',
            },
            theme:
              ' "In Spirit and Truth: Anglicans and the Nicene Faith Today"',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Apologetics',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Ronnie Campb ell',
          affiliation: 'Liber ty University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Harvard',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Matthew Sokoloski',
              affiliation: 'Freed-Hardeman University',
            },
            theme:
              'Leslie Taylor (Freed-Hardeman University) Anchored Narratives and Incarnational Primacy: An Apologetic Proposal',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Rich Day',
              affiliation:
                'New Orleans Baptist Theological Seminary/ Ratio Christi',
            },
            theme: 'Deﬁning The Terms: Using Their Materials',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Robert B. Stewart',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'A Methodological Critique of the Low Christology of Post-Bultmannian Critical New Testament Scholars',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Brad Seeman',
              affiliation: 'Taylor University',
            },
            theme:
              '“Get on with It”: Alvin Plantinga and a Neglected Apologetic Dimension of Reformed Epistemology',
          },
        ],
      },
    ],
  },
  {
    track: 'Applied Linguistics and Biblical Languages',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Brian Schultz',
          affiliation: 'Fresno Paciﬁc University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon K',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Brian Schultz',
              affiliation: 'Fresno Paciﬁc University',
            },
            theme: 'Language Input and Output for Exegesis: Hebrew',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Randall Buth',
              affiliation: 'Whole Word Institute',
            },
            theme: 'Exegetical advantages of CLT: Greek',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Hélène Dallaire',
              affiliation: 'Denver Seminary',
            },
            theme:
              'Using Generative AI Tools for Teaching & Learning Biblical Hebrew',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            isPanelDiscussion: true,
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Arguments for God',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'MIT',
        },
        moderator: {
          name: 'Ben Whittington',
          affiliation: 'Anderson University',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Dean Meadows',
              affiliation: 'Holy Apostles College & Seminary',
            },
            theme:
              'The Modal Thomistic Ontological Argument for the Existence of God',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Emma Gregory',
              affiliation: 'University of Arkansas',
            },
            theme:
              "Beauty as a Doorway to the Divine: Thomas Reid's Faculty of Taste and an application to the Visual Arts",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Gavin Ortlund',
              affiliation: 'Truth Unites/Immanuel Nashville/Phoenix Seminary',
            },
            theme: 'The Argument for God from Eternal Truths',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Darrell Dooyema',
              affiliation: 'Colorado Christian University',
            },
            theme:
              'Jared D. Dooyema The Audiological Argument for the Existence of God',
          },
        ],
      },
    ],
  },
  {
    track: 'Asian/Asian American Theology',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Benjamin Shin',
          affiliation: 'Talbot School of Theology',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Tufts',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Hannah Nation',
              affiliation:
                'University of Edinburgh/Center for House Church Theology',
            },
            theme:
              'Beyond Soteriology: Applications of Union with Christ in the Chinese House Churches',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Ahnna Cho',
              affiliation: 'University of Aberdeen',
            },
            theme:
              'Performing Orthodoxy: Asian American Creedal Faith in Vanhoozer’s Theodrama',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Benjamin Shin',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              '“The One Church Model” of Governance for a Korean Church: Fact or Fiction?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Melissa Tan',
              affiliation: 'University of Aberdeen',
            },
            theme:
              'James Lee (Talbot School of Theology) The Theoretical and Applied Theology of Shame in the Westernized Asian Immigrant Context',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Baptist Studies Group',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Anthony Chute',
          affiliation: 'California Baptist University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Falmouth',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Matthew Pinson',
              affiliation: 'Welch Divinity School',
            },
            theme: 'Arminian Baptist Confessionalism in America',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Jonathan McCormick',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'The Baptist Faith and Message, 1925, in its Organizational Context',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Chris Chun',
              affiliation: 'Gateway Seminary',
            },
            theme: 'The New Hampshire Confession of Faith and Andrew Fuller',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Marvin Jones',
              affiliation: 'Montana Christian College',
            },
            theme: 'Baptist Faith and Messages: An Assessment',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track:
      'Beyond the Dark Night of the Soul: Realism and Hope among Black Evangelicals',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Vincent Bacote',
          affiliation: 'Wheaton College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Yarmouth',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Eric C. Redmond',
              affiliation: 'Moody Theological Seminary',
            },
            theme: 'Beyond the Dark Night',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Aaron Ducksworth',
              affiliation: 'Anderson University, SC',
            },
            theme: 'Beyond the Dark Night',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Kenneth Reid',
              affiliation: 'Independent Scholar',
            },
            theme: 'Beyond the Dark Night',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Vincent Bacote',
              affiliation: 'Wheaton College',
            },
            theme: 'Beyond the Dark Night',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Bible Exposition and Hermeneutics',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Eric C. Redmond',
          affiliation: 'MoodyTheological Seminar y',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Simmons',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'James Fazio',
              affiliation: 'Southern California Seminary',
            },
            theme:
              '“You Need Not That Any Man Teach You”: Revisiting the Holy Spirit’s Role as Biblical Expositor',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Wayne House',
              affiliation: 'Faith International University',
            },
            theme:
              'The Interpretation of the Genres of History, Myth, & Parable in Scripture and How to Apply Them',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Elliott Johnson',
              isInvitedGuest: true,
              affiliation: 'Dallas Theological Seminary',
            },
            theme: 'An Application of Exodus 19:5,6 in the Church',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Biblical Evangelism',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Timothy Beougher',
          affiliation: 'The Southern Baptist Theological Seminar y',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'New Hampshire',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'J. D. Payne',
              affiliation: 'Samford University',
            },
            theme:
              'Contemporary Deﬁnitions of Evangelism: Historical Survey and Theological Critique',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Mark J. Keown',
              affiliation: 'Laidlaw College',
            },
            theme: "The Priority of Evangelism in God's Mission",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Nicholas R. Clark',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Place of an Evangelist: A Biblical and Historical Survey',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Austin M. Freeman',
              affiliation: 'Houston Christian University',
            },
            theme: 'Is Apologetics Evangelism?',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Biblical Theology',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Ched Spellman',
          affiliation: 'Cedarville University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Brian Rosner',
              affiliation: 'Ridley College',
            },
            theme: 'Wilderness as a Theme in Biblical Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Derek Bass',
              affiliation: 'Tyndale Theological Seminary, The Netherlands',
            },
            theme:
              'Is the Roaring Lion Yahweh or Messiah: Ambiguity and the Implications for Divine Identity?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Nicholas G. Piotrowski',
              affiliation: 'Indianapolis Theological Seminary',
            },
            theme:
              'Now You Know the Hour: The Fulﬁllment of the Olivet Discourse in Jesus’ Death & Resurrection ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'J. Scott Duvall',
              affiliation: 'Ouachita Baptist University',
            },
            theme:
              "A New Heaven and A New Earth: Revelation's Portrayal of the New Creation",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Boston University',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Ched Spellman',
          affiliation: 'Cedar ville University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Thomas J. Sculthorpe',
              affiliation: 'Kenwood Institute',
            },
            theme:
              'Would Moses Have Aﬃrmed Nicaea? Typological Anticipation of the Incarnation in the Pentateuch',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Peter Link',
              affiliation: 'Charleston Southern University',
            },
            theme:
              'Fallen Moses, Raised Messiah: How the Torah Promises a Divine Messiah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Robert Cole',
              affiliation: 'eteacher.com',
            },
            theme:
              'The Divine Son of God in Genesis 1, Ps 2, Pss 88-89, and Isaiah 6',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Bobby Jamieson',
              affiliation: 'Trinity Baptist Church',
            },
            theme: 'Do the Old Testament Writings Proclaim a Divine Messiah?',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Tremont',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Biblical Worship',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Greg Stiekes',
          affiliation: 'Bob Jones University Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Melak Tsegaw',
              affiliation: 'Adventist University of Africa',
            },
            theme:
              "The Interplay of God's Transcendence and Immanence in Worship Expressions in the Book of Psalms",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Matisha Dentu',
              affiliation: 'Regent University, School of Divinity',
            },
            theme:
              'Singing the Creed: Nicene Christology in African American Spirituals',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Jeﬀ Mooney',
              affiliation: 'California Baptist University',
            },
            theme:
              'Doing Justice to Praise: An Evaluation of Modern Worship Songs in the Context of the Psalms',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Jordan Covarelli',
              affiliation: 'Independent Scholar',
            },
            theme:
              "'Fill the Room' or 'Cover the Earth'?: The Proprietarization of the Glory of God",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon D',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Joshua Waggener',
          affiliation: 'Southwestern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Matthew Barrett',
              affiliation: 'Trinity Anglican Seminary',
            },
            theme:
              'Veni, Creator Spiritus: Why Procession Justiﬁes Worship of the Spirit in the Nicene Creed',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Daniel Silliman',
              isInvitedGuest: true,
              affiliation: 'Christianity Today',
            },
            theme: 'The Resurgence of the Nicene Creed in Evangelical Worship',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Robert Pendergraft',
              affiliation: 'University of Mary Hardin-Baylor',
            },
            theme:
              'Creedal Hospitality: Welcoming Worshipers with the Nicene Creed',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Vineyard',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Bioethics',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Michael Sleasman',
          affiliation: 'Trinity Evangelical Divinity School',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Bryan Just',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Bioethics Coverage in the Early Years of Christianity Today',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Daniel Fleming',
              affiliation: 'Emmaus University',
            },
            theme:
              'Moving Goalposts: Conﬂicting Deﬁnitions of Personhood from Scripture & Artiﬁcial Intelligence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Autumn Ridenour',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme: 'Does AI Shape Us in Its Image?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Michael Sleasman',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Brokenness and the Drive for Perfection: Embodiment and Finitude amidst Transhuman Futures',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Brandeis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Book of Revelation',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Alan Bandy',
          affiliation: 'New Orleans Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:35 PM',
            speaker: {
              name: 'Eckhard Schnabel',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme: 'The Structure of Revelation and the Millennium',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:35 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Dave Mathewson',
              affiliation: 'Denver Seminary',
            },
            theme:
              'New Creation Millennialism: “Almost” but “Not Quite” - An ‘Ideal’ View of the Millennium',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:20 PM',
            endTime: '2:55 PM',
            speaker: {
              name: 'Rob Dalrymple',
              affiliation: 'Director of Determinetruth',
            },
            theme:
              ' "The Millennium Again: A Rhetorical Critique of New Creation Millennialism"',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:55 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Joel White',
              affiliation: 'Freie Theologische Hochschule Giessen',
            },
            theme:
              'Historic Premillennialism and New Creation Millennialism: Commonalities and Diﬀerences',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:35 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Alexander E. Stewart',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'The Millennium as Polemic against Greco-Roman After-life Beliefs in New Creation Millennialism',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Wellesley',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Christian Ethics',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Jason Thacker',
          affiliation: 'Boyce College',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Jeﬀrey Riley',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Finding a Moral Way through the World: Employing a Nicene Compass in Theological Ethics',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Meagan Adkins',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Herman Bavinck’s Eschatological Anthropology and the Persistence of Gender in the Eschaton',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Laura Cerbus',
              affiliation: 'Geneva College',
            },
            theme:
              'Priests of Creation: Assessing Priesthood Language for Environmental Ethics',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Courtney J. Veasey',
              affiliation: 'BibleMesh Institute',
            },
            theme:
              'Expanding Virtue: The Distinct Identiﬁcation of Women with Ethical Qualities in 1 Timothy 2',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Regis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Christian History and Thought Since 1700',
    shifts: [
      {
        subtheme:
          'Conveying Our Creed: Story, Symbol, Music, and Tract in Evangelical History',
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Karin Stetina',
          affiliation: 'Talbot School of Theology',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Andy Draycott',
              affiliation: 'Talbot School of Theology, Biola University',
            },
            theme:
              'How does The Pilgrim’s Progress oﬀer Creedal Christological Catechesis?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Heidi H. Dean',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Symbolic Worlds of Edwards and Baxter: Imagery & Reformed Realism',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Joshua Waggener',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              '“Captivated by the Music”: Addressing John Newton’s Concerns with Handel’s Messiah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Anthony S. G. Baldwin',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Serampore Persian Pamphlet: Controversy, Creeds, and the Cross',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
      },
      {
        subtheme: 'Creed Revision in the Post-Reformation Period',
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Robert Caldwell',
          affiliation: 'Southwestern Baptist Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Vermont',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Matthew Emerson',
              affiliation: 'Oklahoma Baptist University',
            },
            theme:
              'Modern Theology’s Misguided Attempts to Dismiss the Historic Confession of Christ’s Descent',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Malcolm Yarnell',
              isInvitedGuest: true,
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Reﬂections on Adding the Nicene Creed to the Baptist Faith and Message',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Kevin DeYoung',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'Why American Presbyterians Changed the Westminster Confession’s Doctrine of the Civil Magistrate',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Chad Van Dixhoorn',
              affiliation: 'Reformed Theological Seminary, Charlotte',
            },
            theme:
              'Voting for Christian Liberty: Revising Chapter 20 of the Westminster Confession of Faith',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Christianity and Culture',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Earl Waggoner',
          affiliation: 'Colorado Christian University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Timothy Paul Jones',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Ethnological Apologetics: Models of Identity Formation in Second-Century Apologetic Texts',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Andrea L. Robinson',
              affiliation: 'Huntsville Bible College',
            },
            theme:
              'Anime-ted Afterlife: Comparative Eschatology in Modern Anime',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Walker Tzeng',
              affiliation: 'Olivet University',
            },
            theme:
              'Can AI ‘Know’ God? A Comparative Study of Generative AI and Human Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'David C. Parker',
            },
            theme:
              "Racial and Ethnic Embodied Narratives and a Local Church's Missiological Responsibility",
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom B',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Glenn Kreider',
          affiliation: 'Dallas Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Stefana Dan Laing',
              affiliation: 'Beeson Divinity School',
            },
            theme: 'Historical/Patristics Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Luke Stamps',
              affiliation: 'Anderson University',
            },
            theme: 'Dogmatics Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Malcolm Yarnell',
              isInvitedGuest: true,
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme: 'Theological Perspective ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Coleman Ford & Shawn Wilhite',
              affiliation:
                'Southwestern Baptist Theological Seminary & California Baptist University',
            },
            theme: 'Response from the Authors',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom D',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Christianity and Islam: History and Texts',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Ayman Ibrahim',
          affiliation: 'The Southern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Rami Halaseh',
              affiliation: 'Harvard University',
            },
            theme: 'New Insights into the Canonicity of the Quran',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:40 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Daniel Brubaker',
              affiliation: 'Independent',
            },
            theme:
              'Mapping Quran Textual Variants Before and After Standardization Events',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:20 PM',
            endTime: '4:50 PM',
            speaker: {
              name: 'Adam Dodds',
              affiliation:
                'Alphacrucis University College / The Arthur Jeﬀery Centre',
            },
            theme:
              'The Quran’s Obstructive Similarity with the Bible: An Intertextual Theological Study of Noah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:00 PM',
            endTime: '5:30 PM',
            speaker: {
              name: 'Hal Nix',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Christian Forgeries or Authentic Pronouncements? A Critical Examination of Muhammad’s Covenants',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:40 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'David Wood',
              isInvitedGuest: true,
              affiliation: 'Independent',
            },
            theme:
              'When Theologians Rewrite History: The Problem of the Quran’s Satanic Verses',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Christianity and the Natural Sciences',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'Noah’s Flood Revisited',
        moderator: {
          name: 'Kenneth Keathley',
          affiliation: 'Southeastern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'Hugh Ross',
              affiliation: 'Reasons to Believe',
            },
            theme: "Noah's Flood Revisited",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Gregg Davidson',
              affiliation: 'University of Mississippi',
            },
            theme: 'Response from an Old-Earth Geologist',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:40 PM',
            endTime: '3:10 PM',
            speaker: {
              name: 'Tremper Longman',
              affiliation: 'Westmont College',
            },
            theme: 'Response from an Old Testament Scholar',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Matthew McLain',
              isInvitedGuest: true,
            },
            theme: 'Response from a Young-Earth Geologist',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:50 PM',
            endTime: '4:40 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Church History',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'C.J. Moore',
          affiliation: 'Midwestern Baptist Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon K',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Mátyás Bódi',
              affiliation: 'University of Oxford',
            },
            theme:
              'Christianity in Somalia: An Historical Analysis of Foreign and Indigenous Missions',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Gordon L. Heath',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Sojourners and Citizens: National Identity in the African Baptist Association, 1855-1914',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Terry Michael Wise',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Southern Slavery-Providentially Permissible and Pastorally Pursued',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Dudley Brown',
              affiliation: 'Journal of Post-Christendom Studies',
            },
            theme:
              'The Underground Railroad and its Intersection with the Black Baptist Church ',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'David C. Quackenbos',
          affiliation: 'McGill University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Orleans',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'KJ Drake',
              affiliation: 'Covenant Theological Seminary',
            },
            theme: 'Christ’s Exaltation in Reformed Orthodoxy',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Eunice J. Chung',
              affiliation: 'Liberty University',
            },
            theme:
              'The Triumph of the Protestant Reformation as Proclaimed through Hans Holbein’s The Ambassadors',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Arthur Rankin',
              affiliation: 'New College, Edinburgh',
            },
            theme:
              'Christ the Fulﬁller of the Covenant: Christology and Covenant in Calvin’s Hebrews Commentary',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Matthew David Visk',
              affiliation: 'University of Cambridge',
            },
            theme:
              "The Catholic Calvin: Christ's Satisfaction in John Calvin's Theology",
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Matthew Pinson',
          affiliation: 'Welch Divinity School',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Jared M. Causey',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Reassessing the Feminist Interpretation of Phoebe Palmer: A Historical Critique',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'S. A. Fix',
              affiliation: 'WTS/FTS/RTS',
            },
            theme:
              'Catechesis in a Time of Crisis: John Thomson’s Explication and an Old Sider’s Pastoral Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Kyle Beshears',
              affiliation: 'Independent Researcher',
            },
            theme:
              'Horticentric Atonement in Mormon Soteriology: Its Rise, Theological Tensions, and Reorientation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Timothy Padgett',
              affiliation: 'The Colson Center for Christian Worldview',
            },
            theme:
              'Is There Such a Thing As Judeo-Christianity: A Study with Schaeﬀer, Henry, and OsGuinness',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'New Hampshire',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Michael J. Stell',
          affiliation: 'Redeemer Classical Christian School',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Timothy Haupt',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'You Say You Want a Revolution?: John Bunyan, Isaac Backus, and the Theology of Revolution',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Casey G. McCall',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              '“For the Sake of Attaining a Greater Good”: Andrew Fuller’s Pastoral Approach to Politics ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Jonathan S. Marko',
              affiliation: 'Cornerstone University',
            },
            theme:
              'Jonathan Edwards’s Trinity in the Era of John Locke’s Reasonable Christianity',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Robert Caldwell',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'When Holy Angels Could Fall Away: Jonathan Edwards on Angelic Probation and Final Conﬁrmation',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon D',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Jamin Todd Eben',
              affiliation: 'Teaching Truth International',
            },
            theme: "Foxe's Book of Martyrs: Retrieving Reformation Martyrology",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'James Lehman',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              "A Holy and Wholly Christian Church: Ecclesiological Implications of Chrysostom's Exegesis",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Marvin Jones',
              affiliation: 'Montana Christian College',
            },
            theme:
              'Athanasius Use of ἐπίνοια as a Technical Term in His Work Contra Arianos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Stephen Goodall',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme: 'The Way to Sirmium: Silencing Marcellus',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Nantucket',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Stephen Reynolds',
          affiliation: 'Gateway Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Maine',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Barry V. Evans',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Richard Baxter’s “Middle Way” Soteriology: Innovations to Counter Confusion',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jared Beebe',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              "Divine Promises and Final Fulﬁllment: William Perkins's Covenantal Lens on Eschatology",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Christopher Green',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Classical Roots, Baptist Branches: The Philosophical Theology of John Gill',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Michael J Pereira',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Christ, the Prophet of the Church: John Owen on Sensus Literalis and Christ as Scopus Scripturae',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Zachary Hedges',
              affiliation: 'Cedarville University',
            },
            theme:
              "Faith Seeking Knowledge: Clement of Alexandria's 'Ruled' Intellectual Framework",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Thomas Holsteen',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme: 'Augustine and the Rest of God',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Noah Edmonson',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'The Enduring Distinction: Baptism and the Rejection of Apokatastasis in Gregory of Nazianzus',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Jonathan Morgan',
              affiliation: 'Indiana Wesleyan University',
            },
            theme: 'Athanasius and the Development of Post-Nicene Pneumatology',
          },
        ],
      },
      {
        shift: 'PM',
        dayOfWeek: 'Thursday',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Jesse F. Owens',
          affiliation: 'Welch Divinity School',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Massachusetts',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Joseph Garner III',
              affiliation: 'Hannibal-LaGrange University',
            },
            theme:
              'Holy Rest: Understanding the Sabbath in the Baptist Confessional Tradition',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jason G. Duesing',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              ' Clarity from Controversy: The Context & Content of the 1st English Baptist Confession Reexamined"',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Greg Wills',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The New Hampshire Confession: Old Calvinism, Edwardsean Calvinism, and Arminianism',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Jacob Trotter',
              affiliation: 'University of Aberdeen',
            },
            theme:
              'Confessing Distinctions: Beza’s Inﬂuence on the Trinitarian Language of the Belgic Confession',
          },
        ],
      },
    ],
  },
  {
    track: 'Creedal Christianity',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Kirk R. MacGregor',
          affiliation: 'McPherson College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Paul Hartog',
              affiliation: 'Faith Baptist Theological Seminary',
            },
            theme:
              'Also on the Agenda: The (Overlooked) Quartodeciman Challenge and the Council of Nicea',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Kevin W. Wong',
              affiliation: 'Dallas Theological Seminary',
            },
            theme: 'An Analytic Theological Defense of the Filioque',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Brian Wagers',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Critiquing Protestant Use of the Filioque in the Nicene Creed',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Richard A. Brumback III',
              affiliation: 'Freed-Hardeman University',
            },
            theme:
              'Regulating the “X from X” Language at the Heart of the Nicene Disputes',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom D',
        },
        moderator: {
          name: 'Luke S. Johnson',
          affiliation: 'New Orleans Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Steven M. Bryan',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'The Filial and Messianic Identity of the Logos Before the Incarnation in the Gospel of John',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Denny Burk',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Imprecision in the ESV’s Rendering of μονογενής: Retrieving the Nicene Interpretation of John',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Charles Lee Irons',
              affiliation: 'Santa Clarita United Reformed Church',
            },
            theme:
              'Μονογενής and the Scriptural Logic of Eternal Generation in the Nicene Creed',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Kamy Hanna',
              affiliation: 'University of Glasgow',
            },
            theme:
              'Jesus the Divine Judge: Rethinking the Inﬂuence of the Similitudes of Enoch',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon H',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Samad Hashmi',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'A Philosophical Critique of Tawhīd: How Nicene Trinitarianism Solves Perennial Muslim Conundrums',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Morgan Renew',
              affiliation: 'Redeemer Dubai / Gulf Theological Seminary',
            },
            theme:
              'Creeds and Co-Intelligence: A Theological Framework for the Use of AI in Christian Ministry',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Keith Graham',
              affiliation: 'CCCVaT Scholar in Residence',
            },
            theme:
              'I Believe in the Forgiveness of Sin: Practicing Forgiveness Individually and Communally',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'John Eger',
              affiliation: 'Columbia International University',
            },
            theme:
              'How Ad Hoc Immediacy in the Language of Christian Belief Requires Creedal Continuity',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Derek Cominskie',
          affiliation:
            'Southeastern Baptist Theological Seminary / Welch Divinity School',
        },
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom B',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Seung-Joo Lee',
              affiliation:
                'Presbyterian Theological College, Melbourne, Australia',
            },
            theme: "Meredith G. Kline's Revision of Nicene Trinitarianism",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Robert Herron',
              affiliation: 'Regent University',
            },
            theme:
              'Sabellianism, Trinity, Tritheism: Reﬂections on the Creeds from a Former Oneness Pentecostal',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Eric B Oldenburg',
              affiliation: 'Melbourne School of Theology',
            },
            theme:
              'On Keeping Nicaea Ecumenical: Questioning Certain Methods in IVP’s “On Classical Trinitarianism”',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Vern S. Poythress',
              affiliation: 'Westminster Theological Seminary',
            },
            theme:
              "Calvin's View of Autotheos and a Metaphysics Appropriate for the Trinity",
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Daniel Webster',
          affiliation: 'Welch College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Massachusetts',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Ryan Lytton',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Dishonored for Our Sake That We Might Be Honored: Athanasius & Atonement in “On the Incarnation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Zachary Howard',
              affiliation: 'Bethlehem College and Seminary',
            },
            theme:
              'Augustine’s Creedal Imagination: The Rule of Faith as Structure for a Spiritual Imaginary',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Stephanie L. Black',
              affiliation: 'Fuller Theological Seminary',
            },
            theme:
              'Ethiopian Christology and the Nicene Creed: 4th C Greek Inscriptional Evidence from King Ezana',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Paul Smith',
              affiliation: 'Grand Canyon Theological Seminary',
            },
            theme: 'The Nicene Hermeneutic of Ephrem the Syrian',
          },
        ],
      },
      {
        subtheme: 'Systematic Theology II',
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Yarmouth',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Clement Yung Wen',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Pannenberg and the Nicene-Constantinopolitan Creed of 381 for World Christianity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Isuwa Atsen',
              affiliation: 'Trinity Christian College',
            },
            theme:
              'Creedal Christianity in a Global Context: Why Nigeria Needs Nicaea',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Jacob Chengwei Feng',
              affiliation: 'Fuller Theological Seminary',
            },
            theme:
              'The Impact of the Nicene Creed on Chinese Christianity: Toward a Chinese Christology ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Timothy C. Tennent',
              affiliation: 'Beeson Divinity School',
            },
            theme: 'Creedal Christianity through Hindu Eyes',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Kevin L. Hester',
          affiliation: 'Welch College and Divinity School',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'E. Jerome Van Kuiken',
              affiliation: 'Oklahoma Wesleyan University',
            },
            theme:
              'The Inﬂuence of Pearson’s Exposition of the Creed on the Wesleys: An Analysis with Application',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Logan Prettyman',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme: 'Deiﬁcation through Imitation: Mimesis in the Vita Antonii',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Andrew P. Slay',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'With Arms Wide Open: How The Apostle’s Creed Helps Gen Z Embrace Historic Christianity ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Justin McLendon',
              affiliation: 'Grand Canyon University',
            },
            theme: 'Sursum Corda: The Nicene Creed in Worship and Formation',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Caleb Adams Lindgren',
          affiliation: 'Trinity Evangelical Divinity School',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Falmouth',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Chris Bolt',
              affiliation: 'Reformed Baptist Institute',
            },
            theme:
              'The Spirit Who Overshadows: Life, Holiness, and Incarnation in Nicene Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Binu C. Paul',
              affiliation: 'Kerala Baptist Bible College and Seminary',
            },
            theme:
              '“From the Father Through the Son”: Interpreting the Procession of the Holy Spirit in John 15:26',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'S. M. S. Cheng',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Holy Spirit Proceeds Ex Patre Filioque: A Biblical and Theological Reading of John 14-16',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Joshua Rairdan',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'An Argument Against Evangelicals Including the Filioque Clause When Reciting the Nicene Creed',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'David Casa',
          affiliation: 'Luther Rice College & Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Tufts',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Derek Cominskie',
              affiliation:
                'Southeastern Baptist Theological Seminary / Welch Divinity School',
            },
            theme:
              'Reformed-Arminian Catholike? Jacobus Arminius and the Ancient Church',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Ryan M. McGraw',
              affiliation: 'Greenville Presbyterian Theological Seminary',
            },
            theme:
              'John Calvin’s Mistake?: A Dogmatic Assessment of Calvin’s Revisions of Nicene Trinitarianism',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Eric Beach',
              affiliation: 'Trinity Baptist Church',
            },
            theme:
              'William Perkins, Creeds, and the Use of Church History in English Protestantism',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Mason Ballard',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Retrieving Catholicity: Engaging and Extending the Evangelical Baptist Project',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Tony Costa',
          affiliation: 'University of Toronto',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Chris Stevens',
              affiliation: 'RTS Jackson',
            },
            theme:
              'Are Creedal Christianity and Textual Criticism Friends or Foes?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Brent Joseph',
              affiliation: 'Regent University',
            },
            theme:
              'Protestant Hermeneutics: Creedal Formulations as Ecclesial Fideism',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Robert M. Bowman Jr.',
              affiliation: 'Institute for Religious Research',
            },
            theme:
              'From the Shema to the Homoousios: Jewish Roots and New Testament Origins of the Nicene Creed',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Todd R. Chipman',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'The Upper Room: A Peaceful Dwelling for Systematic and Biblical Theologians',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Frankie J. Melton, Jr.',
          affiliation: 'North Greenville University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Harvard',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Mark Bird',
            },
            theme:
              'The Jungmann Thesis: Were Early Public Prayers to Christ an (Over)Reaction to Arianism?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Joel Hergert',
              affiliation: 'Harvest Valley Church - Scottsbluﬀ, NE',
            },
            theme:
              'He Descended to the Dead: A Phrase All Christians Should Celebrate',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Pradeep Tilak',
              affiliation: 'Grand Canyon University',
            },
            theme:
              'Creedal Christianity in a Dark World: Nicene Creed as Foundation for Salt and Light Living',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Julius Kithinji',
            },
            theme: 'Maasai Creed: Cultural, Ecclesial and Theological Beneﬁts',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Jacob Chengwei Feng',
          affiliation: 'Fuller Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Massachusetts',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Ty Kieser',
              affiliation: 'Criswell College',
            },
            theme:
              'Hail Incarnate Deity: Christ as Subject and Object of Worship and Glory',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'J. Caleb Little',
              affiliation: 'Bloomﬁeld Christian School',
            },
            theme:
              'Christ as Physician and Cure: Gregory Nazianzen and the Salviﬁc Logic of Creedal Christology',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Thomas G. Doughty Jr.',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              "Retrieving an 'Orthodox' Work of Christ from the Creed of Nicaea",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Theodore Siu',
              affiliation: 'Beeson Divinity School',
            },
            theme:
              'The Spirit, the Son, and the Surprising Bond of Union Jonathan Edwards and the Hypostatic Union',
          },
        ],
      },
      {
        subtheme: 'Church History V',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Christian Cuthbert',
          affiliation: 'Gordon-ConwellTheological Seminar y',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Vermont',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'William Edgar',
              affiliation: 'Westminster Theological Seminary',
            },
            theme: 'G. K. Chesterton on the Creeds',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Zak Tharp',
              affiliation: 'Ridley College, Jonathan Edwards Center Australia',
            },
            theme:
              "'Setting Up of Christ's Kingdom': Edwards, the Niceno-Constantinopolitan Creed, and the Kingdom",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'John Banks',
              affiliation: 'Vrije Universiteit Amsterdam',
            },
            theme:
              'New England Creedal Faith in Transition: Tensions in the Meetinghouse during the Age of Reason',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Andrew J. Martin',
              affiliation: 'Covenant Theological Seminary',
            },
            theme:
              "Neither Anti-Creedalist nor Creedalizer: Francis J. Grimké's Black Christian Confessionalism",
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Ambrose Thomson',
          affiliation: 'McMaster Divinity College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Tufts',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Ellen Howard',
              affiliation: 'Ludwig Maximilian University of Munich',
            },
            theme:
              'Competing Narratives: Paul’s Implicit Narrative and the Nicene Debates surrounding 1 Cor 15:28 ',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Andrew C. Marquez',
              affiliation: 'Wayland Baptist University',
            },
            theme:
              'But God Is One: Proto-Trinitarian Assumptions in Gal. 3:15-4:7',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Lucas J. Whitson',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'A Nicene Lens for an Ephesian Problem: A Re-Examination of Οὐρανός in Ephesians',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Brian J. Wright',
              affiliation: 'Lancaster Bible College',
            },
            theme:
              "Ancient Literacy, Manuscripts, and AI: Who Could've Written or Read Creeds in the Early Church?",
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Justin Allison',
          affiliation: 'Ouachita Baptist University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon J',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'John Andrew McClean',
              affiliation: 'Christ College - Australian University of Theology',
            },
            theme:
              'Revelation in the Nicene Creed: Evangelical and Ecumenical Retrieval',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'John Wind',
              affiliation: 'Colorado Christian University',
            },
            theme:
              'Ephrem the Syrian’s Hymns: Lessons in Post-Nicene Political Theology from the Empire’s Edge',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Skyler R. Flowers',
              affiliation: 'University of Aberdeen',
            },
            theme:
              'Confession, Community, and Consciousness: Herman Bavinck and the Formulation of Dogma',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'C. Ryan Fields',
              affiliation: 'Faith Evangelical Free Church, Acton, MA',
            },
            theme:
              'Free to Confess: Taking Up the Nicene Creed in the Free Church Tradition',
          },
        ],
      },
    ],
  },
  {
    track: 'Early Christian Theology in Protestant Thought',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Caleb Adams Lindgren',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Heirs of the Apostles: Patristic Inﬂuence on Apostolicity during the Reformation',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'George C Evans Jr',
              affiliation: 'Stark College & Seminary',
            },
            theme:
              'The Spatial Christ: Episcopius’ Indirect Engagement with Divine Presence and Nicene Orthodoxy',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Jesse F. Owens',
              affiliation: 'Welch Divinity School',
            },
            theme:
              'Baptist and Creedal: Dispelling Common Myths About the English General Baptists',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Brannon Ellis',
              affiliation: 'Sola Media',
            },
            theme:
              'Not Just What to Believe, But How to Think: The Role of the Creed in Theological Reasoning',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon B',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:30 PM',
            speaker: {
              name: 'Lewis Ayres',
              isInvitedGuest: true,
              affiliation:
                'The Pontiﬁcal University of St. Thomas Aquinas, Angelicum',
            },
            theme: 'Nicaea After 1700 Years: Looking Back and Looking Forward',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:40 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Michael Haykin',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              "Text and Color in Gregory of Nyssa's Tract on Ousia and Hypostasis",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:20 PM',
            endTime: '2:50 PM',
            speaker: {
              name: 'David Luy',
              affiliation: 'North American Lutheran Seminary',
            },
            theme:
              'Divergent Receptions of Nicaea within the Modern Lutheran Theological Tradition',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'N. Gray Sutanto',
              isInvitedGuest: true,
              affiliation: 'Reformed Theological Seminary - Washington, D.C.',
            },
            theme:
              'Herman Bavinck on Retrieval and Development: Nicaea as a Test-Case',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:40 PM',
            endTime: '4:10 PM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Provincetown',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: "Engaging Duane Garrett's Understanding Jeremiah",
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'J. Michael Thigpen',
          affiliation: 'Phoenix Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:05 PM',
            speaker: {
              name: 'J. Michael Thigpen',
              affiliation: 'Phoenix Seminary',
            },
            theme: 'Introduction',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:05 PM',
            endTime: '3:35 PM',
            speaker: {
              name: 'Mark J. Boda',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'The Historical Setting of Jeremiah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:40 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Gary E. Yates',
              affiliation: 'Liberty University',
            },
            theme: 'The Composition and Structure of Jeremiah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:15 PM',
            endTime: '4:45 PM',
            speaker: {
              name: 'J. Michael Thigpen',
              affiliation: 'Phoenix Seminary',
            },
            theme: 'The Message of Jeremiah',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:50 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Duane A. Garrett',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:20 PM',
            endTime: '6:10 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Suﬀolk',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Ethics',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Timothy A. Stratton',
          affiliation: 'Free Thinking Ministries',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Adam Lloyd Johnson',
              affiliation: 'Convincing Proof Ministries',
            },
            theme:
              "First Good Argument: Wielenberg's Claim that Theistic Moral Theories Include Ungrounded Truths",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Chris D. Lee',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'An Aristotelian Organicist Account of the Intersex Condition',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Paul Rezkalla',
              affiliation: 'United States Air Force Academy',
            },
            theme: 'There Are No Masculine or Feminine Virtues',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Massachusetts',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Paul M. Gould',
          affiliation: 'Palm Beach Atlantic University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Kevin Diller',
              affiliation: 'Taylor University',
            },
            theme: 'Non-Penal Retributive Justice',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Frederick Choo',
              affiliation: 'Rutgers University',
            },
            theme:
              'Does Divine Command Theory Exempt Psychopaths from Morality?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Chris Firestone',
              affiliation: 'Champion Christian College',
            },
            theme: 'Rational Religious Love',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Commonwealth',
        },
      },
    ],
  },
  {
    track:
      'Evaluating New Objections to the Mytho-Historical Adam and Genealogical Adam and Eve Theories',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Angus Menuge',
          affiliation: 'Concordia University Wisconsin',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Angus Menuge',
              affiliation: 'Concordia University Wisconsin',
            },
            theme:
              'Theoretical Virtues, Models for Science and Religion engagement, and Human Origins',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:40 PM',
            endTime: '2:05 PM',
            speaker: {
              name: 'Michael N. Keas',
              affiliation: 'Biola University',
            },
            theme:
              'New Objections to the Mytho-Historical Adam and Genealogical Adam and Eve Theories',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:05 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'William Lane Craig',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              'The Mytho-Historical Adam and Eve View (Compared to the Views of Keas and Loke) ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:30 PM',
            endTime: '2:55 PM',
            speaker: {
              name: 'Andrew Ter Ern Loke',
              affiliation: 'Hong Kong Baptist University',
            },
            theme:
              'The Genealogical Adam and Eve View (Compared to the Views of Keas and Craig)',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:55 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'C. John (“Jack”) Collins',
              affiliation: 'Covenant Theological Seminary',
            },
            theme:
              'How to Evaluate the Mytho-Historical and Genealogical Adam and Eve Views as Exegetical Hypotheses',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:20 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Andrew Ter Ern Loke',
              affiliation: 'Hong Kong Baptist University',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:30 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'William Lane Craig',
              affiliation: 'Talbot School of Theology',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:40 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Michael N. Keas',
              affiliation: 'Biola University',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:50 PM',
            endTime: '4:40 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Commonwealth',
        },
      },
    ],
  },
  {
    track: 'Evangelicalism in the Long Eighteenth Century',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Stephen Reynolds',
              affiliation: 'Gateway Seminary',
            },
            theme: 'C. H. Spurgeon, Eternal Generation, & Nicene Christology',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Britt Stokes',
              affiliation: 'Propago Ministries',
            },
            theme:
              'A Conveyor of Faithful Doctrine: Charles Wesley’s Trinitarian Hymnody',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'David Lytle',
              affiliation: 'Gateway Seminary',
            },
            theme: 'Dan Taylor and the Nicene Tradition',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'David Busch',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'When I Survey the Trinitarian Crossroads: Isaac Watts Between Tradition and Exploration',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Evangelicals and Women',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'Early Church Women Leaders',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Carina Prestes',
              affiliation: 'Adventist University of São Paulo, Brasil',
            },
            theme:
              'Excavating Women: The Archaeology of Leaders in Early Christianity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Aida Besancon Spencer',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme: 'Women Elders at Crete',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Lynn Cohick',
              affiliation: 'Houston Theological Seminary',
            },
            theme: 'Women Deacons and the Council of Nicaea',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'John Herbst',
              affiliation: 'Virginia Peninsula Baptist Association',
            },
            theme: 'Jesus Reframes daikon: Acts 6 & Luke 22:26',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom A',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'David E. Malick',
              affiliation: 'Fullness Christian Fellowship',
            },
            theme:
              'Characterization of Herodias, Her Daughter, and Herod in Mark 6: A Literary and Gender Analysis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Angel Turbeville',
              affiliation: 'Palm Beach Atlantic University',
            },
            theme:
              'A Hermeneutic of Agency: Reimagining Women’s Leadership in Complementarian Church Contexts',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Jennifer Brown Jones',
              affiliation: 'Liberty University',
            },
            theme:
              'The Emperor’s New Clothes? Reading 1 Timothy 2 with the Grain of Genesis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Joseph Greene',
              affiliation: 'Second Baptist Church, South Hadley MA',
            },
            theme:
              'Prohibiting Women in Authority Roles and Parallels with Food Prohibitions',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon B',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Evangelicals in the Public Square',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Darrell Bock',
          affiliation: 'Dallas Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'Darrell Bock',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'Escaping the Polarization of the Cul de Sac: Is It Possible?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:00 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Galen Carey',
              affiliation: 'National Association of Evangelicals',
            },
            theme: 'What Are Our Christian and Political Responsibilities?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:40 PM',
            endTime: '3:10 PM',
            speaker: {
              name: 'Don Smedley',
              affiliation: 'Rivendell Institute',
            },
            theme:
              'Role of Conﬂict in Evangelical Political Engagement: Reconciling Neighbor Love and Justice',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Eric Patterson',
              affiliation: 'Regent University',
            },
            theme: 'Theological Reﬂections on Four Dimensions of Politics',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:40 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'John Hartley',
              affiliation: 'Rivendell Institute',
            },
            theme:
              'Transforming Conﬂict: Redemptive Opportunity and the Intersection of the Political & Christian',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:20 PM',
            endTime: '4:40 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Simmons',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Free Will and Related Issues',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Elijah Hess',
          affiliation: 'St. Louis Community College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Elisabeth Anne Dawson',
              affiliation: 'Biola University',
            },
            theme: 'Dyothelitism and Libertarian Free Will',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Matthew Flummer',
              affiliation: 'Porterville College',
            },
            theme: 'A Dozen (or so) Arguments for Free Will',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Ben Whittington',
              affiliation: 'Anderson University',
            },
            theme:
              'Electing the Means: A Corporate and Open Theistic Perspective on Divine Election',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Andrew Jennings',
              affiliation: 'Southwest Baptist Theological Seminary',
            },
            theme: 'Free Choice with Modal Collapse',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'MIT',
        },
      },
    ],
  },
  {
    track: 'General Epistles',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Timothy Miller',
          affiliation: 'Shepherds Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Paul Himes',
              affiliation: 'Baptist College of Ministry',
            },
            theme:
              "The Rock, the Cornerstone, and the Empowering Spirit: Tracing Peter's Pneumatology",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Herb Bateman',
              affiliation: 'Independent Scholar',
            },
            theme:
              'Is a Systematic Theological Understanding about the Holy Spirit imposed on Hebrews?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Adam Harwood',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'The Relation of the Unpardonable Sin of the Gospels and Hebrews 6',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Dana Harris',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme: 'Glory and the Spirit: Pneumatology in Revelation',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Gospel of Matthew',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Patrick Schreiner',
          affiliation: 'Midwestern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Caleb Friedeman',
              affiliation: 'Ohio Christian University',
            },
            theme:
              'Introducing Gospel Birth Narratives and Historiography: Reopening a Closed Case',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Lucas Moncada III',
              affiliation: 'First Baptist Church of Logan',
            },
            theme:
              "Christian Myth or Plausible Prediction: Single Fulﬁllment and Matthew's Use of Isaiah 7:14",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Charles Quarles',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              "Robert Gundry's Application of Midrash Criticism to the Matthean Birth Narrative",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Suﬀolk',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Greco-Roman Backgrounds',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Joseph Dodson',
          affiliation: 'Denver Seminary',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'James Harrison',
              affiliation: 'Australian University College of Divinity',
            },
            theme: 'Ephesian Epigraphy and the Exegesis of Ephesians',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Sandra Glahn',
              affiliation: 'Dallas Theological Seminary',
            },
            theme: 'Artemis in the City of Ephesus',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Lynn Cohick',
              affiliation: 'Houston Theological Seminary',
            },
            theme:
              'The Council of Ephesus: Theotokos and the Unity of the Church ',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Gary G. Hoag',
              affiliation: 'Kairos',
            },
            theme: 'Wealth and Worship in Ephesus',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Regis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Hebrew Language',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Chip Hardy',
          affiliation: 'Beeson Divinity School, Samford University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Larry Kraskevich',
              affiliation: 'University of Toronto',
            },
            theme:
              'New Translation Pathways for יכ: Aligning Biblical Hebrew יכ with Living Languages ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Linda Liu & Brian L. Webster',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'Time Reference in Substantival Participles as Reﬂected in Multi-step Descriptions',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Kaspars Ozolins',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Building Reading Fluency from the Start: A Program for Beginning Hebrew Students',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Cooper Smith',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Behold! The Focus Particle as an Indicator of Literary Dependence',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'New Hampshire',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Miles Van Pelt',
          affiliation: 'Reformed Theological Seminary, Jackson',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'JoAnna Hoyt',
              affiliation: 'Dallas International University',
            },
            theme:
              'Improving Hebrew Proﬁciency and Pedagogy: One Change at a Time',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Catherine McDowell',
              isInvitedGuest: true,
              affiliation: 'Palm Beach Atlantic University',
            },
            theme:
              'Assessing Year One Hebrew Language Proﬁciency: Strategies, Challenges & Student Outcomes at PBA',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Phillip Marshall',
              affiliation: 'Houston Christian University',
            },
            theme:
              'The Indispensability of Making Classroom Time Indispensable',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Jennifer Noonan',
              affiliation: 'Columbia International University',
            },
            theme:
              'Strategies for Cultivating Motivation, Accountability & Proﬁciency in First-Year Hebrew',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon I',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Hermeneutics',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'W. Edward Glenny',
          affiliation: 'University of Northwestern St. Paul',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Kendra Bailey',
              affiliation: 'Wheaton College',
            },
            theme: 'Aﬀect Theory & Scripture: Toward an Embodied Hermeneutic',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Thomas J. Sculthorpe',
              affiliation: 'Kenwood Institute',
            },
            theme:
              'Mimetic Christian Hermeneutics: A Once-for-all Rejection of the Fourfold Sense',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Steve Sherman',
              affiliation: 'Grand Canyon University',
            },
            theme: 'Creedal Christianity Hermeneutics: From Nicaea to Now',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Ray Umphrey',
              affiliation: 'University of the Cumberlands',
            },
            theme:
              'Can AI Detect Intertextuality? Evaluating the Use of Large Language Models in Biblical Studies',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Suﬀolk',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Brandon D. Smith',
          affiliation: 'Oklahoma Baptist University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:00 AM',
            speaker: {
              name: 'Ardel Caneday',
              affiliation: 'University of Northwestern St. Paul',
            },
            theme:
              'Mystery and Fulﬁllment: The Historical-Allegorical Nature of Scripture’s Storyline',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:10 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Brian Vickers',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Senses and Sensibility: Protestants and the Four Fold Sense',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:50 AM',
            endTime: '10:20 AM',
            speaker: {
              name: 'Patrick Schreiner',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Recovering a Medieval Mind: The Philosophy of Language Behind the Fourfold Sense',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:30 AM',
            endTime: '11:00 AM',
            speaker: {
              name: 'Craig Carter',
              affiliation: 'Tyndale University',
            },
            theme:
              'Thomas Aquinas and the Role of Speculative Reason in Exegesis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:10 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom B',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'History and Theology of Preaching',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Dwayne Milioni',
          affiliation: 'Southeastern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Geoﬀrey Chang',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              '“A Clear and Distinct Declaration of our Principles”: C. H. Spurgeon’s Use of Confessions',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Chancellor Stillwell',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Chrysostom as Creedal Expositor: Preaching Trinitarianism from the Gospel of John',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Walt Nilsson',
              affiliation: 'Cornerstone Presbyterian Church',
            },
            theme:
              'How did Nicene tTrinitarian Theology Help Augustine Preach Christ-Centered Sermons',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Regis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'History for the Church',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Thomas Kidd & John Wilsey',
          affiliation:
            'Midwestern Baptist Theological Seminary & The Southern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Timothy Hall',
              affiliation: 'Samford University',
            },
            theme:
              'Contrasting Experiences in Samson Occom’s and Nathaniel Whitaker’s English Charity Tour, 1766-1768',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Thomas Whittaker',
              affiliation: 'LeTourneau University',
            },
            theme:
              'Evangelical Conversion and the Dilemma of the Quakers among the Allegany Senecas, 1815-30',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Stephen Presley',
              affiliation: 'Center for Religion, Culture, and Democracy',
            },
            theme: 'History and Theology at Nicaea',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'John Wilsey',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Religious Freedom: Traditionally Conservative or Classically Liberal?',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Tufts',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Johannine Literature',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Mark Kelley',
          affiliation: 'Compass Bible Institute',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Alan E. Kurschner & Stanley E. Porter',
              affiliation: 'Independent Scholar & McMaster Divinity College',
            },
            theme:
              'The History and Current Status of Greek Linguistics and the Book of Revelation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Donald Westblade',
              affiliation: 'Hillsdale College',
            },
            theme: 'Paired Pericopes in Parallel Halves of the Fourth Gospel',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Joshua Coutts',
              affiliation: 'Providence Theological Seminary',
            },
            theme:
              'Apprehending Jesus: Embodiment and the Problem of Jesus’ Absence in John’s Gospel',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'James A. Roh',
              affiliation: 'McLean Bible Church',
            },
            theme: 'Seeing Him as He Is: 1 John 3:2 and the Beatiﬁc Vision',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon D',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Jim Hamilton',
          affiliation: 'The Southern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Catrin H. Williams',
              isInvitedGuest: true,
              affiliation: 'University of Wales Trinity Saint David',
            },
            theme:
              'John’s Reception of Israel’s Scriptures: Some Recent Trends and New Directions',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Ardel Caneday',
              affiliation: 'University of Northwestern-St. Paul',
            },
            theme:
              'Jesus Prosecuted by Religious Zealots: Use of Psalm 69 in John’s Gospel',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Steven M. Bryan',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'The House of a Trader: Enacted Fulﬁllment and Early Christian Idol Polemic in John 2',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Brandon Crowe',
              affiliation: 'Westminster Theological Seminary',
            },
            theme: 'Reading John 6 in Light of the Exodus',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Provincetown',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Latino/a Biblical and Theological Reﬂection Unit',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Alvin Padilla',
          isInvitedGuest: true,
          affiliation: 'Gordon-Conwell Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:20 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Michelle Navarrete',
              affiliation: 'Emory University',
            },
            theme: 'En esto creemos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Octavio Esqueda',
              affiliation: 'Talbot School of Theology',
            },
            theme: 'En esto creemos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:10 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Nancy Reyes Frazier',
              affiliation: 'Dallas Theological Seminary',
            },
            theme: 'En esto creemos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:00 PM',
            speaker: {
              name: 'Juan Sanchez',
              affiliation: 'Grace School of Theology',
            },
            theme: 'En esto creemos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:00 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Daniel Montañez',
              affiliation: 'Boston University',
            },
            theme: 'En esto creemos',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Tremont',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Luke-Acts',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Aaron W. White',
          affiliation: 'First Presbyterian Church, South Charleston, Ohio',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Dottie Rhoads',
              affiliation: 'Liberty University',
            },
            theme: 'Luke 1-2: Jesus’ Birth and the Undoing of Israel’s Exile',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Aaron Jung',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'The Core Message of Speeches in Acts',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Samuel Hitchcock',
              affiliation: 'Trinity College, Bristol',
            },
            theme:
              "From Fulﬁllment to Frustration: Making Sense of Jesus' Response to the Crowd in Luke 4:16-30",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Sung Min Park',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Shaping Christian Identity in Acts 1-6: An Indexical Cycle Analysis of the Jerusalem Church',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Tremont',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Lutheran Studies',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Nathan Olson',
          affiliation: 'Free Lutheran Bible College and Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:30 AM',
            speaker: {
              name: 'Joel Elowsky',
              affiliation: 'Concordia Seminary St. Louis',
            },
            theme: 'Nicaea to Luther',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:40 AM',
            endTime: '10:10 AM',
            speaker: {
              name: 'Brian Vickers',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              '“Everything a Christian Needs to Know”: Luther’s Theology in the Shorter Catechism',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:20 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Jason Gudim',
              affiliation: 'Free Lutheran Bible College & Seminary',
            },
            theme: 'Lutheran Catechesis and the Christian Life',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:00 AM',
            endTime: '11:30 AM',
            speaker: {
              name: 'Phillip Hooper',
              isInvitedGuest: true,
              affiliation: 'Georg Sverdrup Society',
            },
            theme:
              'Why a Minimal Confession Applied is Better than a Maximal Confession Ignored',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:40 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Steve Mundfrom',
              affiliation: 'Free Lutheran Bible College & Seminary',
            },
            theme: 'The Creed - The Confession of the Local Congregation',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Wellesley',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Metaphysics Broadly Construed',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Travis Dickinson',
          affiliation: 'Dallas Baptist University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'James S. Spiegel',
              affiliation:
                'Kalos Center for Christian Education and Spiritual Formation',
            },
            theme:
              'Life Before Conception: A Case for Premortal Existence of the Soul',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Alex Oakley',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme: 'Hylomorphism’s Problem of Individuation',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Tyler Bauer',
              affiliation: 'Palm Beach Atlantic University/ Christ College',
            },
            theme:
              'Are Transhumanists Actually Dualists? Patternism’s Ghost in the Machine',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Joshua Lee Harris',
            },
            theme: 'Scotus was an Ontological Pluralist, Too',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Yarmouth',
        },
      },
    ],
  },
  {
    track: 'Method in Systematic Theology',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Shoa Kai Tseng',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Aaron Batdorf',
              affiliation: 'Big Woods Bible Church',
            },
            theme: 'Soul Competency & E.Y. Mullins',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Jeﬀ M. Liou',
              affiliation: 'InterVarsity Christian Fellowship',
            },
            theme:
              'A Three Dimensional Theological Method for Ministerial Formation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Andrew Knox Brown',
              affiliation: 'SBTS',
            },
            theme:
              'Christian Platonism or Christian Panentheism? A Critique of Hans Boersma’s Sacramental Ontology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Nate Claiborne',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              "They're Only Chasing Safety: Experience, Emotion, and the Quest for Certainty in Modern Theology",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Regis',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Kurt Anders Richardson',
          affiliation: 'Institute for Abrahamic Relations',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:25 PM',
            speaker: {
              name: 'Michael Licona',
              affiliation: 'Houston Christian University',
            },
            theme:
              'When 30 Puzzle Pieces Must Do: Reﬂections on Dale Allison’s Resurrection Study',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:30 PM',
            endTime: '1:55 PM',
            speaker: {
              name: 'Andrew Ter Ern Loke',
              affiliation: 'Hong Kong Baptist University',
            },
            theme:
              "An Evaluation of Allison's Discussion of the Alternative Naturalistic Hypotheses to Jesus' Resurrection",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:00 PM',
            endTime: '2:25 PM',
            speaker: {
              name: 'Gary Habermas',
              affiliation: 'Liberty University',
            },
            theme:
              'The Incomparable Biblical Accounts of the Resurrection Of Christ',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:30 PM',
            endTime: '2:55 PM',
            speaker: {
              name: 'Jordan Wessling',
              affiliation: 'Lindsey Wilson University',
            },
            theme: "Prior Probabilities and Jesus' Resurrection",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:00 PM',
            endTime: '3:25 PM',
            speaker: {
              name: 'Dale Allison',
              isInvitedGuest: true,
              affiliation: 'Princeton Theological Seminary',
            },
            theme:
              'What I Thought I Was Doing: The Resurrection and Comparativism',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Models of God Study Group',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Dennis Jowers',
          affiliation: 'Faith International University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Craig Hefner',
              isInvitedGuest: true,
              affiliation: 'Covenant School of West Virginia',
            },
            theme: 'Søren Kierkegaard on Divine Immutability',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'David Rathel',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'Divine Immutability, Classical Trinitarianism, and the Pactum Salutis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Cory Brock',
              isInvitedGuest: true,
              affiliation: 'St. Columba’s Free Church of Scotland',
            },
            theme: 'A Neo-Calvinist Theology of Divine Presence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Thomas McCall',
              affiliation: 'Asbury Theological Seminary',
            },
            theme:
              'The Doctrine of Divine Immutability in Wesleyan Theological Perspective',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon I',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Nature of God',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Kegan Shaw',
          affiliation: 'Anderson University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Mike Woundy',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Thou Shalt Bear True Witness: Divine Simplicity and Disappearing Truthbearers',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Ryan Peterson',
              affiliation: 'Talbot School of Theology, Biola University',
            },
            theme: 'One Person, Two Ways of Being',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'P. Roger Turner',
              affiliation: 'Walters State Community College',
            },
            theme: 'Omniscience as Power',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'R. Scott Smith',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              "Craig’s Anti-Platonism and Implications for God's Nature and Existence",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'MIT',
        },
      },
    ],
  },
  {
    track: 'Near East Archaeological Society',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Gary D. Urie',
          affiliation: 'Veritas International University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Mark A. Hassler',
              affiliation: 'Independent Researcher',
            },
            theme: 'Exegeting Proverbs: Insights from Archaeology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Frankie Snyder',
              affiliation: 'Independent Researcher',
            },
            theme: 'Gammadia: From Jewish Shawls to Byzantine Mosaics',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Chet Roden',
              affiliation: 'Liberty University',
            },
            theme:
              'Constantine, Helena, and Creed: Factors Driving Early Byzantine Pilgrimage and Sacred Construction',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Douglas Petrovich',
              affiliation: 'Brookes Bible College',
            },
            theme: 'Dating the Construction of David’s Dynastic Palace',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Boylston',
        },
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Gary D. Urie',
          affiliation: 'Veritas International University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Jordan McClinton',
              affiliation: 'Veritas International University',
            },
            theme: 'Shiloh Season 7 Update',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Seth Rodriquez',
              affiliation: 'Colorado Christian University',
            },
            theme: 'Ashdod: Past Excavations, Future Prospects',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Richard Lanser',
              affiliation: 'Associates for Biblical Research',
            },
            theme:
              'The First Regnal Year of Tiberius as Indicated on Roman Coins',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'John Wineland',
              affiliation: 'Liberty University',
            },
            theme:
              '(KRP) in Central Jordan: New Insights from the Final Publication Phase',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Boylston',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Gary D. Urie',
          affiliation: 'Veritas International University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Ralph K. Hawkins',
              affiliation: 'Averett University',
            },
            theme:
              'Khirbet el-Mastarah and other Enclosure Sites in the Jordan Valley',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'David Ben-Shlomo',
              affiliation: 'Ariel University',
            },
            theme:
              'The Fortiﬁed Biblical Site of Aujah el-Foqa in the Jordan Valley',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'David Ben-Shlomo',
              affiliation: 'Ariel University',
            },
            theme:
              'Biblical Hebron: Archaeological Remains from the First and Second Temple Periods',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Robert Smith',
              affiliation: 'Mid-Atlantic Christian University',
            },
            theme:
              'The Nicene Creed and Special Baptismal Facilities in the Pilgrimage Structures of Abila and Gerasa During Late Antiquity',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Boylston',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Gary D. Urie',
          affiliation: 'Veritas International University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Scott Stripling',
              affiliation: 'The Bible Seminary',
            },
            theme:
              'Roman Cruciﬁxion: An Archaeological Perspective and its Implications for the Execution of Jesus of Nazareth',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Jonathan Moore',
              affiliation: 'Freed-Hardeman University',
            },
            theme:
              'The Medical Realities of Cruciﬁxion: Insights from Archaeology and Ancient Evidence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Gary D. Urie',
              affiliation: 'Veritas International University',
            },
            theme: 'A Seal Impression from Shiloh',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Mark Criss',
              affiliation: 'Independent Researcher',
            },
            theme:
              'A Biblical & Historical Investigation Into The Lost Tribe of the Perizzites ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Boylston',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Gary D. Urie',
          affiliation: 'Veritas International University',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Steve Rudd',
              affiliation: 'Naioth Bible College',
            },
            theme: 'Archaeology of Daniel',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Ryan Wood',
              affiliation: 'The Bible Seminary',
            },
            theme: 'What Architecture Says about Shiloh’s Monumental Building ',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'James L. Barber',
              affiliation: 'Veritas International University',
            },
            theme:
              'Laminar Core Technologies: The Prismatic and Canaanean Flint Blade Assemblage of Tall el-Hammam, Jordan',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Jerry Boyce',
              affiliation: 'Trinity Southwest University',
            },
            theme: "Shiloh's Jar- Three Handles and Three Hypotheses",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Boylston',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'New Testament',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Chris S. Stevens',
          affiliation: 'RTS Jackson',
        },

        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Harvard',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Jared August',
              affiliation: 'Word of Life Bible Institute NY',
            },
            theme:
              'Is It Written to Fulﬁll? A Comparative Analysis of New Testament Passages Using πληρόω',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Bill Warren',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme: 'Introducing the Greek New Testament by Biblica',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Daniel Stevens',
              affiliation:
                'Boyce College, The Southern Baptist Theological Seminary',
            },
            theme:
              'Literature for Literati: An Assessment of Recent Literary Claims Regarding the Gospels',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Greg Stiekes',
              affiliation: 'Bob Jones University Seminary',
            },
            theme: "The Uninterpreted Parable in Jesus's Preaching",
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        subtheme: 'General Studies II',
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Eric Turner',
          affiliation: 'Hannibal-LaGrange University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Provincetown',
        },

        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'W. Edward Glenny',
              affiliation: 'University of Northwestern - St Paul',
            },
            theme: 'Salvation in 1 Peter: A Study in Biblical Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Joseph Dodson',
              affiliation: 'Denver Seminary',
            },
            theme:
              'Unsolved Mysteries and Burdensome Superstitions: Seneca’s Epistle 95 and the Colossian ‘Heresy’ ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Paul Lamicela',
              affiliation: 'Independent Scholar',
            },
            theme:
              'Matthew Bates’s Deﬁnition of the Gospel: the Galatian Opponents as a Test Case',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Mark Taylor',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme: 'The Neglected Theme of Humility in the Letter of James',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Charles Savelle',
          affiliation: 'Dallas Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Andrew Jennings',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Athens Meets Jerusalem: Melchizedek and a Biblical Model for Philosophical Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Jihyung Kim',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              "Why the Tabernacle, Not the Temple? Hebrews' Strategic Use of Wilderness Memory",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Michael Cha',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              "Hebrews 7-10 and Ezekiel's Temple: An Originalist Exposition",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'James N. Beevers',
              affiliation: 'Westminster Theological Seminary',
            },
            theme:
              'The Root of Apostasy: Hebrews 12 and the Reception of Deuteronomy 29:18-19',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Matthew Burford',
          affiliation: 'Samford University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon B',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Clinton E. Arnold',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              'Raging in Opposition to the Mission: The “Fall” of Satan in Luke 10:18 ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Charel du Toit',
              affiliation:
                'University of Pretoria & Vrije Universiteit Amsterdam',
            },
            theme:
              'Unhiding Women in Luke’s Parables: Imagination, Context, and Social Justice',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Aminta Arrington',
              affiliation: 'John Brown University/University of Otago',
            },
            theme:
              'Was Martha “Distracted”?: A Philological Reexamination of Luke 10:38-42',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Michael Blythe',
              affiliation: 'Nations University',
            },
            theme:
              'Judas, Betrayal, and Land: Greed and Socio-Economic Tensions among the Ruling Elite in Luke-Acts',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Robert Singer',
          affiliation: 'Church Venture Northwest',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Chris Trousdale',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Matthew’s Eunuch’s: A Response to “Trans” Interpretations of Matthew 19:12',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Lauren Lockhart-Collins',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Matthew 9:18-26: The Nature of the Kingdom as Displayed Through Two Suﬀering Women',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Mikel Del Rosario',
              affiliation: 'Moody Bible Institute',
            },
            theme:
              'Did Jesus Really Say He Was God? Understanding His Claims to Authority in Mark 14:53-65',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Jeremy D. Otten',
              affiliation: 'ETF Leuven',
            },
            theme:
              'Divorce, Wealth, and the Kingdom of God (Mark 10:1-31): Broadening the Markan Sandwich',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Nantucket',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Andres D. Vera',
          affiliation: 'California Baptist University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Orleans',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Zachary Cole',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'Kept Pure in All Ages: New Testament Textual Criticism in the Writings of Westminster Divines',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Peter Gurry',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme: 'The Place for Textual Criticism in a Systematic Theology',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Miranda Renfro',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Ḥesed and Halakhah: Jesus’ Correction of the Pharisaic Understanding of Ḥesed in Matthew 9:9-13',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Eric Turner',
              affiliation: 'Hannibal-LaGrange University',
            },
            theme:
              'The Power of Christ Compels Them: Jesus’ Authority over Demons in its Second Temple Context',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Ross D. Harmon',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Vermont',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Jeremy Greer',
              affiliation: 'Ouachita Baptist University',
            },
            theme:
              'Beyond a Herald: John the Baptist as Narrative Forerunner of the Messiah in Matthew',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Ben Browning',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'They Feared the Crowd: The Matthean Mob in Its Roman Context',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Bruce Henning',
              affiliation: 'Cornerstone Theological Seminary',
            },
            theme:
              "Buy the Treasure Then Give It Away (13:44-52): The Apostles’ Proclamation of Jesus' Mysteries",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Carrie Wood',
              affiliation: 'Regent University',
            },
            theme:
              'The Toponymic Sea of Galilee in Matthew and the Apocalyptic Man from the Sea in 4 Ezra',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Justus A. Freeman',
          affiliation: 'Bridges Christian College & Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Brandeis',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Cory M. Marsh',
              affiliation: 'Southern California Seminary',
            },
            theme:
              "Spit and Sight: Messianic Humiliation and Irony in John's Account of Blindness",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jerome D. David',
              affiliation: 'Columbia International University/Westminster',
            },
            theme:
              'The Resurrection of Christ and the Dawn of New Creation: The Use of Genesis 2:7 in John 20:22',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Susan Hunt',
              affiliation: 'Wheaton College',
            },
            theme:
              'The Divine Right of Rome and the Cruciform Kingdom: The Aeneid and John’s Passion in Dialogue',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Caleb Burkhart',
              affiliation: 'Westminster Theological Seminary',
            },
            theme: 'A Theology of History in the Fourth Gospel',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'David I. Yoon',
          affiliation: 'McMaster Divinity College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Simmons',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Cory Thompson',
              affiliation: 'Randall University',
            },
            theme:
              'The One-Flesh Union and Pastoral Qualiﬁcations: Reassessing Husband of One Wife',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'David H. Warren',
              affiliation: 'Retired Professor, Brevard, N.C.',
            },
            theme: 'The Mystery of Ὁμείρομαι (1 Thess 2:8)',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Mark Stephens',
              affiliation: 'Sydney Missionary and Bible College',
            },
            theme:
              'Stomachs, Satisfaction and Marital Obligation: Moral Identity and Moral Agency in 1 Cor 6:12-7:9',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'R. Thomas Smyly',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Dead in Sin While Living According to Nature: Ephesians 2:3 and the Stoic Ethical Ideal',
          },
        ],
      },
    ],
  },
  {
    track: 'New Testament Canon, Textual Criticism & Apocryphal Literature',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Stanley E. Porter',
          affiliation: 'McMaster Divinity College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Mark Strauss',
              affiliation: 'Bethel University',
            },
            theme: 'The Christology of the Gospel of Judas',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Benjamin P. Laird',
              affiliation: 'Liberty University',
            },
            theme: 'The Christology of the Jewish Gospels',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Stanley E. Porter',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'The Christology of the Gospel of Nicodemus/Acts of Pilate',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '9:10 AM',
        moderator: {
          name: 'Stanley E. Por ter',
          affiliation: 'McMaster Divinity College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Nicholas Perrin',
              affiliation: 'Gordon-Conwell Theology Seminary',
            },
            theme: 'The Christology of the Gnostic Gospels',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Benjamin P. Laird',
          affiliation: 'Liberty University',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Alan Bunning',
              affiliation: 'Center for New Testament Restoration',
            },
            theme: 'Advantages of Scientiﬁc Textual Criticism',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jeyoon Park',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'Romans 8:28 Revisited: Textual Criticism',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Matthew LaMaster',
              affiliation: 'New England Bible College and Seminary',
            },
            theme:
              'The Gospels We Have, Missionary Ideology and Gospel Canonization',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Sung Min Park & Tomas Bokedal',
              affiliation:
                'Summit Paciﬁc College & NLA University College and Lund University',
            },
            theme:
              'Notions of ‘Canon’ and the Early New Testament Canon Formation: Extrinsic and Intrinsic Aspects',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Boston University',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'New Testament Christology',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Brandon Crowe',
          affiliation: 'Westminster Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Brandon Crowe',
              affiliation: 'Westminster Theological Seminary',
            },
            theme:
              'The Unity of the Gospels and the Unity of Christ: Methodological Reﬂections',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Murray Smith',
              affiliation: 'Christ College, Sydney',
            },
            theme:
              'Jesus’s Own Christology: A Chalcedonian Proposal in Conversation with Recent Jesus Research',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Bobby Jamieson',
              affiliation: 'Trinity Baptist Church',
            },
            theme:
              "Seeing Is Being: Sight's Reduction to Eternal Generation in the Gospel of John",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Stephen Wellum',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Spirit Christology and the Divine Works of the Incarnate Son in the Gospels',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon B',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'New Testament Greek Language and Exegesis',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'Sociolinguistics and New Testament Interpretation',
        moderator: {
          name: 'David Mathewson',
          affiliation: 'Denver Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Stanley E. Porter',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Sociolinguistics and the New Testament: Where from, What, and Where to?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Jim Dvorak',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'A Sociolinguistic Perspective on Paul’s Use of the Language of Imitation',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Jonathan Watt',
              affiliation: 'Geneva College',
            },
            theme:
              'Implications of Contact Linguistics for New Testament Discourse',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Sung Min Park',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Sociolinguistic Approaches to the Corinthian Epistles: Language Style and Linguistic Ideology',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Vineyard',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Stanley E. Porter',
          affiliation: 'McMaster Divinity College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Adam Wiggins',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'God, Christ, and the Many Sons: A Linguistic Analysis of Sonship in Hebrews 2 and 12',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Namhyo Kim',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Revisiting the Kingdom and Priests in Revelation: A Grammatical-Metaphorical Analysis of βασιλεἰα',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Thorvald Madsen',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              '“Everyone Will be Salted with Fire”: Mark 9:49-50 and the Risk of Persecution',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Zachary K. Dawson',
              affiliation: 'Regent University School of Divinity',
            },
            theme:
              'The Essential Sociolinguistic Principles of Register Analysis for New Testament Exegesis',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Maine',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Old Testament',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Timothy Yap',
          affiliation: 'Olivet Theological Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Anthony Caﬀey',
              affiliation: 'Moody Theological Seminary',
            },
            theme:
              'Re-envisioning Vision: A Better Way to Understand ן$זחָ in Proverbs 29:18',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Jonathan J. Routley',
              affiliation: 'Emmaus University',
            },
            theme:
              '“I Sent the Hornet Before You”: A Critical Examination of העָ *(ִ הַ in Joshua 24:12',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Ryan C Hanley',
              affiliation: 'University of the Cumberlands',
            },
            theme:
              'Tov Meod: The Compelling Beauty of Male and Female Complementarity in the Old Testament',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Miles Van Pelt',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'Interpreting the Song of Songs: Wisdom, Orthodoxy, and Feminism',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        subtheme: 'Studies in the Septuagint',
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Gregory R. Lanier',
          affiliation: 'Reformed Theological Seminary, Orlando',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'MIT',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Matthew Albanese',
              affiliation: 'Union University',
            },
            theme: 'Septuagint Pentateuch as Literary-Scriptural Encyclopedia',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Joel Korytko',
              affiliation: 'Northwest College & Seminary',
            },
            theme:
              'How Septuagint Exodus 22:24(25) Permits the Charging of Interest in Contradiction to the Hebrew',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'John Meade',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme: 'Biblia Hebraica Quinta Job and the Greek Editions of Job',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Christopher J. Fresch',
              affiliation: 'Bible College of South Australia',
            },
            theme:
              "Sins against Native Greek?: A Linguistic Investigation into 'Semitisms' in the Septuagint",
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Hélène Dallaire',
          affiliation: 'Denver Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Philip Theis',
              affiliation:
                'Lancaster Bible College / Capital Seminary and Graduate School',
            },
            theme:
              'Daniel 7: Poetic Contributions to a Kingdom that will Never End',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Eric Reeves',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'He Shall Come to Judge: The Day of YHWH and the Nicene Creed in Joel and Zephaniah',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Ross McKnight',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Futile gods: How Recursive Symmetry Facilitates Comparison in Isaiah 44',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Matthew H. Patton',
              affiliation: 'Covenant Presbyterian Church Vandalia, OH',
            },
            theme: 'Ameliorated Judgment in the Book of Jeremiah',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon K',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Mark Francois',
          affiliation: 'Colorado Christian University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Daniel Graham',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Context in Translation: The Beneﬁt of Discourse Analysis for Studying LXX Translation Technique',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Danny Hays',
              affiliation: 'Ouachita Baptist University',
            },
            theme:
              'The Birth, Adoption, and Egyptian Upbringing of Moses: Literary and Historical Contexts',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Armen Oganessian',
              affiliation: 'Grand Canyon University',
            },
            theme:
              'Because of Your Hardness of Heart, Moses Allowed It: Understanding Why the Mosaic Law Sanctions',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Mart Jan Luteijn',
              affiliation: 'Evangelical Theology Faculty Leuven',
            },
            theme:
              'Christian Theology and Old Testament Law: The Case of the Cities of Refuge',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon K',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'JohnT. Swann',
          affiliation: 'Levites in the Gates',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Timothy Yap',
              affiliation: 'Olivet Theological Seminary',
            },
            theme:
              'Playing Musical Chairs with Saul: Music in the Saul Narrative in 1 Samuel',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'B. J. Hilbelink',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Fatherly Foreshadowing: Salvation History Typologically Preﬁgured in Genesis 12-50',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Ralph K. Hawkins',
              affiliation: 'Averett University',
            },
            theme:
              'Face-to-Face with God: The Progressive Democratization of Divine Access in the Hebrew Bible',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Matthew Tabke',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme: 'The Impact of Deuteronomy 26:1-11 on Biblical Theology',
          },
        ],
      },
      {
        subtheme: 'Studies in the Psalms',
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Joshua Hunter',
          affiliation: 'Welch Divinity School',
        },
        //
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Northeastern',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Cristian Rata',
              affiliation: 'SWBTS',
            },
            theme: 'The Psalter as a Book for the Humble',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Maturu Milly Erema',
              affiliation: 'Uganda Christian University',
            },
            theme:
              'A Cry for Vengeance: A Contextual Analysis of the Imprecatory Psalms in Africa',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Micah Barksdale',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Character Formation and the Psalms: Creation, Torah, and Prayer in Psalm 19',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Matthew McAﬀee',
              affiliation: 'Welch Divinity School',
            },
            theme: 'Hebrew Narrative Verbal Syntax and the Psalms',
          },
        ],
      },
      {
        subtheme: 'General Studies IV',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'J. Gregory Davidson',
          affiliation: 'McMaster Divinity College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon H',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Timothy Hare',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Trees & Covenants: The Signiﬁcance of Trees & Tree Imagery within the Old Testament Covenants',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Joshua Caleb Hutchens',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'Great Trees, Kingdoms, and Imposters: The Abimelech Narrative as Foil to the Abrahamic Promise',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'John Swann',
              affiliation: 'Levites in the Gates',
            },
            theme:
              'The Temple of YHWH: Invocation or Evocation in Jeremiah 7:4?',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Moon Kwon Chae',
              affiliation: 'Baylor University',
            },
            theme: 'YHWH and Babylon in the Book of Jeremiah ',
          },
        ],
      },
      {
        subtheme: 'Studies in Narrative Literature',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Douglas Nykolaishen',
          affiliation: 'Ouachita Baptist University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon B',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Federico Fretes',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              "Should You Love Those Who Hate YHWH?: The Chronicler's Perspective on Mixed Marriages",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jillian L. Ross',
              affiliation: 'Liberty Theological Seminary',
            },
            theme:
              'Deliverance as Type Scene: A Synchronic Approach to Old Testament Deliverance Accounts',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Jacob Tomc',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'A National Treasure: The Overlooked Value of the Torah in the Chronicler’s Josiah Narrative',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Tiberius Rata',
              affiliation: 'Grace College and Theological Seminary',
            },
            theme:
              'Divine Mandate and Dynastic Mechanism: Succession Protocol in the Kings from David to Amaziah',
          },
        ],
      },
    ],
  },
  {
    track: 'Old Testament Background / Ancient Near East',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'John D. Doss',
              affiliation: 'Asbury Theological Seminary/Asbury University',
            },
            theme:
              'The Grace Formula (Exod 34:6-7) in its Ancient Near Eastern Context ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Joshua Sherrill',
              affiliation: 'Evangelische Theologische Faculteit, Leuven',
            },
            theme:
              'Corroborating Evidence for the Antiquity of the Torah’s Hebrew',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Mark Francois',
              affiliation: 'Colorado Christian University',
            },
            theme:
              'Exemption and Curse: The Origin and Purpose of the Military Exemptions of Deuteronomy 20:5-7',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Matthew Saunders',
              affiliation: 'Johns Hopkins University',
            },
            theme:
              'Scribal Lists and the Limits of Knowledge: The Rhetoric of Wisdom in the Book of Job',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon H',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Richard Averbeck',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme: 'Reading Genesis 1:1-3 from a Compositional Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Matthew McAﬀee',
              affiliation: 'Welch Divinity School',
            },
            theme:
              'Poetry, Narrative Poetics, and the Early Chapters of Genesis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Caleb Howard',
              affiliation: 'Tyndale House Cambridge',
            },
            theme: 'Genesis 14: Composition and History',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Jens Bruun Kofoed',
              affiliation: 'Fjellhaug International University College',
            },
            theme:
              'Gender Identity Cultic Prostitution in Ancient Mesopotamian and North-West Semitic Cultures',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon I',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Old Testament Narrative Literature',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Michael Grisanti',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Daniel Block',
              affiliation: 'Wheaton College',
            },
            theme:
              'Will the Real Gideon Please Sit Down? Relistening to Judges 6-9 with the Hearing Devices Provide',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Jillian L. Ross',
              affiliation: 'Liberty Theological Seminary',
            },
            theme:
              'From Cowardly to Courageous: Gideon’s Complex Characterization (Judges 7)',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Allen Hamlin Jr',
              affiliation: 'Trinity College Bristol',
            },
            theme:
              'Bringing Foreignness Home: Clothing and the Closing Characterization of Gideon in Judges 8:21-28',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Robert B. Chisholm, Jr.',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'Rock Bottom Has a Basement Named Abimelech: The Role of Judges 9 in the Gideon Story',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom A',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Michael Grisanti',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Alaa Salloum',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'No King in Israel: Rethinking the Refrain in the Epilogue to Judges',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Alexandra K. Prentice',
              affiliation: 'Sydney Missionary and Bible College',
            },
            theme:
              'Holiness, Ḥērem, and Heavy Rain: Feeling the Aﬀective-Narrative Strategies of Ezra 9-10 ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'John Soden',
              affiliation: 'Training Leaders International',
            },
            theme:
              'Exposing Temptation in Genesis 3: The Role of Ambiguity in the Action and in the Reaction',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Mark A. Hassler',
              affiliation: 'Independent Scholar',
            },
            theme:
              'Israel Attacks Ai: Signiﬁcance of the Rhetorical Features in Joshua 7-8',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Simmons',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Old Testament Prophetic and Apocalyptic Books',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'PaulWegner',
          affiliation: 'Gateway Seminar y',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Andrew M. King',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Married with Children: Adoption in Hosea’s Initial Sign Act',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Eric J. Tully',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme: 'Metaphors for the Remnant in the Literary Prophets',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'John J. Baker',
              affiliation: 'Southern Seminary/Seminario Bíblico Salmo',
            },
            theme:
              'Using Jeremiah to Vindicate Ezekiel: Reframing Prophetic Validation in Deut 18',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Justin Anderson',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Highway to Zion: Linguistic and Thematic Parallelism between Isaiah 1-5 and Isaiah 34-35',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Brandeis',
        },
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme:
          'God and Human (Mis)Behavior: Moral Imagination and Justice in the Prophets',
        moderator: {
          name: 'William R. Osborne',
          affiliation: 'College of the Ozarks',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Daniel Timmer',
              affiliation: 'PRTS, FTE-Acadia',
            },
            theme: 'Moral Imagination and Justice in Malachi',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Yadi Hu',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'The Shema Embodied: Jeremiah as a Paradigm',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Robert B. Chisholm, Jr.',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'Every Morning He Reveals His Justice: Moral Imagination and Justice in Zephaniah',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Wilson de Angelo Cunha',
              affiliation: 'Calvin Theological Seminary',
            },
            theme: 'Moral Imagination and Justice in Isaiah',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon J',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Old Testament Theology',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'HeathThomas',
          affiliation: 'Oklahoma Baptist University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Isaiah C. Padgett',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'The Theology and Ethics of the Davidic Genealogy in Ruth 4:18-22 and 1 Chronicles 2:9-15',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Ellie (Wiener) Paley',
              affiliation:
                'Gordon-Conwell Theological Seminary; Jerusalem University College',
            },
            theme: 'Restored: Job’s Epilogue Experience as a Return from Exile',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Joshua Huver',
              affiliation: 'Wheaton College',
            },
            theme:
              'Where You Stay, I Will Stay: A Theology of Place in the Book of Ruth',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Arnon Franca Batista',
              affiliation: 'Mesa Scholars/Faculdade Batista Logos',
            },
            theme:
              'Yhwh’s Plan(s) in the Book of Isaiah: Exploring Divine Portraits and Notions of Providence',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon H',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'M. Daniel Carroll R.',
          affiliation: 'Wheaton College and Graduate School',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Nathan Lovell',
              affiliation: 'George Whiteﬁeld College',
            },
            theme: 'Forgiveness and Structural Sin',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Megan Roberts',
              affiliation: 'Prairie College',
            },
            theme: 'Forgiveness and Memory',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Kit Barker',
              affiliation: 'Sydney Missionary & Bible College',
            },
            theme: 'Forgiveness and Justice',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Hannah Harrington',
              affiliation: 'Patten University',
            },
            theme: 'Forgiveness and Ritual in the Dead Sea Scrolls',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon D',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Old Testament Wisdom Literature',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Brian Gault',
          affiliation: 'Dallas Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Kyle C. Dunham',
              affiliation: 'Detroit Baptist Theological Seminary',
            },
            theme:
              'Canonical Closure Formulas and Ecclesiastes’s Epilogue: Implications for Provenance',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Michael C. Lyons',
              affiliation: 'Columbia International University',
            },
            theme: 'Fear of the LORD: An Argument for Torah Loyalty',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Timothy Little',
              affiliation: 'Faith Baptist Theological Seminary',
            },
            theme:
              'Dechristologizing the Song of Songs: Applying the Song Through the Lens of Divine Absence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Ted Hildebrandt',
              affiliation: 'Gordon College',
            },
            theme:
              'Using AI to Enhance Biblical Understanding and Teaching of Proverbs',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Vineyard',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Chris Ansb err y',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:30 PM',
            speaker: {
              name: 'Richard Schultz',
              affiliation: 'Wheaton College',
            },
            theme: 'Creation in Proverbs and Ecclesiastes',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:40 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Brittany Melton',
              affiliation: 'University of Cambridge',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:20 PM',
            endTime: '2:50 PM',
            speaker: {
              name: 'Tremper Longman',
              affiliation: 'Westmont College',
            },
            theme: 'Creation in Genesis 1-3 and Psalm 104',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Seulgi Byun',
              affiliation: 'Grove City College',
            },
            theme: 'Creation and Genesis 9',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:40 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Ryan O’Dowd',
              isInvitedGuest: true,
              affiliation: 'Chesterton House, Cornell University',
            },
            theme: 'Creation, Wisdom, and Covenant',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track:
      'Orthodoxy and Deliverance: The Nicene Creed in Black Evangelicalism',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Walter Strickland',
          affiliation: 'Southeastern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Kelvin Washington',
              affiliation: 'Liberty University',
            },
            theme:
              'Invisible Man: A Black Evangelical Retrieval of Christ’s Humanity in an Unethical World',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Sherelle Ducksworth',
              affiliation: 'Anderson University',
            },
            theme: 'Nicaea, Black Embodiment, and the Life of God',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Quonekuia Day',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme:
              'An Exploration of God’s role as the Father: Implications for the African American Church',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Walter Strickland',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme: 'The Humiliated Judge and Deliverer',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom D',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Patristic and Medieval History',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Stefana Dan Laing',
          affiliation: 'Beeson Divinity School',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Don Springer',
              affiliation:
                'McMaster Divinity College Centre for Patristics & Early Christianity',
            },
            theme:
              'Seeds of Nicaea: Substance and Light in the Writings of Irenaeus"',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Bryan Litﬁn',
              affiliation: 'Liberty University',
            },
            theme:
              'Tracing a Creedal Pedigree: How Did the Patristic Regula Fidei Aﬀect the Apostles’ Creed?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'James Payton',
              affiliation: 'McMaster Divinity College',
            },
            theme: 'The Impact of the Council of Nicaea: Already/Not Yet',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Megan DeVore',
              affiliation: 'Colorado Christian University',
            },
            theme: 'Christological Hermeneutics in Early Christian Art',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '1st',
          room: 'Tremont',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Brian Shelton',
          affiliation: 'Asbury University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Donald Fairbairn',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme:
              'The Suﬃciency of Nicaea from Ephesus I to Chalcedon, 431-451',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Michael Magree',
              affiliation: 'Boston College',
            },
            theme:
              'Singing the Creed: Scripture Theology and Ecclesial Worship in Nicaea and its Reception"',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'David Hunter',
              isInvitedGuest: true,
              affiliation: 'Boston College',
            },
            theme:
              'Pastoral Concerns in the Canons of Nicaea and their Precedents',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '5:45 PM',
            speaker: {
              name: 'Glen Thompson',
              affiliation: 'Asia Lutheran Seminary',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:45 PM',
            endTime: '6:10 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Pauline Studies',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'John W. Taylor',
          affiliation: 'Gateway Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Trevor J. Hodges',
              affiliation: 'Regent University',
            },
            theme:
              'From Roman Unity to the “Unity of the Spirit:” A Socio-Rhetorical Reading of Ephesians 4:3',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Joseph Brennan',
              affiliation: 'Mississippi State University',
            },
            theme:
              "Artemis, Eve, and the Image of God: A Case of Mistaken Identity in Paul's Ephesian Marriage Code",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Matthew Monkemeier',
              affiliation: 'Moody Bible Institute',
            },
            theme:
              'Male and Female “In the Lord”? Cosmology and Christology in 1 Corinthians 11:11-12',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Dave Pederson',
              affiliation: 'Wheaton College',
            },
            theme:
              'It’s not about the ‘I’: A Divisive Worship Lament and Paul’s Solution in Romans 7:14-25',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Vineyard',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Linda Belleville',
          affiliation: 'Grand Rapids Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '8:55 AM',
            speaker: {
              name: 'Paul Sloan',
              isInvitedGuest: true,
              affiliation: 'Houston Christian University',
            },
            theme:
              "Lawful Lawlessness and Keeping God's Commandments: Law-Keeping among Paul's Assemblies",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:55 AM',
            endTime: '9:10 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:15 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'John W. Taylor',
              affiliation: 'Gateway Seminary',
            },
            theme:
              'No Longer under the Custodian: Did Paul Expect Jewish Believers to Observe the Mosaic Law?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:40 AM',
            endTime: '9:55 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:00 AM',
            endTime: '10:25 AM',
            speaker: {
              name: 'John Goodrich',
              affiliation: 'Compass Bible Institute',
            },
            theme:
              'A Slave to All: Paul’s Ethnic Malleability in 1 Corinthians 9:19–23',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:25 AM',
            endTime: '10:40 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:45 AM',
            endTime: '11:10 AM',
            speaker: {
              name: 'Justin Hardin',
              affiliation: 'Ouachita Baptist University',
            },
            theme:
              '“Written for our Admonition” (1 Cor 10:11): Paul’s Messianic Application of Scripture in 1 Corinthians',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:10 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Philosophy and the Bible',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Gavin Ortlund',
          affiliation: 'Truth Unites/Immanuel Nashville/Phoenix Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'William Lane Craig',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              "Can N. T. Wright's View of the Nature of Justiﬁcation Be Saved?",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'David Talcott',
              affiliation: 'New Saint Andrews College',
            },
            theme:
              'Defending Correspondence: A Critique of Dru Johnson’s Account of Truth in Biblical Philosophy',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Phil Kallberg & Timothy A. Stratton',
              affiliation: 'Free Thinking Ministries',
            },
            theme: 'Is Divine Determinism a Diﬀerent Gospel?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Robert Mumme',
              affiliation: 'Talbot School of Theology / Ratio Christi',
            },
            theme: "Jesus’ a fortiori Arguments and the Quran's",
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Fairfax A',
        },
      },
    ],
  },
  {
    track: 'Practical Theology',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Karelynne Gerber Ayayo',
          affiliation: 'Palm Beach Atlantic University',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'New Hampshire',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Seth J. Nelson',
              affiliation: 'Erskine Theological Seminary',
            },
            theme:
              'Enhancing Transfer of Learning from Seminary Classes to Pastoral Ministry',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Leland Brown',
              affiliation: 'The London Lyceum',
            },
            theme: 'Pastoral Ministry with the Council of Nicaea',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Kirk Patston',
              affiliation: 'Sydney Missionary and Bible College',
            },
            theme:
              'How do Parents Narrate and Explain the Spiritual Life of their Adult Children with Disability?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Gavin Ortlund',
              affiliation: 'Truth Unites/Immanuel Nashville/Phoenix Seminary',
            },
            theme:
              'The State of “Protestant Apologetics:” An Assessment and Plea',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Scott D. MacDonald',
          affiliation: 'Canadian Baptist Theological Seminary and College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Vermont',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Diego Castro',
              affiliation:
                'Midwestern Baptist Theological Seminary/University of the Andes, Chile',
            },
            theme:
              'The Liberating Christ in Luke 4:18-19: Christological and Social Implications in Latin America',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Okelloh Ogera',
              affiliation: 'Great Lakes University of Kisumu',
            },
            theme:
              'African Evangelical Theology and Creedal Christianity: Functionalism verses Proportionalism',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Thomas B. Messick',
              affiliation: 'Melbourne School of Theology',
            },
            theme:
              "Fethullah Gülen, Said Nursi, and John Calvin's Understanding of Tyranny",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Blake McKinney',
              affiliation: 'Texas Baptist College / SWBTS',
            },
            theme:
              'Out of the Pit I Call: Mining Songs and Blue-collar American Lamentation',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'James Lee',
          affiliation: 'Talbot School of Theology',
        },
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Vermont',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Helen Chen',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Dyothelite Christology and the Transformation of Human Will: A Neo-Chalcedonian Contribution',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Tom Schwanda',
              affiliation: 'Wheaton College',
            },
            theme:
              "When You Can't Sleep, Pray!: Evening Spirituality During the Watches of the Night",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Frankie Melton',
              affiliation: 'North Greenville University',
            },
            theme:
              'The Puritan Vision of Christian Contentment: Examining Jeremiah Burroughs and Thomas Watson',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Rebecca Muir',
              affiliation: 'Ridley College',
            },
            theme:
              'The Christian Community as a Resource for Suﬀering Christians in Hebrews',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Richard A. Brumback III',
          affiliation: 'Freed-Hardeman University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Mark Blackwelder',
              affiliation: 'Freed Hardeman University',
            },
            theme: 'Ethos Over Logos? Preaching to the Generations',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Jeﬀrey M. Robinson',
              affiliation:
                'Grace Fellowship: A Church for All Nations / Liberty University',
            },
            theme:
              'Exposition through an Apologetics Lens: A Case for Integration',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Bryan Murawski',
              affiliation: 'Cairn University',
            },
            theme:
              'When Paul Quotes Pagans: Strategies for Preachers for When the Bible Uses Non-Canonical Texts',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Jared Bumpers',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'On Beard Trimming and Cattle Breeding: An Evangelical Approach to Preaching Old Testament Law',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'W. Jackson Watts',
          affiliation: 'Randall University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Christopher Watkin',
              affiliation: 'Monash University',
            },
            theme: 'The Rise and Triumph of the Modern Selves',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Esther Sze Ying Lim',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Longing Re-enchanted: Longing as a Central Aspect in C. S. Lewis’s Conversion and Apologetics',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Tim Anderson',
              affiliation: 'Corban University',
            },
            theme: "Framing Haidt's GenZ Anxiety Theologically",
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Kamal Weerakoon',
              affiliation:
                'Christ College Presbyterian Theological Centre Sydney',
            },
            theme:
              'Responding to the Vibe Shift: A Fourfold Typology of Emerging Post-Secular Worldviews',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Boston University',
        },
      },
      {
        subtheme: 'General Studies II',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Hyannis',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Amy Davis Abdallah',
              affiliation: 'Ashland Theological Seminary',
            },
            theme:
              'Hebrew Bible Grief Rituals: Psychological and Symbolic Complexity',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jeremy Jessen',
              affiliation: 'Lakewood Baptist Church',
            },
            theme:
              'Trust God and Get Going: J.I. Packer’s Rebuke of the Keswick Perspective on Sanctiﬁcation',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Matt Friedeman',
              affiliation: 'Wesley Biblical Seminary',
            },
            theme: 'Works of Mercy: The Missing Link of Discipleship',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Luke S. Johnson',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'The Body the Bible and Hinduism: How Valuing Human Bodies Brings Meaning and Hope"',
          },
        ],
      },
      {
        subtheme: 'The Care of Souls',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Falmouth',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Lilly Park',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Historical Narratives in the Care of Souls: Preserving Biblical Authority to Comprehend Life',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Wesley G. Pastor',
              affiliation: 'New England Training & Sending Center ',
            },
            theme: 'Shepherding through a New Creation Anthropology',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'David Merrill',
              affiliation:
                'Institute for Spiritual Formation, Talbot School of Theology',
            },
            theme:
              'The Virtue of Empathy: Christian Empathy and the Care of Souls',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'David Haines',
              affiliation: 'Boyce College',
            },
            theme: 'General Revelation, Human Nature, and Biblical Counseling',
          },
        ],
      },
    ],
  },
  {
    track: 'Psalms and Hebrew Poetry',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Andrew Schmutzer',
          affiliation: 'Moody Bible Institute',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Robert Cole',
              affiliation: 'eteacher.com',
            },
            theme: "The Function of Psalm 88's Superscription",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Peter C. W. Ho',
              affiliation: 'Singapore Bible College',
            },
            theme:
              'Can an Integrative Reading of the Masoretic Psalter Stand in the Presence of Textual Variants?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Craig Long',
              affiliation: 'Taylor University',
            },
            theme:
              'That Head Still Isn’t Crushed: Head Crushing and Messianic Imagery in the Imprecatory Psalms',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Ahrum Yoo',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'The Enemy is a Trapper: the Ultimate Enemy in the Evolving Metaphors of Trap in the Psalms',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon I',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Kyle C. Dunham',
          affiliation: 'Detroit Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Hassell Bullock',
              affiliation: 'Wheaton College',
            },
            theme: 'Psalm 46: Framing Faith in Terms of the Past',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'David Firth',
              affiliation: 'Trinity College Bristol / UFS',
            },
            theme: 'Psalm 73 in Faith and Scholarship: A Personal Journey',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'David Howard',
              affiliation: 'Bethlehem College and Seminary',
            },
            theme: 'Psalm 113: The Perfect Praise Psalm',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Daniel Estes',
              affiliation: 'Cedarville University',
            },
            theme:
              'How Psalm 127 Pointed Me Toward Something Better than Success',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon J',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Public Theology',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Matthew Lee Anderson',
          affiliation: 'Baylor University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '8:40 AM',
            speaker: {
              name: 'Oliver O’Donovan',
              isInvitedGuest: true,
              affiliation: 'University of Edinburgh',
            },
            theme: 'Oliver O’Donovan’s The Disappearance of Ethics',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:40 AM',
            endTime: '8:55 AM',
            speaker: {
              name: 'Daniel Treier',
              affiliation: 'Wheaton College',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:55 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Myles Werntz',
              isInvitedGuest: true,
              affiliation: 'Abilene Christian University',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:10 AM',
            endTime: '9:25 AM',
            speaker: {
              name: 'Elisabeth Kincaid',
              affiliation: 'Baylor University',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:25 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Ruan Bessa',
              affiliation: 'Calvin Theological Seminary',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:40 AM',
            endTime: '9:55 AM',
            speaker: {
              name: 'Oliver O’Donovan',
              isInvitedGuest: true,
              affiliation: 'University of Edinburgh',
            },
            theme: RESPONSE,
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:55 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Wellesley',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Greg Forster',
          affiliation: 'Trinity Evangelical Divinity School',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Dennis Hollinger',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme:
              'Government and Politics: From Creation or the Fall, and Does it Matter?',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Daniel Timmer',
              affiliation: 'PRTS, FTE-Acadia',
            },
            theme:
              'Ideological Critique as a Key to Developing Biblical Critical Theory from Prophetic Literature',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Matthew Akers',
              affiliation: 'Mid-America Baptist Theological Seminary',
            },
            theme:
              'Carl Henry’s Proposal for Implementing a Progressive Fundamentalistic Approach to Social Action',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Mimi Haddad',
              affiliation: 'CBE International',
            },
            theme:
              'A Crisis of Truth, Shared Values, Integrity, and Humility: Francis Collins’s Epistemology',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon H',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Puritan Theology in Post-Reformation Context',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Shawn Wright',
          affiliation: 'The Southern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Andrew Ballitch',
              affiliation: 'Westwood Alliance Church',
            },
            theme: 'The Creedal Shape of Early Puritan Pastoral Ministry',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Nathan Nocchi',
              isInvitedGuest: true,
              affiliation: 'Westminster Theological Seminary',
            },
            theme:
              'Creeds, Heresies, and Theological Pedagogy: An Example from 17th-Century Cambridge',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Samuel Renihan',
              affiliation: 'International Reformed Baptist Seminary',
            },
            theme:
              'Throughly to be Believed: Creeds and Credobaptists in the Seventeenth Century',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Lee Gatiss',
              affiliation: 'Greystone Theological Institute',
            },
            theme: 'Bishop Bull’s Defence of the Nicene Faith (1685) ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Boston University',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Recovering Classical Protestant Politics',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Daniel Strand',
          affiliation: 'Air War College',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Ben R. Crenshaw',
              affiliation: 'University of Mississippi',
            },
            theme:
              'Protestant Political Theology in Eighteenth-Century New England Sermons',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Glenn Moots',
              affiliation: 'Northwood University',
            },
            theme: 'Is Covenanting a Viable Political Concept Now?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Daniel Strand',
              affiliation: 'Air War College',
            },
            theme:
              'The Limits of Conformity: Conscience and Casuistry in Caroline Practical Divinity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Stephen Wolfe',
              affiliation: 'Independent Scholar',
            },
            theme: 'Are Christian Nations Possible?',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Brandeis',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Reformation Studies',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Mar tin Klaub er',
          affiliation: 'Trinity Evangelical Divinity School',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Jonathon Beeke',
              affiliation: 'Puritan Reformed Theological Seminary',
            },
            theme:
              'Bénédict Pictet (1655-1724) on the Twofold Kingdom of Christ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Martin Klauber',
              affiliation: 'Trinity Evangelical Divinity School',
            },
            theme:
              'Pierre Allix (1640-1717) on the Jewish Roots of the Trinity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Matthew Miller',
              affiliation: 'The C. S. Lewis Institute',
            },
            theme:
              'Bénédict Pictet (1655-1724) and Reformed Scholasticism for the Unschooled',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Levi Berntson',
              affiliation: 'Reformation Bible College',
            },
            theme:
              'The Role of Reason in Seventeenth and Eighteenth-Century Reformed Thought',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Maine',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Martin Klauber',
          affiliation:
            'Trinity Evangelical Divinity School / Puritan Reformed Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Eric Lundeen',
              affiliation: 'Christ Our Redeemer Seminary',
            },
            theme:
              ' Apostolic Allegory in a Literal Age: Reformation Readings of Galatians 4:21-31"',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Sam Neulsaem Ha',
              affiliation: 'Calvin Theological Seminary',
            },
            theme:
              'Covenant as Consolation: Calvin’s Approach to Temporal Suﬀering and Eternal Happiness',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Jeb Ralston',
              affiliation:
                'University of Geneva / Trinity Evangelical Divinity School',
            },
            theme:
              'Zwingli the ‘Pelagian’? Reconsidering Zwingli’s Doctrine of Original Sin and Sickness',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Maarten Kuivenhoven',
              affiliation: 'Puritan Reformed Theological Seminary',
            },
            theme:
              "The Dignitas of Humanity in Wolfgang Musculus' Interpretation of Psalm 8",
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon D',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Religious Epistemology',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Dolores Morris',
          affiliation: 'University of South Florida',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Daniel Lightsey',
              affiliation: 'University of Notre Dame',
            },
            theme: 'If Proper Functionalism is True, Then God is Omni-Ignorant',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Kegan Shaw',
              affiliation: 'Anderson University',
            },
            theme: "Faith's Conclusive Reasons",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Travis Dickinson',
              affiliation: 'Dallas Baptist University',
            },
            theme: 'Assurance, Doubt, and the Knowledge of God',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Parker Settecase',
              affiliation: 'Palm Beach Atlantic University',
            },
            theme:
              'Knowing Our Deceivers Immediately and Interpersonally: In Defense of Interpersonal Knowledge',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Nantucket',
        },
      },
    ],
  },
  {
    track: "Revitalizing Francis Schaeﬀer's Work for the 21st Century",
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Mark Liederbach',
          affiliation: 'Southeastern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Larry Lyon',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              "Antithesis as Cornerstone: Schaeﬀer's Framework for Christian Public Theology",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Evan Lenow',
              affiliation: 'Mississippi College',
            },
            theme:
              'Whatever Happened to Francis Schaeﬀer?: Reviving Schaeﬀer’s Arguments in the Abortion Debate',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Christopher Talbot',
              affiliation: 'Welch Divinity School',
            },
            theme:
              'The Trinity Who Is There: The Trinitarian Apologetics of E. J. Carnell and Francis A. Schaeﬀer',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Mark Liederbach',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Schaeﬀer as Ethicist: Exploring the Metaethical Foundations for his Cultural Engagement',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon C',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Science, Technology, and Mathematics',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Phil Kallberg',
          affiliation: 'Free Thinking Ministries',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Marcus R. Ross',
              affiliation: 'Liberty University',
            },
            theme:
              'Models, Timelines, and Unfalsiﬁability: A Scientiﬁc Appraisal of the Recent GAE Hypothesis',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Clint Parker',
              affiliation: 'East Carolina University',
            },
            theme:
              'Medical Professional Obligations and the Christian Physician',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'John Peckham & RT Mullins & Kimberley Kroll & Tyler McNabb & Elijah Hess',
              affiliation:
                'Andrews University & University of Lucerne/University of Helsinki & Trinity Evangelical Divinity School & St. Francis University & St. Louis Community College',
            },
            theme: "R.T. Mullins's Eternal in Love Panel Discussion",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Commonwealth',
        },
      },
    ],
  },
  {
    track: 'Scottish Church History and Theology Study Group',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Kenneth Stewart',
          affiliation: 'Covenant College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Chad Van Dixhoorn',
              affiliation: 'Reformed Theological Seminary, Charlotte',
            },
            theme:
              'Samuel Rutherford and the Problem of Puritanical Scottish Presbyterians',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'David G. Whitla',
              affiliation: 'Reformed Presbyterian Theological Seminary',
            },
            theme:
              'Archibald Johnston of Wariston and the Puritan Practice of Providence',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Lee Gatiss',
              affiliation: 'Greystone Theological Institute',
            },
            theme: 'John Owen in Scotland',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Jonathan Master',
              isInvitedGuest: true,
              affiliation: 'Greenville Presbyterian Theological Seminary',
            },
            theme:
              'Reexamining the Puritan Doctrine of Assurance in Scottish Theology',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Yarmouth',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Scriptural Use of Scripture',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'Jillian L. Ross',
          affiliation: 'Liberty Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Christine Palmer',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme: 'Recalling Sinai on the Day of Atonement',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Kevin W. McFadden',
              affiliation: 'Cairn University',
            },
            theme:
              'Referens Plenior: The Use of the Old Testament in Romans as a Test Case',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'George H. Guthrie',
              affiliation: 'Regent College',
            },
            theme:
              'Has Our ‘Reading Backwards’ Approach to Hebrews Been Framed?',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Matthew B. Quintana',
              affiliation: 'McMaster Divinity College',
            },
            theme:
              'Expanding the Inner-Biblical Context of the Old Testament Allusions in Revelation 19:11-16',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Suﬀolk',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Gar y Edward Schnit tjer',
          affiliation: 'Cairn University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Carmen Imes',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              'Selectively Singing the Signs and Wonders: Psalms 78 and 105 and the Exodus',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Matthew E. Swale',
              affiliation: 'Warner University',
            },
            theme: 'Deep Recalls Deep: The Use of Exodus in Psalms 42-43',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Andrew Witt',
              affiliation: 'Tyndale University',
            },
            theme:
              'The Transforming Presence of the God of Jacob: The Use of Scripture in Psalm 114',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom A',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Septuagint Studies',
    shifts: [
      {
        subtheme:
          'The Authority of the Septuagint: Biblical, Historical, and Theological Approaches',
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'Phillip Marshall',
          affiliation: 'Houston Christian University',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '8:55 AM',
            speaker: {
              name: 'Myrto Theocharous',
              affiliation: 'Greek Bible College, Athens',
            },
            theme: 'Synopsis',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:55 AM',
            endTime: '9:20 AM',
            speaker: {
              name: 'Mark Gignilliat',
              affiliation: 'Beeson Divinity School',
            },
            theme: 'OT Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:30 AM',
            endTime: '9:55 AM',
            speaker: {
              name: 'Andy Naselli',
              affiliation: 'Bethlehem College and Seminary',
            },
            theme: 'NT Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:55 AM',
            endTime: '10:20 AM',
            speaker: {
              name: 'D. Blair Smith',
              affiliation: 'Reformed Theological Seminary',
            },
            theme: 'Patristic Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:30 AM',
            endTime: '10:55 AM',
            speaker: {
              name: 'Steven Duby',
              affiliation: 'Phoenix Seminary',
            },
            theme: 'Theological Perspective',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:55 AM',
            endTime: '11:40 AM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Harvard',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Socio-Cultural Interpretation',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Craig Keener',
              affiliation: 'Asbury Theological Seminary',
            },
            theme: 'New Testament Background: Understanding Cultural Contexts',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Moyer Hubbard',
              affiliation: 'Talbot School of Theology/Biola University',
            },
            theme:
              'Full Immersion—It’s not just for Baptists: The Value of Cultural Immersion for Historical Study',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Jacobus Kok',
              isInvitedGuest: true,
              affiliation:
                'Evangelische Theologische Faculteit Leuven, Belgium',
            },
            theme:
              'How Cognitive Metaphors and Social Identity Complexity Theory Shape and Restrain Our Reﬂection',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Ben Witherington',
              isInvitedGuest: true,
              affiliation: 'Asbury Theological Seminary',
            },
            theme:
              'Toward a More Historical Method of Doing Biblical Criticism',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Vineyard',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Spiritual Formation/Sanctiﬁcation',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Steve Porter',
              affiliation: 'Westmont College',
            },
            theme:
              'Complicating the History of the Protestant Spiritual Formation Movement',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Lisa Igram',
              affiliation: 'Biola University',
            },
            theme:
              'A Sabbath Way of Life: Marva Dawn and the Gladness of Life Together in God',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Eric Brown',
              isInvitedGuest: true,
              affiliation: 'Boston University',
            },
            theme:
              'Rooted and Grounded in Love: Our Need for Howard Thurman in the Present Climate',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Glen Scorgie',
              affiliation: 'Bethel Seminary',
            },
            theme:
              'A. W. Tozer and the Renewal of the Mystical Dimension in Evangelical Spirituality',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom A',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Systematic Theology',
    shifts: [
      {
        subtheme: 'General Studies I',
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Stefan C. Matzal',
          affiliation: 'Trinity Fellowship, Syracuse, NY',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Boston University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Mark Saucy',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              'Spirit of Grace: Rethinking the Covenantal Distinctions of the Holy Spirit’s Ministry',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Michael Carlino',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              "Felix Culpa & Consummation Anyway: A Reformed Proposal for Understanding God's Decree & Covenant",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Jesse Johnson',
            },
            theme: 'Dispensationalism and the Covenant of Redemption',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Micah E. Chung',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Bonded by Broken Bread: Food, Covenant, and the Atoning Sacriﬁce of Christ',
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Simmons',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Luke Beavers',
              affiliation: 'Marquette University',
            },
            theme:
              'Canonical Exegesis and Authorial Intention in Ordinary Language Perspective',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'J. Jarrett Ford',
              affiliation: 'Cedarville University',
            },
            theme:
              'Genesis, Paul, and the Literal Sense: Rethinking the Allegory-Typology Divide',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Timothy Scott Willis',
              affiliation: 'Beeson Divinity School',
            },
            theme:
              'Double Fulﬁllment?: The Theology of Psalms 2 and 24 in the Matthean Passion Account',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Thomas Keene',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'What is he waiting for? Apocalyptic Delay and Ecclesial Contingency in 2 Peter 3',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        subtheme: 'Studies in the Scriptural Use of Scripture',
        moderator: {
          name: 'Paul Twiss',
          affiliation: 'The Master’s Seminary',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon A',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Daniel Forbes',
              affiliation: 'Grace Community Bible Church - Austin, TX',
            },
            theme:
              'Do Not Despise Davidic Discipline: The Davidic Covenant in Proverbs 3:11-12',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Andrew Streett',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'The Messiah’s Release: The Jubilee (Lev 25; Deut 15; Isa 61) Background of Mark 2:1-28 and Luke',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Susan M. Rieske',
              affiliation: 'Moody Theological Seminary',
            },
            theme:
              'Hate Speech, Prophetic Rebuke, or Something Deeper? The “Brood of Vipers” Epithet in the Gospels',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Benjamin E. Castaneda',
              affiliation: 'Edinburgh Theological Seminary',
            },
            theme:
              'Naming the νομοθέτης: Identifying the Lawgiver and Judge of James 4:12',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'William Happy Chandler',
          affiliation: 'Rock Haven Baptist Church',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Nantucket',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Brent Rempel',
              affiliation: 'Stark College & Seminary',
            },
            theme:
              'God the Teacher: John Webster’s Doctrine of Revelation after Modernity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Bradley Green',
              affiliation: 'Union University',
            },
            theme:
              'Cornelius Van Til, Classical Theism, and the Doctrine of God',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Li-Wei Liu',
              affiliation: 'Wycliﬀe College',
            },
            theme:
              'Reexamining T. F. Torrance’s Reformed Notion of Union with Christ',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Joseph Duke',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'On Christ’s Habitual Grace: Strengthening Rafael Bello against Barth’s ‘fallen Christ’',
          },
        ],
      },
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'General Studies III',
        moderator: {
          name: 'Mark A. Hassler',
          affiliation: 'Independent Scholar',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Orleans',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Gabriel Ward',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'God as Pure Spirit: Stephen Charnock and the Doctrine of Divine Simplicity',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Tyler Wittman',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              "Scripture's Moral Approach to Divine Simplicity: A Forgotten Element in Christian Tradition",
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Connor Shackelford',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme: 'God Is Spirit: The Body and the Image of God',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Roberto Martinez',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Francis Turretin and the Psychological Analogy: A Reformed Critique within the Nicene Tradition',
          },
        ],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'AndyTommelleo',
          affiliation: 'Wheaton College',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Sam Nesbitt',
              affiliation: 'Westminster Theological Seminary',
            },
            theme:
              'Temple-Beauty and Temple-Bodies: Using a Pauline Metaphor towards an Aesthetic Anthropology',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Nicholas Maricle',
              affiliation: 'Louisiana Christian University',
            },
            theme: 'A Theological Defense of Analogical Language',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'Joe Waller',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'A Fear by Any Other Name? Distinguishing the Fear of the Lord from “Synonymous” Values',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Michael Agerbo Mørch',
              affiliation: 'Dansk Bibel-Institut',
            },
            theme: 'Hope and the Future of Humanity',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Maine',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Daniel Scheiderer',
          affiliation: 'International Reformed Baptist Seminar y',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Samuel Pirrotta',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'A Thomistic Metaphysical and Biblical Case for Gendered Souls',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Hans Madueme',
              affiliation: 'Covenant College',
            },
            theme:
              'Our Transgender Moment and Substance Dualism: A Theological Note',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Ali Mati',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme: 'Augustine: Sexuality/Gender and Men',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Torey J. S. Teer & Jacob B. Percy',
              affiliation:
                'Dallas Theological Seminary & The Southern Baptist Theological Seminary',
            },
            theme:
              'Women’s Trousers and the Global Church: God-Honoring Gender Expression beyond the West',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Commonwealth',
        },
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'None',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Wayne Grudem',
              affiliation: 'Phoenix Seminary',
            },
            theme:
              'Democratic and Republican Party Platforms Evaluated by Scripture',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Daniel Heimbach',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme:
              'Optimizing How We Defend the Sanctity of Human Life in the Public Policy Arena',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'J. Steve Miller',
              affiliation: 'Kennesaw State University',
            },
            theme:
              'Why Theological/Biblical Attacks on Near-Death And Deathbed Experiences Often Fall Short',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Christopher Woznicki',
              affiliation: 'Jonathan Edwards Center at Gateway Seminary',
            },
            theme:
              'Beauty in Anselm, Jonathan Edwards, and Contemporary Accounts of Atonement',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom A',
        },
      },
      {
        subtheme: 'General Studies IV',
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Orleans',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Glenn R. Kreider',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              'Does God Still Speak through Prophets?: Cessationism Reimagined',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Kymberli M. Cook',
              affiliation: 'Dallas Theological Seminary',
            },
            theme:
              "Two Truths and a Myth: Evangelicals and God's Work Through Unbelievers",
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Dennis Greeson',
              affiliation: 'The Alexandrian Institute',
            },
            theme:
              'Klaas Schilder’s Historical Consciousness and Redemptive-Historical Interpretation',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Noman Shahbaz',
              affiliation: 'Asia Graduate School of Theology',
            },
            theme:
              'Karl Barth’s Doctrine of Reconciliation: Missional Implications for the Pakistani Church',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Marc Wooten',
          affiliation: 'Asia Biblical Theological Seminary',
        },
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom B',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Danillo Santos',
              affiliation: 'CPAJ - Brazil',
            },
            theme:
              '“Stored up for ﬁre”: Sodom and Gomorrah and God’s Promise of Eschatological Conﬂagration',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Ryan A. Brandt',
              affiliation: 'Grand Canyon University',
            },
            theme:
              'The Vision of God that Transforms: Exodus, Revelation, and Beyond',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Marc Wooten',
              affiliation: 'Asia Biblical Theological Seminary',
            },
            theme: 'Exodus Motif in Adoption',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Gary L. Shultz Jr.',
              affiliation: 'Baptist University of Florida',
            },
            theme:
              'The Royal Prophet: Elisha’s Royal Presence and his Anticipation of Jesus Christ',
          },
        ],
      },
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'NO_INFO',
        },
        location: {
          hotel: 'Sheraton',
          floor: '3rd',
          room: 'Fairfax A',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Micah S. Meek',
              affiliation: 'Oklahoma Baptist University',
            },
            theme:
              'Motivation as an Ethical Lens for Assessing IVF and Surrogacy',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:50 PM',
            endTime: '2:30 PM',
            speaker: {
              name: 'Jesse Logan Parker',
              affiliation: 'Southeastern Baptist Theological Seminary',
            },
            theme: 'The Nicene Creed, Oliver O’Donovan, and Race Relations',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Cory Barnes',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Moral Vision or Widening Mercy?: Evaluating Changes in Richard Hays’s Method for Biblical Ethics',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:30 PM',
            endTime: '4:10 PM',
            speaker: {
              name: 'Keith E. Johnson',
              affiliation: 'Reformed Theological Seminary / Cru',
            },
            theme:
              'What Might John Owen Contribute to the Debate over the Sinfulness of Same-Sex Attraction?',
          },
        ],
      },
    ],
  },
  {
    track: 'The Beatiﬁc Vision and the Trinity',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'D. Blair Smith',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'From the Alpha to the Omaga: God the Father and the Beatiﬁc Vision',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:10 PM',
            endTime: '2:40 PM',
            speaker: {
              name: 'Matthew Barrett',
              affiliation: 'Trinity Anglican Seminary',
            },
            theme:
              'Did Christ Experience the Beatiﬁc Vision? Engaging Thomas Aquinas',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:50 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Samuel Parkison',
              affiliation: 'Gulf Theological Seminary',
            },
            theme:
              '“Love is from God”: The Holy Spirit, Deiﬁcation, and the Beatiﬁc Vision',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Michael Allen',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'The Visibility of the Invisible God: Inseparability, Mediation, and Mystery',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:10 PM',
            endTime: '4:40 PM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom D',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'The Doctrine of Deiﬁcation',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Michael Reardon',
          affiliation:
            'Canada Christian College and School of Graduate Theological Studies',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:30 PM',
            speaker: {
              name: 'Carl Mosser',
              affiliation: 'Independent Scholar',
            },
            theme:
              'Deiﬁcation and the Nicene Creed: Arius, Alexander, and the Scope of Graced Exchange',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '4:00 PM',
            speaker: {
              name: 'Veli-Matti Kärkkäinen',
              isInvitedGuest: true,
              affiliation: 'Fuller Theological Seminary',
            },
            theme:
              'The Indwelling Christ through the Spirit is Christian Salvation: Martin Luther & Watchman Nee',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Ben Blackwell',
              affiliation: 'Westminster Theological Centre',
            },
            theme:
              'Deiﬁcation and the Infusion of Grace: Articulating a Triune Personal Encounter',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:10 PM',
            speaker: {
              name: 'Myk Habets',
              affiliation: 'Laidlaw College',
            },
            theme: 'The Spiritual Saga of a Creaturely Soul-Revisited',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:10 PM',
            endTime: '5:40 PM',
            speaker: {
              name: 'Brian Chiu',
              affiliation: 'Logos Evangelical Seminary',
            },
            theme:
              'Abiding in the Divine Trinity: Johannine Perichoretic Deiﬁcation in Witness Lee’s Reading',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:40 PM',
            endTime: '6:10 PM',
            isPanelDiscussion: true,
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon J',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'The Doctrine of Scripture',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Robert W. Yarbrough',
          affiliation: 'Covenant Theological Seminary',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Matthew J. Bekken',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Θεόπνευστος as "Life-Giving" in 2 Tim 3:16? A Survey of the Background Imagery of Divine Breath',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Murray Vasser',
              affiliation: 'Wesley Biblical Seminary',
            },
            theme:
              'Inerrant in the Autographs: The Case for Restricting Flexible Inerrancy to the Autographs',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Casey Evans',
              affiliation: 'New Orleans Baptist Theological Seminary',
            },
            theme:
              'Analogous Actions: A Modiﬁed Analogy between Inspiration and the Instrumentum Divinitatis',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Eunice Momah',
              affiliation: 'Fuller Theological Seminary, Pasadena',
            },
            theme:
              'Postcolonial Studies and the Bible: A Methodological Reassessment',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Provincetown',
        },
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: '',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Michael Haykin',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'These Celestial Lines: British & Irish Baptists and their Love of the Bible, 1640s-1840s',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'David Dockery',
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Key Developments in the Doctrine of Scripture in Southern Baptist Life',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Malcolm Yarnell',
              isInvitedGuest: true,
              affiliation: 'Southwestern Baptist Theological Seminary',
            },
            theme:
              'Applying the Regula Fidei to Contemporary Evangelical Theological Formation',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Craig Carter',
              affiliation: 'Tyndale University College & Seminary',
            },
            theme:
              'Are Baptists Protestants? The Particular Baptists Between Biblicism and Confessionalism',
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom B',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'The Perils and Possibilities of AI for Academics',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Ken Magnuson',
          affiliation: 'Evangelical Theological Society',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'Jason Thacker',
              affiliation: 'Boyce College',
            },
            theme: 'What Could Go Wrong? The Ethics and Challenges of AI',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'David Kotter',
              affiliation: 'Colorado Christian University',
            },
            theme: 'What Could Go Right? The Promise and Possibilities of AI',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Adam Dodd (Southwestern Seminary) Patrick Schreiner (Midwestern Baptist Theological Seminary) David Bosworth (Colorado Christian University) David Kotter (Colorado Christian University) Jason Thacker (Boyce College)',
            },
            theme: 'AI Use Cases: Practical Applications for Scholars',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            speaker: {
              name: 'Adam Dodd (Southwestern Seminary) Patrick Schreiner (Midwestern Baptist Theological Seminary) David Bosworth (Colorado Christian University) David Kotter (Colorado Christian University) Jason Thacker (Boyce College)',
            },
            theme: 'The Perils and Possibilities of AI for Academics',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon I',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'The Problem of Evil',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        moderator: {
          name: 'JT Turner',
          affiliation: 'Anderson University',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Matthew Flannagan',
              affiliation: 'St. Peters College Epsom',
            },
            theme: 'Thibodeau and the Horrendous Deeds Objection: A Reply',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Blake McAllister',
              affiliation: 'Hillsdale College',
            },
            theme:
              'Redeeming Theodicy: Defeating Evil and Ivan’s Objections Along with It',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Matthew Roberts',
              affiliation: 'Patrick Henry College',
            },
            theme:
              'Actualizable, Creatable, and Best Possible Worlds: A Response to William Rowe on Divine Freedom',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '4:00 PM',
            endTime: '4:40 PM',
            speaker: {
              name: 'Brendan Ritchie',
            },
            theme: 'Good and the Problem of Evil ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'MIT',
        },
      },
    ],
  },
  {
    track:
      'Theological Method in Counseling Practice: The Nicene Creed and Human Personhood',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'AM',
        startWindow: '8:30 AM',
        endWindow: '11:40 AM',
        moderator: {
          name: 'T. Dale Johnson',
          affiliation: 'Midwestern Baptist Theological Seminary',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '8:30 AM',
            endTime: '9:10 AM',
            speaker: {
              name: 'Jeremy Pierre',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Nicene Creed as Model of Theological Method for Biblical Application to Human Personhood',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '9:20 AM',
            endTime: '10:00 AM',
            speaker: {
              name: 'Peter Martin',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'Man in Relation to the Trinity: Theological Foundations for Engaging Psychotherapeutic Conditions',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '10:10 AM',
            endTime: '10:50 AM',
            speaker: {
              name: 'John Henderson',
              isInvitedGuest: true,
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme: 'A Theological Method of Engaging Psychotherapeutic Models',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '11:40 AM',
            speaker: {
              name: 'Laura-Lee Alford',
              affiliation: 'The Southern Baptist Theological Seminary',
            },
            theme:
              'The Nicene Creed and OCD: An Application of Theological Reasoning ',
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '5th',
          room: 'Massachusetts',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Theologies of Retrieval: Challenges and Prospects',
    shifts: [
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Alden McCray & Jared Michelson',
          affiliation: 'Grove City College & University of St Andrews',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:25 PM',
            speaker: {
              name: 'Alden McCray & Jared Michelson',
              affiliation: 'Grove City College & University of St Andrews',
            },
            theme: 'Retrieval Between Repristination and Revisionism',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:30 PM',
            endTime: '3:55 PM',
            speaker: {
              name: 'Timothy Baylor',
              affiliation: 'Calvin University',
            },
            theme: 'Grace, Criticism, and the Spirit of Retrieval',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:00 PM',
            endTime: '4:25 PM',
            speaker: {
              name: 'James M. Arcadi',
              affiliation: 'All Souls Anglican Church / Wheaton College',
            },
            theme:
              'Going Forward by Looking Backward: Metatheological Reﬂections on Analytic Retrieval',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:30 PM',
            endTime: '4:55 PM',
            speaker: {
              name: 'Alex Fogleman',
              affiliation: 'Trinity Anglican Seminary',
            },
            theme:
              'In the Workshop of Ressourcement: Retrieval as Apprenticeship',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:00 PM',
            endTime: '5:25 PM',
            speaker: {
              name: 'Scott Swain',
              affiliation: 'Reformed Theological Seminary',
            },
            theme:
              'Retrieving Architectonic Thinking in Theology and Ethics: Retrospect and Prospect',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            isPanelDiscussion: true,
          },
        ],
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon K',
        },
      },
    ],
    specialClassifications: ['ETS'],
  },
  {
    track: 'Torah Session',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'AM',
        startWindow: '9:00 AM',
        endWindow: '12:10 PM',
        moderator: {
          name: 'Katherine Davis',
          affiliation: 'Sydney Missionar y & Bible College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon J',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:00 AM',
            endTime: '9:40 AM',
            speaker: {
              name: 'David Firth',
              affiliation: 'Trinity College Bristol / UFS',
            },
            theme: 'Moses as Priest',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '9:50 AM',
            endTime: '10:30 AM',
            speaker: {
              name: 'Kevin Chen',
              affiliation: 'Gateway Seminary',
            },
            theme: 'Moses as Singer and Poet',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '10:40 AM',
            endTime: '11:20 AM',
            speaker: {
              name: 'Christine Palmer',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme: 'Moses as the Face of God',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '11:30 AM',
            endTime: '12:10 PM',
            isPanelDiscussion: true,
          },
        ],
        specialClassifications: ['ETS'],
      },
      {
        dayOfWeek: 'Wednesday',
        shift: 'PM',
        startWindow: '3:00 PM',
        endWindow: '6:10 PM',
        moderator: {
          name: 'Katherine Davis',
          affiliation: 'Sydney Missionar y & Bible College',
        },
        location: {
          hotel: 'Copley Place',
          floor: '3rd',
          room: 'Wellesley',
        },
        sessions: [
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:00 PM',
            endTime: '3:40 PM',
            speaker: {
              name: 'Sung Jin Park',
              affiliation: 'Midwestern Baptist Theological Seminary',
            },
            theme:
              'Unequal Penalties? A Study of Judicial Disparities in Deuteronomy 22:13-21 ',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '3:50 PM',
            endTime: '4:30 PM',
            speaker: {
              name: 'Igal German',
              affiliation: 'Moody Theological Seminary',
            },
            theme:
              'Demystifying the Use of ʾĕlōhîm and Deiﬁcation in the Book of Exodus: A Theological Reappraisal',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '4:40 PM',
            endTime: '5:20 PM',
            speaker: {
              name: 'Justin M. Young',
              affiliation: 'Gordon-Conwell Theological Seminary',
            },
            theme:
              'Two Tablets, One Account: Reassessing the Referent of ת0דעֵ in Exodus 24-40',
          },
          {
            date: 'November 19th',
            dayOfWeek: 'Wednesday',
            startTime: '5:30 PM',
            endTime: '6:10 PM',
            speaker: {
              name: 'Kenneth Way',
              affiliation: 'Talbot School of Theology, Biola University',
            },
            theme:
              'Goodness and Creaturely Finitude: Time and Limits in Genesis 1-11 and Christian Practice',
          },
        ],
      },
    ],
  },
  {
    track: 'Trinitarian Theology Study Group',
    shifts: [
      {
        dayOfWeek: 'Tuesday',
        shift: 'PM',
        startWindow: '1:30 PM',
        endWindow: '4:40 PM',
        subtheme: 'Nicene Exegesis',
        moderator: {
          name: 'Josh Malone',
          affiliation: 'Reformed Theological Seminary - Jackson',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon C',
        },
        sessions: [
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '1:30 PM',
            endTime: '2:10 PM',
            speaker: {
              name: 'Brandon D. Smith',
              affiliation: 'Oklahoma Baptist University',
            },
            theme:
              'Toward a Robust Biblical Trinitarianism: Pro-Nicene Retrieval and the Early High Christology Club',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '2:20 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'Rob Price',
              affiliation: 'Talbot School of Theology',
            },
            theme: 'Psalm 2 in Nicene Theology',
          },
          {
            date: 'November 18th',
            dayOfWeek: 'Tuesday',
            startTime: '3:10 PM',
            endTime: '3:50 PM',
            speaker: {
              name: 'Joshua M. Greever',
              affiliation: 'Bethlehem College and Seminary',
            },
            theme: 'Defending Nicea: The Doctrine of the Trinity in Ephesians',
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'Warfare and Violence in the Old Testament',
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Brittany Kim',
          affiliation: 'BibleProject',
        },
        location: {
          hotel: 'Copley Place',
          floor: '4th',
          room: 'Grand Ballroom Salon C',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:20 PM',
            speaker: {
              name: 'Charlie Trimm',
              affiliation: 'Biola University',
            },
            theme:
              'Recent Research on Levitical Herem and Herem in the Mesha Stela',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:20 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Michael Morales',
              affiliation: 'Greenville Presbyterian Theological Seminary',
            },
            theme: '“No Mercy”? Herem in Deuteronomy and Joshua',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:40 PM',
            endTime: '2:30 PM',
            isPanelDiscussion: true,
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:40 PM',
            endTime: '3:00 PM',
            speaker: {
              name: 'David Firth',
              affiliation: 'Trinity College Bristol / UFS',
            },
            theme: 'Herem in the Rest of the Old Testament',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:00 PM',
            endTime: '3:20 PM',
            speaker: {
              name: 'Myrto Theocharous',
              affiliation: 'Greek Bible College, Athens, Greece',
            },
            theme: 'Making Sense of Herem Today',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '3:20 PM',
            endTime: '4:10 PM',
            isPanelDiscussion: true,
          },
        ],
        specialClassifications: ['ETS'],
      },
    ],
  },
  {
    track: 'William Lane Craig’s Systematic Philosophical Theology, Vol. 1',
    specialClassifications: ['EPS'],
    shifts: [
      {
        dayOfWeek: 'Thursday',
        shift: 'PM',
        startWindow: '1:00 PM',
        endWindow: '4:10 PM',
        moderator: {
          name: 'Andrew Hollingsworth',
          affiliation: 'Church of the Holy Trinity: An Anglican Mission',
        },
        sessions: [
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:00 PM',
            endTime: '1:20 PM',
            speaker: {
              name: 'Craig Blomberg',
              affiliation: 'Denver Seminary',
            },
            theme:
              'William Lane Craig’s Systematic Philosophical Theology, Vol. 1',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:20 PM',
            endTime: '1:40 PM',
            speaker: {
              name: 'Thomas McCall',
              affiliation: 'Asbury Theological Seminary',
            },
            theme:
              'William Lane Craig’s Systematic Philosophical Theology, Vol. 1',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '1:40 PM',
            endTime: '2:00 PM',
            speaker: {
              name: 'Elizabeth Jackson',
              affiliation: 'St. Louis University',
            },
            theme:
              'William Lane Craig’s Systematic Philosophical Theology, Vol. 1',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:00 PM',
            endTime: '2:20 PM',
            speaker: {
              name: 'William Lane Craig',
              affiliation: 'Talbot School of Theology',
            },
            theme:
              'William Lane Craig’s Systematic Philosophical Theology, Vol. 1',
          },
          {
            date: 'November 20th',
            dayOfWeek: 'Thursday',
            startTime: '2:20 PM',
            endTime: '4:10 PM',
            isQAndA: true,
          },
        ],
        location: {
          hotel: 'Sheraton',
          floor: '2nd',
          room: 'Back Bay Ballroom D',
        },
      },
    ],
  },
]

const eventData: EventData = {
  generalEvents,
  Tracks,
  classificationColors: {
    EPS: {
      background: '#ebf5ff',
      border: '#93c5fd',
    },
  },
  hideSpecialEventsByDefault: true,
  name: 'Evangelical Theological Society Meeting - Boston 2025',
  footerConfig: {
    officialSourceUrl: 'https://etsjets.org/annual-meeting-overview/',
    officialSourceName: 'the official ETS Annual Meeting page',
    lastUpdated: 'January 15, 2025',
  },
}

export default eventData
