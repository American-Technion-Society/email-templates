module.exports = {
	environment: process.env.ELEVENTY_ENV,
	name: 'American Technion Society',
	title: "ATS Email",
	salutation: "Dear [[?xx[[S1:first_name]]xx::xxxx::Friend::[[S1:first_name]]]]",
	address: {
		line1: '55 East 59th Street',
		line2: '',
		city: 'New York',
		state: 'NY',
		zip: '10022',
	},
	logo: {
		blue: 'http://support.ats.org/images/content/pagebuilder/ATS-logo-blue.png',
		white: 'https://secure2.convio.net/ats/images/content/pagebuilder/ats-logo-white.png',
		alumni: 'http://support.ats.org/images/content/pagebuilder/alumni-logo.png',
		alumniWhite: '',
	},
	links: {
		home: 'https://ats.org',
		donate: 'https://secure2.convio.net/ats/site/Donation2?df_id=2302&mfc_pref=T&2302.donation=form1&s_src=email&s_subsrc=footer_donate',
		privacy: 'https://ats.org/privacy-policy/',
		unsub: 'http://support.ats.org/site/CO',
	},
	signature: {
		name: 'Michael Waxman-Lenz',
		title: 'Chief Executive Officer',
		sign: 'https://secure2.convio.net/ats/images/content/pagebuilder/Michael_Waxman-Lenz_Signature.png?t=1643840151707',
		headshot: '',
	},
	theme: {
		colors: {
			atsBlue: '#194595',
			lightSeaGreen: '#3ebbb1',
			pineGreen: '#037b77',
			goldfish: '#f7942f',
			altPink: '#c3217f',
			altRed: '#dd4f26',
			altBlue: '#0090af',
			white: '#ffffff',
			test: "#2b365e",
			light: {
				text: '#cecece',
				box: '#f3f3f3',
				bg: '#ffffff',
			},
			dark: {
				text: '#3c3532',
				smallText: '#333333',
				box: '#252527',
				bg: '#1c1c1e',
			}
		},
		font: {
			size: '18px',
			family: 'Arial, Verdana, Helvetica, sans-serif',
			weight: 'normal',
			lineHeight: '21px',
			textAlign: 'left',
			centerAlign: 'center',
		},
		default: {
			table: 'role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="emailwrapto100pc" width="600"',
			td: 'class="emailbodytext" style="color: #3c3532; font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 18px; line-height: 26px; padding: 15px 0 20px 0" valign="top"',
		},
	},
};
