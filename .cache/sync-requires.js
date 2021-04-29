const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---docs-configurationnavigation-menu-mdx": hot(preferDefault(require("/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/docs/configurationnavigation-menu.mdx"))),
  "component---docs-configurationorganizing-documentation-mdx": hot(preferDefault(require("/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/docs/configurationorganizing-documentation.mdx"))),
  "component---docs-getting-startedinstallation-mdx": hot(preferDefault(require("/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/docs/getting-startedinstallation.mdx"))),
  "component---docs-getting-startedmanual-installation-mdx": hot(preferDefault(require("/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/docs/getting-startedmanual-installation.mdx"))),
  "component---docs-leistungenwartung-mdx": hot(preferDefault(require("/Users/annika/Dropbox/Arbeit/wischn/05_code/bergerhtttt/docs/leistungenwartung.mdx")))
}

