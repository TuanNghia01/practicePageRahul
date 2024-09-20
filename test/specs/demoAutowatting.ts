    describe('Tets Autowatting' , () => {
// demmo autowatting
it('Checkking autowatting' , async () => {
await browser.url('https://www.example.com/');
await browser.setTimeout({implicit:5000});
const gettitle = await $('h1');
 expect(await gettitle).toHaveText('Example Domain');

// demo

})



    })