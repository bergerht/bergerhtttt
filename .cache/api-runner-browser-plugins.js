module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"manualInit":true,"modulePath":"/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/src/cms/cms.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-0RMN59H4VC"],"gtagConfig":{"anonymize_ip":true,"cookie_expires":350},"pluginConfig":{"head":false,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"remarkPlugins":[[null,{"type":"yaml","marker":"-"}],null],"rehypePlugins":[null,null],"gatsbyRemarkPlugins":[],"defaultLayouts":{"default":"/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/node_modules/gatsby-theme-docz/src/base/Layout.js"},"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt"},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-helmet-async/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-docz/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
