import { GeistSans } from 'geist/font/sans';
import './globals.css';
import NavigationBar from '@/components/Nav/navigation-bar';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Counter-Strike News & Coverage | HLTV.org',
	description:
		'Welcome to the leading Counter-Strike site in the world, featuring news, demos, pictures, statistics, on-site coverage and much much more!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={GeistSans.className}>
			<body className='bg-background text-foreground'>
				<main className='min-h-screen flex flex-col items-center'>
					<NavigationBar />
					{/* Background Padding */}
					<div className='pt-14 pb-5'>{children}</div>
				</main>
			</body>
		</html>
	);
}
