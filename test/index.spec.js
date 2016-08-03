var expect = chai.expect;

describe('index.spec.js', function () {
  it('appendCss should import css', function (done) {
    this.timeout(5000);
    var prevBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
    DynamicCss.appendCss('test/a.css');

    setTimeout(function () {
      var nextBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
      expect(prevBackgroundColor).to.not.equal(nextBackgroundColor);

      DynamicCss.removeCss('test/a.css');
      setTimeout(function () {
        var lastBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
        expect(lastBackgroundColor).to.equal(prevBackgroundColor);
        done();
      }, 1000);
    }, 1000);
  })
});
