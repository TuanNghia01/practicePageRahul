import {$} from '@wdio/globals';
import Page from '../url/pageRahul';
Page
describe('Practice selector element Page Practice Rahul', () => {
    // Open page hrsale
    beforeEach(async () => {
        await browser.maximizeWindow();
        const pagehrsale = new Page();
        await pagehrsale.openRahul();
    });
    afterEach(async () => {
         await browser.back();


    })
    it('Click on the logo susessfull', async () => {
    
        const getLinkLogo = await $('a img.logoClass');
        await getLinkLogo.click();
 
        await expect( browser).toHaveUrl(expect.stringContaining('rahulshettyacademy'));
        
      });
    
      // Checking expect element link text
      it('Click link header successful', async () => {
        
        const getLinkText = await $('=Free Access to InterviewQues/ResumeAssistance/Material');
        await getLinkText.click();
        await expect( getLinkText).toHaveUrl(expect.stringContaining('/documents-request'));
      });
    // Checking expect element button practice
  it('Click button practice successful', async () => {
   
    const getBtnPractice = await $('button=Practice');
    await getBtnPractice.click();
    await expect(  getBtnPractice).toBeDisplayed();
    await expect( getBtnPractice).toBeClickable();
  });

  // Checking expect element button login
  it('Click button login successful', async () => {
    const getBtnLogin = await $('button=Login');
    await getBtnLogin.click();
    await  expect( getBtnLogin).toBeDisplayed();
    await expect( getBtnLogin).toBeClickable();
  });

  // Checking expect element button signup
  it('Click button signup successful', async () => {
    const getBtnSignup = await $('button=Signup');
    await getBtnSignup.click();
    await expect(   getBtnSignup).toBeDisplayed();
    await expect(   getBtnSignup).toBeClickable();
  });

  // Checking expect element radio button
  it('Click radio button successful', async () => {
    const getRadioBtn1 = await $('input[value="radio1"]');
    const getRadioBtn2 = await $('input[value="radio2"]');
    const getRadioBtn3 = await $('input[value="radio3"]');
    await getRadioBtn1.click();
     expect(getRadioBtn1).toBeSelected();
     expect(getRadioBtn2).not.toBeSelected();
     expect(getRadioBtn3).not.toBeSelected();
  });

  // Checking expect element suggestion
  it(' Show suggestion sucessfull', async () => {
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
     await expect(selectedValue).toBe('option1');
  });


// checking element checkbox

    it('Check and uncheck checkboxes', async () => {
 
        // 2. Xác định các checkbox
        const checkBox1 = await $('input#checkBoxOption1');
        const checkBox2 = await $('input#checkBoxOption2');
        const checkBox3 = await $('input#checkBoxOption3');
     
        await checkBox1.click();
        await expect(checkBox1).toBeClickable();
        await expect(checkBox2).not.toBeClickable();
        await expect(checkBox3).not.toBeClickable();


        
    });
 
// checkking option is click
it('Click is checkbox option' , async () => {
  const checkBox1 = await $('input#checkBoxOption1');
  const checkBox2 = await $('input#checkBoxOption2');
  const checkBox3 = await $('input#checkBoxOption3');
  // check box cả 3 nút đều hoạt động
  await checkBox1.click();
  await checkBox1.waitForClickable();
  await checkBox2.click();
  await checkBox2.waitForClickable();
  await checkBox3.click();
  await expect(checkBox1).toBeSelected();
  

})
    // checkking open tab
    it('Click a new open tab sucessfull' , async () => {
     const  getOpenTab = await $("a=Open Tab");
      await getOpenTab.click();
         
        await expect(getOpenTab).toHaveText('qaclickacademy');


    });

    // checkking dialog notice alert
    it('Show content alert sucessfull' , async () => {
   const inpAlert = await $('input[name="enter-name"]');
   const inpbtnAlert = await $('input#alertbtn');
   const inpbtnConfirm = await $('confirmbtn');
   await inpAlert.setValue('Tuan Nghia');
   await inpbtnAlert.click();
   await expect(inpbtnAlert).toHaveText('Hello Tuan Nghia, share this practice page and share your knowledge');



    })
    // checkking dialog notice confirm
    it('Show content confirm sucessfull' , async () => {
      const inpAlert = await $('input[name="enter-name"]');
      
      const inpbtnConfirm = await $('input#confirmbtn');
      await inpAlert.setValue('Tuan Nghia');
      await inpbtnConfirm.click();
     await expect(inpbtnConfirm).toHaveText('Hello Tuan Nghia, share this practice page and share your knowledge');
   
   
   
       })
    
    
    // checking table 
    it('Table is displayed correctly', async () => {
      const table = await $('#product');
     await  expect(table).toBeDisplayed();
    });

    it('Correct number of rows', async () => {
      const rows = await $$('#product tbody tr');
      await expect(rows).toHaveLength(11); // 10 data rows + 1 header row
    });
//  checkking mouse hover
it('Open Mousse hover' , async () => {
const getMouseHover = await $('button#mousehover');
await getMouseHover.moveTo();

const getContentHover = await $('div.mouse-hover-content');
await expect(getContentHover).toBeDisplayed();

});

it('Table header fixed while scrolling', async () => {
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
it('Verify content inside in iframe', async () => {
  // Xác định iframe và chuyển đổi vào iframe
  const iframe = await $('iframe#courses-iframe');
  await browser.switchToFrame(iframe);

  // Kiểm tra tiêu đề trang bên trong iframe
  const iframeTitle = await browser.getTitle();
  console.log('Tiêu đề trang trong iframe:', iframeTitle);

  // Kiểm tra tiêu đề trang iframe có chứa từ "Academy"
   expect(iframeTitle).toContain('Rahul Shetty Academy');

  // Quay lại trang chính
  await browser.switchToParentFrame();
});


});