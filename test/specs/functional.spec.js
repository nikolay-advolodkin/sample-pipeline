const assert = require('assert');

describe('Temperature converter', () => {
    it('should have the correct title', () => {
        browser.url('/');
        
        const actualTitle = browser.getText(".App-title");
        const expectedTitle = "Welcome to Celcius to Farhenheit Calculator!"

        assert.equal(actualTitle, expectedTitle);
    });

    it('should have the logo', () => {
        browser.url('/');

        assert.equal(browser.isVisible(".App-logo"), true);
    });

    it('should show the correct conversion message', () => {
        assert.fail("not implemented");
    });
});