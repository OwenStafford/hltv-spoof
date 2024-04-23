export type NavigationItem = {
	label: string;
	path: string;
	subItems?: NavigationItem[];
};

export const NavigationItems: NavigationItem[] = [
	{ label: 'News', path: '/news' },
	{ label: 'Matches', path: '/matches' },
	{ label: 'Results', path: '/results' },
	{
		label: 'Events',
		path: '/events',
		subItems: [
			{ label: 'All Events', path: '/events' },
			{ label: 'Ongoing', path: '/events#tab-TODAY' },
			{ label: 'Archive', path: '/events/archive' },
			{ label: 'ESL Pro League S19', path: '/events/esl-pro-league-season-19' },
		],
	},
	{ label: 'Stats', path: '/stats' },
	{ label: 'Fantasy', path: '/fantasy' },
	{ label: 'Forum', path: '/forum' },
	{ label: 'Media', path: '/media' },
	{ label: 'Betting', path: '/betting' },
	{ label: 'Live', path: '/live' },
	{ label: 'Major', path: '/major' },
];
