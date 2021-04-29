module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				manualInit: true,
				modulePath: `./src/cms/cms.js`, // This needs to be relative to the .docz directory
			},
		},
		{
			resolve: "gatsby-theme-docz",
			options: {
				/* your custom options */
			},
		},
	],
};
