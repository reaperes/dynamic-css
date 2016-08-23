var _id = 1;

function existsCss(href) {
  var stylesheets = document.styleSheets;
  var i;

  for (i=0; i<stylesheets.length; i++) {
    if (stylesheets[i].href === href) {
      return true;
    }
  }
  return false;
}

function appendCss(href) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  var id = '__dynamic_css_' + _id++ + '__';
  link.id = id;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  head.appendChild(link);
  return id;
}

function removeCss(href) {
  var i, link;
  var links = document.getElementsByTagName('link');
  var absoluteHref = absolutePath(href);

  for (i=0; i<links.length; i++) {
    link = links[i];
    if (link.href === absoluteHref) {
      link.remove();
      return;
    }
  }
}

function absolutePath(href) {
  var pat = /^https?:\/\//i;
  if (pat.test(href)) {
    return href;
  }

  var link = document.createElement("a");
  link.href = href;
  return (link.protocol + "//" + link.host + link.pathname + link.search + link.hash);
}

module.exports = {
  existsCss: existsCss,
  appendCss: appendCss,
  removeCss: removeCss
};
