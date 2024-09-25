const SVG_PLUGINS = [
	{ removeComments: true },
	{ removeTitle: true },
	{ removeDesc: true },
	{ removeUselessDefs: true },
	{ removeEmptyAttrs: true },
	{ removeEmptyText: true },
	{ removeEmptyContainers: true },
	{ convertShapeToPath: true },
	{ mergePaths: true },
	{ removeMetadata: true },
	{ removeXMLProcInst: true },
	{ cleanupEnableBackground: true },
	{ cleanupIDs: true },
	{ inlineStyles: true },
	{ removeUnusedNS: true },
	{ collapseGroups: true },
	{ removeDuplicateAttrs: true },
	{ convertStyleToAttrs: true },
	{ removeStyleElement: true },
	{ removeViewBox: false }, // Оставлено как false, если это необходимо
]

export default {
	plugins: SVG_PLUGINS,
}
