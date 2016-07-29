// TODO : need to test later. It does not been completed yet.
//var phantom = require('phantom');
//var path = require('path');
//
//const indexHtmlPath = path.resolve(__dirname, './index.html');
//
//var phInstance = null;
//var sitePage = null;
//var prevBodyStyle = null;
//
//phantom
//  .create()
//  .then(instance => {
//    phInstance = instance;
//    return instance.createPage();
//  })
//  .then(page => {
//    sitePage = page;
//    return page.open(indexHtmlPath);
//  })
//  .then(status => {
//    if (status !== 'success') {
//      console.error('Fail to open index.html file');
//      phInstance.exit();
//    }
//
//    return waitUntilPageReady(sitePage);
//  })
//  .then(function () {
//    return sitePage.evaluate(function () {
//      return document.getElementsByTagName('body')[0];
//    });
//  })
//  .then(function (body) {
//    prevBodyStyle = body.style;
//    return true;
//  })
//  .then(function () {
//    return sitePage.evaluate(function () {
//      //window.DynamicCss.appendCss('./a.css');
//      return document.getElementsByTagName('body')[0];
//    });
//  })
//  .then(function (body) {
//    console.log(body);
//    phInstance.exit();
//  });
//
//function waitUntilPageReady(page) {
//  return new Promise(function (res, rej) {
//    function setTimeoutUntilPageReady() {
//      setTimeout(function () {
//        page
//          .evaluate(function () {
//            return document.readyState;
//          })
//          .then(readyState => {
//            if (readyState !== 'complete') {
//              setTimeoutUntilPageReady();
//              return;
//            }
//            res();
//          });
//      });
//    }
//
//    setTimeoutUntilPageReady();
//  });
//}