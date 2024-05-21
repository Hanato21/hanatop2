/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This is a certification for IT engineers provided by the non-profit organization LPI-Japan in Japan and by EDUCO for outside of Japan to certify the techniques and knowledge concerning the open source database (OSS-DB) properly and strictly from a neutral perspective.</p>";

				const frontmatter = {"title":"Certified OSS-DB Exam Silver (Active)","org":"LPI-JAPAN","tags":["SQL","PostgreSQL"],"url":"https://ma.educo-j.or.jp/d/EID900038927/fzaey2zrgk","date":2023};
				const file = "/home/hanato/hanatop1/src/pages/certificates/ossdb.md";
				const url = "/certificates/ossdb";
				function rawContent() {
					return "\nThis is a certification for IT engineers provided by the non-profit organization LPI-Japan in Japan and by EDUCO for outside of Japan to certify the techniques and knowledge concerning the open source database (OSS-DB) properly and strictly from a neutral perspective.\n";
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
