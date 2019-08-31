const { Given, When, Then } = require('cucumber');

When('I search for {string}', async function (searchQuery) {
    await this.page.preformSearch(searchQuery);
}); 