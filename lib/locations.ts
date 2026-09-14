/**
 * Content for the location landing pages.
 *
 * Each entry is deliberately written differently. Near-identical pages across
 * several towns read as thin duplicate content and Google discounts them, so
 * every location gets its own angle, its own client references and its own copy.
 */

export type Location = {
  slug: string
  city: string
  title: string
  description: string
  heading: string
  intro: string
  paragraphs: string[]
  areas: string[]
  videoIds: { id: string; title: string; category: string }[]
}

export const locations: Record<string, Location> = {
  glasgow: {
    slug: 'videographer-glasgow',
    city: 'Glasgow',
    title: 'Videographer Glasgow | Corporate & Event Video | MediaMurray',
    description:
      'Freelance videographer and photographer working across Glasgow and the west of Scotland. Corporate video, event coverage, awards ceremonies and social content. One operator, full kit, no agency mark-up.',
    heading: 'Videographer in Glasgow',
    intro:
      'Corporate video, event coverage and photography across Glasgow and the west of Scotland.',
    paragraphs: [
      'Glasgow is regular ground. I have filmed awards ceremonies, conferences, sports content and promotional films across the city and the wider west coast, and I travel with my own camera, lighting and audio kit so there is no crew to book around.',
      'Past work in and around Glasgow includes matchday and promotional content for RangersTV, awards coverage for LowlandRFCA at Paisley, and event films for the Scottish Fair Trade Forum and North Lanarkshire Council.',
      'Most jobs are a single operator working two cameras. That keeps the cost sensible and the footprint small, which matters at a live event where nobody wants a film crew in the way.',
    ],
    areas: ['Glasgow city centre', 'Paisley', 'East Kilbride', 'Lanarkshire', 'Renfrewshire', 'Ayrshire', 'Inverclyde'],
    videoIds: [
      { id: 'VVGPcQIk0cY', title: 'An Evening with Graeme Souness', category: 'Event' },
      { id: 'VV1P0zK_hP4', title: 'Inverclyde Whisky Festival', category: 'Event' },
    ],
  },
  edinburgh: {
    slug: 'videographer-edinburgh',
    city: 'Edinburgh',
    title: 'Videographer Edinburgh | Corporate & Event Video | MediaMurray',
    description:
      'Edinburgh-based freelance videographer, photographer and editor. Corporate video, conferences, awards ceremonies and social media content. Broadcast trained, 170+ projects delivered.',
    heading: 'Videographer in Edinburgh',
    intro:
      'Based in Edinburgh. Corporate video, conference and event coverage, photography and social content.',
    paragraphs: [
      'I am based in Edinburgh, so city work means no travel costs and an easy early start. Conferences at the EICC, awards evenings, ceremonies, office and location filming, and photography alongside the video where you need both.',
      'Alongside freelance work I operate live broadcast at the Scottish Parliament, covering chamber and committee proceedings. That is a useful grounding for corporate work: multi-camera, live, no second takes, and everything has to be right first time.',
      'Recent Edinburgh work includes the Scottish Women’s Wellbeing Summit and the International Fair Trade Towns Conference, plus ongoing coverage for public sector and third sector clients.',
    ],
    areas: ['Edinburgh city centre', 'Leith', 'West Lothian', 'Midlothian', 'East Lothian', 'Fife', 'The Borders'],
    videoIds: [
      { id: 'lGnpNxBG4xU', title: "Scottish Women's Wellbeing Summit", category: 'Conference' },
      { id: 'B6dOtVrT6Bg', title: 'International Fair Trade Towns Conference', category: 'Conference' },
    ],
  },
  scotland: {
    slug: 'videographer-scotland',
    city: 'Scotland',
    title: 'Videographer Scotland | Video Production Across the Central Belt | MediaMurray',
    description:
      'Freelance videographer and photographer covering the whole of Scotland from a base in Edinburgh. Corporate video, events, documentary-style films and photography. 170+ projects delivered.',
    heading: 'Videographer Covering Scotland',
    intro:
      'Based in Edinburgh, working the length of the country. Corporate video, events, documentary and photography.',
    paragraphs: [
      'The Central Belt is home ground and most weeks are Edinburgh or Glasgow, but the work regularly goes further. Stirling, Dundee, Perth, Dumfries and Galloway, the west coast and the islands.',
      'Because I work solo with my own kit, taking a job outside the Central Belt is straightforward. There is no crew to move and no equipment hire to arrange, so a shoot in Aberdeen or Oban costs travel rather than a whole production budget.',
      'Over 170 projects delivered since 2019 for clients including BBC Scotland, RangersTV, LowlandRFCA, the Scottish Fair Trade Forum and North Lanarkshire Council.',
    ],
    areas: ['Central Belt', 'Stirling', 'Dundee', 'Perth', 'Aberdeen', 'Dumfries & Galloway', 'The Highlands', 'The Islands'],
    videoIds: [
      { id: 'rUWGAz0s5hw', title: 'LowlandRFCA Beating Retreat', category: 'Event' },
      { id: 'lGnpNxBG4xU', title: "Scottish Women's Wellbeing Summit", category: 'Conference' },
    ],
  },
}
