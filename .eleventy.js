module.exports = function (eleventyConfig) {
	let markdownIt = require("markdown-it");
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
	let markdownLib = markdownIt(options).disable("code");
	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addLayoutAlias("index", "layouts/index.njk");
	eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

	// Universal Shortcodes
	eleventyConfig.addShortcode("button", function (color, colorBg, btnText) {
		return `
			<!-- BUTTON SECTION -->
			<div align="center">
				<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
					<tr>
						<td align="center">
							<table border="0" cellspacing="0" cellpadding="0" role="button">
								<tr>
									<td align="center" bgcolor="${colorBg}">
										<a href="{{config.links.home}}" style="font-family: Arial, sans-serif; color: ${color}; padding: 12px 18px; border: 1px solid transparent; display: inline-block;font-size: 18px;font-weight:bold;text-align:center;text-decoration:none;text-transform: uppercase;">
											<span class="btn">${btnText}</span>
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<br />
			</div>
		`;
	});

	return {
		htmlTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		markdownTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
	};
};
