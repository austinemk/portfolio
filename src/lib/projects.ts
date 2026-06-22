export type Project = {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
	link?: string;
	github?: string;
};

export const projects: Project[] = [
	{
		id: '001',
		title: 'Vitals Widget',
		description:
			'view cpu usage, ram , gpu and tempearature anywhere on your desktop.An extension For linux gnome users version 45+. Has various settings to help you style it the way you want. Built with typescript and xml and complied to javascript',
		image: 'vitals-widget',
		date: 'dec, 2025',
		link: 'https://extensions.gnome.org/extension/9072/vitals-widget/',
		github: 'https://github.com/austinemk/vitals-widget'
	},
	{
		id: '002',
		title: 'Linktui',
		description:
			'Manage wifi, bluetooth and vpn all from your terminal. Built with go offers minimalist single binary that takes less ram and almost zero cpu usage',
		image: 'linktui',
		date: 'dec, 2025',
		github: 'https://github.com/austinemk/linktui'
	}
];
