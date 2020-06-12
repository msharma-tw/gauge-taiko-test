const { openBrowser, goto, write, clear, $, click, text, getCookies, deleteCookies, closeBrowser } = require('taiko');
var locators = require('./objects/locators');
var testdata = require('../env/default/testdata.json');

// Insert step text below as first parameter
step("Goto google.com", async function() {
    try {
        //await openBrowser({headless:false});
        await goto(testdata.baseURL);
    } catch (error) {
        console.error(error);
    }
});
// Insert step text below as first parameter
step("Search for testing", async function() {
	try {
        //await openBrowser({headless:false});
    	await write(testdata.googleSearchText);
    	await clear();
    	await write(testdata.googleSearchText, locators.googleSearchTextbox);
    	await click($(locators.googleSearchButton));
    	await text(testdata.findText).exists();
        await getCookies();
        await deleteCookies();
        await getCookies();
    } catch (error) {
        console.error(error);
    }
});
