import {
	IconDefinition,
	faCalendarCheck,
	faCircle as faCircleRegular,
	faCopy,
	faSquare,
	faSun as faSunHollow,
} from '@fortawesome/free-regular-svg-icons';
import {
	faCircleRight,
	faCircleLeft,
	faArrowLeft,
	faArrowRight,
	faBars,
	faBell,
	faDownload,
	faLink,
	faShare,
	faShareSquare,
	faSpinner,
	faBan,
	faChevronDown,
	faChevronUp,
	faUser,
	faGear,
	faRightFromBracket,
	faFire,
	faWandSparkles,
	faPuzzlePiece,
	faRocket,
	faX,
	faPlus,
	faRotate,
	faCalendar,
	faLocationDot,
	faMagnifyingGlass,
	faFileInvoiceDollar,
	faFilter,
	faCheck,
	faHouse,
	faPenToSquare,
	faTicket,
	faUsers,
	faBullhorn,
	faChartSimple,
	faMessage,
	faLaptop,
	faLock,
	faMoon,
	faSun,
	faTrash,
	faEllipsisVertical,
	faUpRightAndDownLeftFromCenter,
	faUnlock,
	faDownLeftAndUpRightToCenter,
	faUpload,
	faPrint,
	faQrcode,
	faInfoCircle,
	faPaperPlane,
	faTriangleExclamation,
	faComment,
	faEnvelope,
	faPencil,
	faPersonRunning,
	faPhone,
	faHeart,
	faEnvelopesBulk,
	faUsersLine,
	faCode,
	faVideoCamera,
	faExclamationTriangle,
	faChevronLeft,
	faChevronRight,
	faGlobe,
	faImage,
	faCommentDots,
	faMoneyBill1Wave,
	faHandHoldingDollar,
	faDollarSign,
	faUniversalAccess,
	faBusSimple,
	faWheelchairMove,
	faDoorOpen,
	faToiletPaper,
	faEyeLowVision,
	faEarListen,
	faHandsAslInterpreting,
	faUtensils,
	faMugSaucer,
	faBowlFood,
	faBroom,
	faChair,
	faCouch,
	faDog,
	faSquareParking,
	faQuestion,
	faEye,
	faPlay,
	faStar,
	faCircleCheck,
	faCircleXmark,
	faFolderOpen,
	faFeatherPointed,
	faSort,
	faGripVertical,
	faArrowUpRightFromSquare,
	faTable,
	faTags,
	faPercent,
	faRefresh,
	faExclamationCircle,
	faClock,
	faInfinity,
	faCircleHalfStroke,
	faMagnifyingGlassPlus,
	faMagnifyingGlassMinus,
	faStop,
} from '@fortawesome/free-solid-svg-icons';

import {
	faFacebook,
	faGoogle,
	faInstagram,
	faTiktok,
	faXTwitter,
	faWpforms,
	faYoutube,
	faLinkedin,
	faPinterest,
	faSnapchat,
	faTwitch,
	faDiscord,
	faWhatsapp,
	faTelegram,
	faReddit,
	faMedium,
	faTumblr,
} from '@fortawesome/free-brands-svg-icons';

export enum IconType {
	ARROW_COLLAPSE = 'arrowCollapse',
	ARROW_EXPAND = 'arrowExpand',
	ARROW_LEFT = 'arrowLeft',
	ARROW_RIGHT = 'arrowRight',
	ARROW_LEFT_CIRCLE = 'arrowLeftCircle',
	ARROW_RIGHT_CIRCLE = 'arrowRightCircle',
	BOWL_FOOD = 'bowlFood',
	BROOM = 'broom',
	BELL = 'bell',
	BULL_HORN = 'bullHorn',
	BUS = 'bus',
	CAMERA_VIDEO = 'cameraVideo',
	CANCEL = 'cancel',
	CALENDAR = 'calendar',
	CALENDAR_CHECK = 'calendarCheck',
	CHAIR = 'chair',
	CHART = 'chart',
	CHECK = 'check',
	CHEVRON_DOWN = 'chevronDown',
	CHEVRON_LEFT = 'chevronLeft',
	CHEVRON_RIGHT = 'chevronRight',
	CHEVRON_UP = 'chevronUp',
	CIRCLE = 'circle',
	CIRCLE_CHECK = 'circleCheck',
	CIRCLE_X = 'circleXMark',
	CLOCK = 'clock',
	CODE = 'code',
	COPY = 'copy',
	COMMENT = 'comment',
	COMMENT_DOTS = 'commentDots',
	COUCH = 'couch',
	DOG = 'dog',
	DOLLAR = 'dollar',
	DONATION = 'donation',
	DOWNLOAD = 'download',
	EDIT = 'edit',
	ELLIPSIS = 'ellipsis',
	ENVELOPE = 'envelope',
	ENVELOPES_BULK = 'envelopesBulk',
	EXCLAMATION_CIRCLE = 'exclamationCircle',
	EXCLAMATION_TRIANGLE = 'exclamationTriangle',
	EXTERNAL = 'external',
	EYE = 'eye',
	FACEBOOK = 'facebook',
	FEATHER = 'feather',
	FILTER = 'filter',
	FIRE = 'fire',
	FOLDER_EMPTY = 'folderEmpty',
	FORM = 'form',
	GEAR = 'gear',
	GLOBE = 'globe',
	GOOGLE = 'google',
	GRIP = 'grip',
	HALF_CIRCLE = 'halfCircle',
	HAMBURGER = 'hamburger',
	HANDS_ASL_INTERPRETING = 'handsAslInterpreting',
	HEART = 'heart',
	HOUSE = 'house',
	IMAGE = 'image',
	INFINITY = 'infinity',
	INFO_CIRCLE = 'infoCircle',
	INSTAGRAM = 'instagram',
	INVOICE = 'invoice',
	LAPTOP = 'laptop',
	LINK = 'link',
	LISTEN = 'listen',
	LOCATION_DOT = 'locationDot',
	LOCK = 'lock',
	LOGOUT = 'logout',
	LOW_VISION = 'lowVision',
	MAGNIFYING_GLASS = 'magnifyingGlass',
	MESSAGE = 'message',
	MONEY_BILL = 'moneyBill',
	MOON = 'moon',
	MUG_SAUCER = 'mugSaucer',
	OPEN_DOOR = 'openDoor',
	PAPER_PLANE = 'paperPlane',
	PARKING = 'parking',
	PENCIL = 'pencil',
	PERCENT = 'percent',
	PERSON_RUNNING = 'personRunning',
	PHONE = 'phone',
	PLAY = 'play',
	PLUS = 'plus',
	PRINT = 'print',
	PUZZLE = 'puzzle',
	QR_CODE = 'qrCode',
	QUESTION = 'question',
	REFRESH = 'refresh',
	ROCKET = 'rocket',
	ROTATE = 'rotate',
	SHARE = 'share',
	SHARE_SQUARE = 'shareSquare',
	SORT = 'sort',
	SPINNER = 'spinner',
	SQUARE = 'square',
	STAR = 'star',
	STOP = 'stop',
	SUN = 'sun',
	SUN_HOLLOW = 'sunHollow',
	TABLE = 'table',
	TAGS = 'tags',
	TICKET = 'ticket',
	TIKTOK = 'tiktok',
	TOILET_PAPER = 'toiletPaper',
	TRASH = 'trash',
	TWITTER = 'twitter',
	UNLOCK = 'unlock',
	UNIVERSAL_ACCESS = 'universalAccess',
	UPLOAD = 'upload',
	USER = 'user',
	USERS = 'users',
	USERS_BULK = 'usersBulk',
	UTENSILS = 'utensils',
	WAND = 'wand',
	WARNING = 'warning',
	WHEELCHAIR = 'wheelchair',
	X = 'x',
	YOUTUBE = 'youtube',
	LINKEDIN = 'linkedin',
	PINTEREST = 'pinterest',
	SNAPCHAT = 'snapchat',
	TWITCH = 'twitch',
	DISCORD = 'discord',
	WHATSAPP = 'whatsapp',
	TELEGRAM = 'telegram',
	REDDIT = 'reddit',
	MEDIUM = 'medium',
	TUMBLR = 'tumblr',
	ZOOM_IN = 'zoomIn',
	ZOOM_OUT = 'zoomOut',
}

export const Icons: {
	[id in IconType]: IconDefinition;
} = {
	arrowCollapse: faDownLeftAndUpRightToCenter,
	arrowExpand: faUpRightAndDownLeftFromCenter,
	arrowLeft: faArrowLeft,
	arrowRight: faArrowRight,
	arrowLeftCircle: faCircleLeft,
	arrowRightCircle: faCircleRight,
	bowlFood: faBowlFood,
	broom: faBroom,
	bell: faBell,
	bullHorn: faBullhorn,
	bus: faBusSimple,
	cameraVideo: faVideoCamera,
	calendar: faCalendar,
	calendarCheck: faCalendarCheck,
	cancel: faBan,
	chair: faChair,
	chart: faChartSimple,
	check: faCheck,
	chevronDown: faChevronDown,
	chevronLeft: faChevronLeft,
	chevronRight: faChevronRight,
	chevronUp: faChevronUp,
	circle: faCircleRegular,
	circleCheck: faCircleCheck,
	circleXMark: faCircleXmark,
	clock: faClock,
	code: faCode,
	copy: faCopy,
	comment: faComment,
	commentDots: faCommentDots,
	couch: faCouch,
	dog: faDog,
	dollar: faDollarSign,
	donation: faHandHoldingDollar,
	download: faDownload,
	edit: faPenToSquare,
	ellipsis: faEllipsisVertical,
	envelope: faEnvelope,
	envelopesBulk: faEnvelopesBulk,
	exclamationCircle: faExclamationCircle,
	exclamationTriangle: faExclamationTriangle,
	external: faArrowUpRightFromSquare,
	eye: faEye,
	facebook: faFacebook as IconDefinition,
	feather: faFeatherPointed,
	filter: faFilter,
	fire: faFire,
	folderEmpty: faFolderOpen,
	form: faWpforms as IconDefinition,
	gear: faGear,
	globe: faGlobe,
	google: faGoogle as IconDefinition,
	grip: faGripVertical,
	halfCircle: faCircleHalfStroke,
	hamburger: faBars,
	handsAslInterpreting: faHandsAslInterpreting,
	heart: faHeart,
	house: faHouse,
	image: faImage,
	infinity: faInfinity,
	infoCircle: faInfoCircle,
	instagram: faInstagram as IconDefinition,
	invoice: faFileInvoiceDollar,
	laptop: faLaptop,
	link: faLink,
	listen: faEarListen,
	locationDot: faLocationDot,
	lock: faLock,
	logout: faRightFromBracket,
	lowVision: faEyeLowVision,
	magnifyingGlass: faMagnifyingGlass,
	message: faMessage,
	moneyBill: faMoneyBill1Wave,
	moon: faMoon,
	mugSaucer: faMugSaucer,
	openDoor: faDoorOpen,
	paperPlane: faPaperPlane,
	parking: faSquareParking,
	pencil: faPencil,
	percent: faPercent,
	personRunning: faPersonRunning,
	phone: faPhone,
	play: faPlay,
	plus: faPlus,
	print: faPrint,
	puzzle: faPuzzlePiece,
	qrCode: faQrcode,
	question: faQuestion,
	refresh: faRefresh,
	rocket: faRocket,
	rotate: faRotate,
	share: faShare,
	shareSquare: faShareSquare,
	sort: faSort,
	spinner: faSpinner,
	square: faSquare,
	star: faStar,
	stop: faStop,
	sun: faSun,
	sunHollow: faSunHollow,
	table: faTable,
	tags: faTags,
	ticket: faTicket,
	tiktok: faTiktok as IconDefinition,
	toiletPaper: faToiletPaper,
	trash: faTrash,
	twitter: faXTwitter as IconDefinition,
	unlock: faUnlock,
	universalAccess: faUniversalAccess,
	upload: faUpload,
	user: faUser,
	users: faUsers,
	usersBulk: faUsersLine,
	utensils: faUtensils,
	wand: faWandSparkles,
	warning: faTriangleExclamation,
	wheelchair: faWheelchairMove,
	x: faX,
	youtube: faYoutube as IconDefinition,
	linkedin: faLinkedin as IconDefinition,
	pinterest: faPinterest as IconDefinition,
	snapchat: faSnapchat as IconDefinition,
	twitch: faTwitch as IconDefinition,
	discord: faDiscord as IconDefinition,
	whatsapp: faWhatsapp as IconDefinition,
	telegram: faTelegram as IconDefinition,
	reddit: faReddit as IconDefinition,
	medium: faMedium as IconDefinition,
	tumblr: faTumblr as IconDefinition,
	zoomIn: faMagnifyingGlassPlus,
	zoomOut: faMagnifyingGlassMinus,
};