module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				manualInit: true,
				modulePath: `./src/cms/cms.js`, // for custom preview in the Netlify CMS
				customizeWebpackConfig: (config) => (config.node.fs = "empty"),
				// modulePath: `./cms.js`, // This needs to be relative to the .docz directory
				// 		 customizeWebpackConfig: (config, { stage, plugins }) => {
				//   config.resolve = {
				//     ...config.resolve,
				//     alias: {
				//       ...config.resolve.alias,
				//       path: require.resolve("path-browserify")
				//     },
				//     fallback: {
				//       ...config.resolve.fallback,
				//       fs: false,
				//       child_process: false,
				//       module: false
				//     }
				//   };
				//   if (stage === "build-javascript" || stage === "develop") {
				//     config.plugins.push(plugins.provide({ process: "process/browser" }));
				//   }
				//   config.plugins.push(plugins.provide({ Buffer: ["buffer", "Buffer"] }));
				// },
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-0RMN59H4VC", // Google Analytics / GA
					// 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
					// 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					// optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 350,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: true,
					// Avoids sending pageview hits from custom paths
					exclude: ["/preview/**", "/do-not-track/me/too/"],
				},
			},
		},
		"gatsby-theme-docz",
	],
};
