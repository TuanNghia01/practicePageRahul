import { expect } from '@wdio/globals';
import Page from '../pageobjects/page';

describe('Practice Selector Element', () => {
  //Open the page before each test case
  beforeEach(async () => {
    const page = new Page();
    await page.open(); // This will reload the page before every test
  });
// back rahul
afterEach(async () => {

  await browser.back();
  const url = browser.getUrl();
  await expect(url).toHaveUrl('https://rahulshettyacademy.com/AutomationPractice/');
})
  // Checking expect element logo link
  it('Home page redirects successfully with: clicking on the logo', async () => {
    
    const getLinkLogo = await $('a img.logoClass');
    await getLinkLogo.click();
    await expect(browser).toHaveUrl('rahulshettyacademy.com/');
  });

  // Checking expect element link text
  it('Go to page document-requirements successfully with: Click', async () => {
    
    const getLinkText = await $('=Free Access to InterviewQues/ResumeAssistance/Material');
    await getLinkText.click();
    await expect(getLinkText).toHaveUrl('documents-request');
  });

  // Checking expect element button home
  it('Go to page home successfully with: On click button home', async () => {
    
    const getBtnHome = await $('button=Home');
    await getBtnHome.click();
    await expect(getBtnHome).toHaveAttribute('href', 'https://www.rahulshettyacademy.com/');
  });

  // Checking expect element button practice
  it.only('Go to page practice successfully with: On click button practice', async () => {
   
    const getBtnPractice = await $('button=Practice');
    await getBtnPractice.click();
    await expect(getBtnPractice).toBeDisplayed();
    await expect(getBtnPractice).toBeClickable();
  });

  // Checking expect element button login
  it('Go to page home successfully with: On click button login', async () => {
    const getBtnLogin = await $('button=Login');
    await getBtnLogin.click();
    await expect(getBtnLogin).toBeDisplayed();
    await expect(getBtnLogin).toBeClickable();
  });

  // Checking expect element button signup
  it('Go to page home successfully with: On click button signup', async () => {
    const getBtnSignup = await $('button=Signup');
    await getBtnSignup.click();
    await expect(getBtnSignup).toBeDisplayed();
    await expect(getBtnSignup).toBeClickable();
  });

  // Checking expect element radio button
  it('On click radio button successful', async () => {
    const getRadioBtn1 = await $('input[value="radio1"]');
    const getRadioBtn2 = await $('input[value="radio2"]');
    const getRadioBtn3 = await $('input[value="radio3"]');
    await getRadioBtn1.click();
    await expect(getRadioBtn1).toBeSelected();
    await expect(getRadioBtn2).not.toBeSelected();
    await expect(getRadioBtn3).not.toBeSelected();
  });

  // Checking expect element suggestion
  it('Should show suggestion when entering characters', async () => {
    const getInpSuggestion = await $('input#autocomplete');
    const getSuggestionContent = await $('ul li.ui-menu-item');
    await getInpSuggestion.setValue('Viet');
    await expect(getSuggestionContent).toHaveText('Viet Nam');
  });

  // Checking element dropdown
  it('Click dropdown select option value', async () => {
    const getDropdown = await $('select#dropdown-class-example');
    await getDropdown.click();
    await getDropdown.selectByAttribute('value', 'option1');
    const selectedValue = await getDropdown.getValue();
    expect(selectedValue).toBe('option1');
  });


// checking element checkbox

    it('should check and uncheck checkboxes', async () => {
 
        // 2. Xác định các checkbox
        const checkBox1 = await $('input#checkBoxOption1');
        const checkBox2 = await $('input#checkBoxOption2');
        const checkBox3 = await $('input#checkBoxOption3');

        // 3. Kiểm tra các checkbox tồn tại
        expect(await checkBox1.isDisplayed()).toBe(true);
        expect(await checkBox2.isDisplayed()).toBe(true);
        expect(await checkBox3.isDisplayed()).toBe(true);

        // 4. Chọn checkbox 1 và kiểm tra trạng thái
        await checkBox1.click();
        expect(await checkBox1.isSelected()).toBe(true);  // Kiểm tra checkbox đã được chọn

        // 5. Chọn checkbox 2 và kiểm tra trạng thái
        await checkBox2.click();
        expect(await checkBox2.isSelected()).toBe(true);  // Kiểm tra checkbox đã được chọn

        // 6. Bỏ chọn checkbox 1 và kiểm tra trạng thái
        await checkBox1.click();
        expect(await checkBox1.isSelected()).toBe(false);  // Kiểm tra checkbox đã được bỏ chọn

        // 7. Chọn checkbox 3 và kiểm tra trạng thái
        await checkBox3.click();
        expect(await checkBox3.isSelected()).toBe(true);  // Kiểm tra checkbox đã được chọn
    });
 

    // checkking open tab
    it('Should open a new page when clicking a new open tab' , async () => {
const  getOpenTab = await $("=Open Tab");
 await getOpenTab.click();
await expect(getOpenTab).toHaveAttribute('href' , 'https://www.qaclickacademy.com/');
await expect(getOpenTab).toHaveText('qaclickacademy');


    });

    
    
    // // checkking alert and config 
    // it.only('Should show dialog Enter charater   ' , async () => {
    //   const getInputNam = await $('input#name');
    //   const getInputAlert = await $('alertbtn');
    //   const getInputConfirm = await $('confirmbtn');
    //   await browser.waitUntil(async () => {
    //     return await browser.isAlertOpen();
    //   }, { timeout: 5000, timeoutMsg: 'Expected alert to be opened' });
      
    //   const alertText = await browser.getAlertText();
    //   expect(alertText).not.toBeNull();
      
    //   await browser.acceptAlert();

  
  
    // })
    // checking table 
    it('should verify the table is displayed correctly', async () => {
      const table = await $('#product');
     await  expect(table).toBeDisplayed();
    });

    it('should have correct number of rows', async () => {
      const rows = await $$('#product tbody tr');
      await expect(rows).toHaveLength(11); // 10 data rows + 1 header row
    });
//  checkking mouse hover
it('Should display mouse hover content when hover open Mousse hover' , async () => {
const getMouseHover = await $('button#mousehover');
await getMouseHover.moveTo();

const getContentHover = await $('div.mouse-hover-content');
await expect(getContentHover).toBeDisplayed();

});

it('should keep the table header fixed while scrolling', async () => {
  // Đợi cho phần tử có class 'tableFixHead' xuất hiện
  const tableContainer = await $('.tableFixHead');
  await tableContainer.waitForExist({ timeout: 5000 });

  // Lấy tất cả các thẻ <th> trong <thead> (trước khi cuộn)
  const tableHeadersBeforeScroll = await $$('thead th');

  // Cuộn bảng bằng JavaScript
  await browser.execute(() => {
    const container = document.querySelector('.tableFixHead');
    if (container) {
      container.scrollTop = 100;
    } else {
      throw new Error("Element with class 'tableFixHead' not found");
    }
  });

  // Đợi một chút để đảm bảo cuộn đã hoàn tất
  await browser.pause(500);

  // Lấy lại tất cả các thẻ <th> trong <thead> (sau khi cuộn)
  const tableHeadersAfterScroll = await $$('thead th');

  
});




// checking iframe element
it('Should switch to iframe and verify content inside', async () => {
  // Xác định iframe và chuyển đổi vào iframe
  const iframe = await $('iframe#courses-iframe');
  await browser.switchToFrame(iframe);

  // Kiểm tra tiêu đề trang bên trong iframe
  const iframeTitle = await browser.getTitle();
  console.log('Tiêu đề trang trong iframe:', iframeTitle);

  // Kiểm tra tiêu đề trang iframe có chứa từ "Academy"
  await expect(iframeTitle).toContain('Rahul Shetty Academy');

  // Quay lại trang chính
  await browser.switchToParentFrame();
});



});





  
