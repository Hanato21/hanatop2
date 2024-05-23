/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"MASTER OF Electrical Engineering and Electronics Program","location":"Tokyo Japan","url":"https://www.kogakuin.ac.jp/index.html","institute":"Kogakuin University","date":"2016-2018","tags":["Electric","Telecommunications","Linux","TCP/IP","CUBIC TCP","Compound TCP","Codel","Queue Management","Kernel Compile","4G/5G","Android","TCP BBR","VPN"]};
				const file = "/home/hanato/hanatop2/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "";
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
