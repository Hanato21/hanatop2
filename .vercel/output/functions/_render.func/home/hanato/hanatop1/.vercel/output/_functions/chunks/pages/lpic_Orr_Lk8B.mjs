/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>LPIC-2 is the second certification in the multi-level professional certification program of the Linux Professional Institute (LPI). The LPIC-2 will validate the candidate’s ability to administer small to medium–sized mixed networks.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>LPI ID: LPI000530892</span></span>\n<span class=\"line\"><span>code: bapf35qxtc</span></span>\n<span class=\"line\"><span></span></span></code></pre>";

				const frontmatter = {"title":"CERTIFIED  LPIC-2 (Active)","org":"Linux Professional Institute","tags":["Tactical Medicine","First Aid Training","Critical Care","Triage Protocol"],"url":"https://cs.lpi.org/caf/Xamman/certification","date":2023};
				const file = "/home/hanato/hanatop1/src/pages/certificates/lpic.md";
				const url = "/certificates/lpic";
				function rawContent() {
					return "LPIC-2 is the second certification in the multi-level professional certification program of the Linux Professional Institute (LPI). The LPIC-2 will validate the candidate’s ability to administer small to medium–sized mixed networks.\n\n```\nLPI ID: LPI000530892\ncode: bapf35qxtc\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
