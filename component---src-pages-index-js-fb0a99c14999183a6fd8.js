webpackJsonp([35783957827783],{299:function(e,t,n){function r(){return l((Math.random()*m<<0).toString(c),f)}function a(){return u=u<m?u:0,u++,u-1}function o(){var e="c",t=(new Date).getTime().toString(c),n=l(a().toString(c),f),o=i(),u=r()+r();return e+t+n+o+u}var i=n(300),l=n(162),u=0,f=4,c=36,m=Math.pow(c,f);o.slug=function(){var e=(new Date).getTime().toString(36),t=a().toString(36).slice(-4),n=i().slice(0,1)+i().slice(-1),o=r().slice(-2);return e.slice(-2)+t+n+o},o.fingerprint=i,e.exports=o},300:function(e,t,n){var r=n(162),a="object"==typeof window?window:self,o=Object.keys(a).length,i=navigator.mimeTypes?navigator.mimeTypes.length:0,l=r((i+navigator.userAgent.length).toString(36)+o.toString(36),4);e.exports=function(){return l}},162:function(e,t){e.exports=function(e,t){var n="000000000"+e;return n.substr(n.length-t)}},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var o=a(["\n  display: flex;\n  text-decoration: none;\n  margin: 0.5em 0;\n"],["\n  display: flex;\n  text-decoration: none;\n  margin: 0.5em 0;\n"]),i=a(["\n  text-decoration: none;\n  list-style: none;\n  margin: 0 0.2em;\n  font-family: 'Goudy Bookletter 1911', sans-serif;\n"],["\n  text-decoration: none;\n  list-style: none;\n  margin: 0 0.2em;\n  font-family: 'Goudy Bookletter 1911', sans-serif;\n"]),l=n(2),u=r(l),f=n(25),c=r(f),m=n(21),d=r(m),s=n(43),g=r(s),p=n(22),y=n(299),x=r(y),v=(d.default.ul(o),d.default.li(i),function(e){var t=e.data,n=t.allMarkdownRemark.edges;return u.default.createElement(p.Column,{page:!0},u.default.createElement(p.Title1,{margin:"1em 0 0 0"},"Code. Learn. Write. Teach"),n.map(function(e){var t=e.node,n=t.frontmatter;return u.default.createElement(p.Column,{margin:"1.5em 0",key:(0,x.default)()},u.default.createElement(p.Title2,{margin:"0 0 .5em 0"},u.default.createElement(c.default,{to:n.path},n.title)),u.default.createElement(p.Text,{color:"#808080",margin:"0"},n.date),u.default.createElement(p.Text,null,n.excerpt))}),u.default.createElement(g.default,null))});t.query="** extracted graphql fragment **";t.default=v}});
//# sourceMappingURL=component---src-pages-index-js-fb0a99c14999183a6fd8.js.map