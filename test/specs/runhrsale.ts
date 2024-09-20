import {expect} from '@wdio/globals';
import Page from '../url/page';
import Getselector from '../functionhrsale/getselector';


// Test case parent
describe('Practice selector element page hrsale', () => {
    // Open page hrsale
    beforeEach(async () => {
        await browser.maximizeWindow();
        const pagehrsale = new Page();
        await pagehrsale.openHrsale();
    });
    // logout login
    afterEach(async () => {
       
        const getLogBtn = await $('a=Logout');
         await getLogBtn.isDisplayed();
               await getLogBtn.click();
               await browser.deleteSession();
               await browser.deleteCookies();
      
    })

    // LOGIN SUSESSFULLY
    it('Login successfully with: username and password verification', async () => {
       
        
        // Call the login method with test data
        await Getselector.login('cedric.kelly', 'cedric.kelly');
        const btnrunLogin = Getselector.getButtonLogin2('expand-right');
        // Verify the URL after login
        await expect(btnrunLogin).toHaveUrl('https://app.hrsale.com/erp/desk');
    });
                    // LOGIN FAILD
    // login faild with : usernam is not blank 
    it('Login faild with: username is not blank', async () => {
       
        const messageError  = await $('div.toast-message');
        // Call the login method with test data
        await Getselector.login('', 'cedric.kelly');
        
        // Verify the URL after login
        await expect(messageError).toBeDisplayed();
        await expect(messageError).toHaveText('The username field is required.');
    });

//     // login faild with: username is incorrect
    it('Login faild with: username is incorrect', async () => {
       
        const msgErrorUser  = await $('div.toast-message');
        // Call the login method with test data
        await Getselector.login('user1', 'cedric.kelly');
        
        // Verify the URL after login
        await expect(msgErrorUser).toBeDisplayed();
        await expect(msgErrorUser).toHaveText('Invalid Login Credentials.');
    });
//     // login faild with: password is incorrect
     // login faild with: username is incorrect
     it('Login faild with: password is incorrect', async () => {
       
        const msgErrorPass  = await $('div.toast-message');
        // Call the login method with test data
        await Getselector.login('user1', 'cedric.kelly');
        
        // Verify the URL after login
        await expect(msgErrorPass).toBeDisplayed();
        await expect(msgErrorPass).toHaveText('Invalid Login Credentials.');
    });
    // checkking element button super admin activity expect
    it('Click on button Super Admin' , async () => {
     const btnSuperAdmin  = Getselector.getButtonText('Super Admin');
     await btnSuperAdmin.click();
     await expect(btnSuperAdmin).toBeDisplayed();
     
    });
    //Checkking element button Employee

    it('Click on button Employee ' , async () => {
        const btnEmployee  = Getselector.getButtonText('Employee');
        await btnEmployee.click();
        await expect(btnEmployee).toBeDisplayed();


    })
});
//  //Checkking element button Employee

//  it('Click on button Client ' , async () => {
//     const btnClient  = Getselector.getButtonText('Client');
//     await btnClient.click();
//     await expect(btnClient).toBeDisplayed();


// });
// // checkking element a link text forgot password
// it('Click on Forgot  password' , async () => {
// const forgotPassword = Getselector.getLinkText('Forgot password?');
//  await forgotPassword.click();
//  await expect(forgotPassword).toHaveUrl('https://app.hrsale.com/erp/forgot-password');

// });



// // TEST GẤP

// // Checkking button home of Super Admin
// it('Click on button Home', async () => {
 
//     await Getselector.login('kelly.flynn' , 'kelly.flynn');
//     const btnHome = await Getselector.getLinkText('Home');
//     await btnHome.waitForClickable();
//     await btnHome.click();
//         // Verify if the URL is correct after clicking Home
//      await expect(browser).toHaveUrl('https://app.hrsale.com/erp/desk');
   
// });

// it('Click on button Employess', async () => {
//     await Getselector.login('kelly.flynn' , 'kelly.flynn');
//     const btnEmployess =  Getselector.getLinkText('Employees');
//     await btnEmployess.waitForClickable();
//     await btnEmployess.click();
//     await expect(btnEmployess).toHaveUrl('https://app.hrsale.com/erp/staff-list');
    
// });
  
  
// // Checkking add add new employess of Super Admin 
// // Create employesss susessfull

// it('Create add new Employees successful', async () => {
  
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//     // Add a new employee
//     await Getselector.addnewEmployes(
//         'Hận',          // First name
//         'Đời',         // Last name
//         'E12345',         // Employee ID
//         '12341234',     // Contact number
//         'Male',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
//     );

//     // Interact with the Save button
//     const expbtnSave = await Getselector.getButtonLogin2('expand-right');
//     await expect(expbtnSave).toHaveAttribute('type', 'submit');
//     const newEmployee = await $(`td=${'Nghĩa Đào'}`); // Find employee in table
// await expect(newEmployee).toBeDisplayed();
// });
// //  checkking is blank firtname
// it('Login faild with: firstname is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         '',
//         'Đời',         // Last name
//         'E12345',         // Employee ID
//         '12341234',     // Contact number
//         'Male',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The first name field is required.');
  
   

// });

// //  checkking is blank firtname
// it('Login faild with: lastname is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         'Hận',
//         ' ',         // Last name
//         'E12345',         // Employee ID
//         '12341234',     // Contact number
//         'Male',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The last name field is required.');
  
   

// });

// //  checkking  employess id is blank
// it('Login faild with: firstname is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         'Hận',
//         'Đời',         // Last name
//         '',         // Employee ID
//         '12341234',     // Contact number
//         'Male',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The employes id field is required.');
  
   

// });

// //  checkking contact number is blank
// it('Login faild with: Contact number is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         'Hận',
//         'Đời',         // Last name
//         'E12345',         // Employee ID
//         ' ',     // Contact number
//         'Male',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The contact number field is required.');
  
   

// });

// //  checkking Gender is blank
// it('Login faild with: firstname is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         'Hận',
//         'Đời',         // Last name
//         'E12345',         // Employee ID
//         '12341234',     // Contact number
//         '',           // Gender
//         'thanhkhia@gmail.com', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The gender field is required.');
  
   

// });

// //  checkking Email is blank
// it('Login faild with: Email is blank' , async () => {
//     await Getselector.login('kelly.flynn', 'kelly.flynn');
//     const btnEmployees =  Getselector.getLinkText('Employees');
//     // Interact with the 'Employees' link
//     await btnEmployees.waitForClickable();

//     await btnEmployees.click();
//     // await browser.pause(2000);
//     // Interact with 'Add New' link
//     const addNewEmployees =  Getselector.getLinkText('Add New');
//     await addNewEmployees.waitForClickable();
//     await addNewEmployees.click();
//    await Getselector.addnewEmployes(
//         'Hận',
//         'Đời',         // Last name
//         'E12345',         // Employee ID
//         '12341234',     // Contact number
//         'Male',           // Gender
//         '', // Email
//         'nghia123',       // Username
//         'password123',    // Password
//         'Morning Shift',  // Work shift
//         'Normal Role',    // Role
//         'Human Resource', // Department
//          'HR',
//         '5000',           // Basic salary
//         '50',             // Hourly rate
//         'Per Month',      // Pay type
//         'D:/Download/anhkhi.jpg'  // File path
    
//     );
// //  EXPECT 
// const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // Lấy nội dung văn bản của thông báo lỗi
// const errorMessageText = await msgErrBlankFirtname.getText();

// // Kiểm tra thông báo có đúng nội dung không
// await expect(errorMessageText).toBe('The email field is required.');
  
   

// })
// // checkking username is blank
// // it.only('Login faild with: Username is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         ' ',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The username field is required.');
  
   

// // })
// // // Checkking password is blank
// // it.only('Login faild with: Password is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         '',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The password field is required.');
  
   

// // })
// // // checkking Office shirt is blank
// // it.only('Login faild with: Office Shirt is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         '',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The office shift field is required.');
  
   

// // })

// // // checkking Role is blank
// // it.only('Login faild with: Role is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         '',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The role field is required.');
  
   

// // })
// // // checkking Department is blank
// // it.only('Login faild with: Department is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         '', // Department
// //          'HR',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The department field is required.');
  
   

// // })
// // // checkking Desgignaltion is blank
// // it.only('Login faild with: Desgignaltion is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          '',
// //         '5000',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The designation field is required.');
  
   

// // })
// // // checkking Basic Salary is blank
// // it.only('Login faild with: Basic Salary is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The basic salary field is required.');
  
   

// // })
// // // checkking Hourly Rate is blank
// // it.only('Login faild with: Hourly Rate is blank' , async () => {
// //     await Getselector.login('kelly.flynn', 'kelly.flynn');
// //     const btnEmployees =  Getselector.getLinkText('Employees');
// //     // Interact with the 'Employees' link
// //     await btnEmployees.waitForClickable();

// //     await btnEmployees.click();
// //     // await browser.pause(2000);
// //     // Interact with 'Add New' link
// //     const addNewEmployees =  Getselector.getLinkText('Add New');
// //     await addNewEmployees.waitForClickable();
// //     await addNewEmployees.click();
// //    await Getselector.addnewEmployes(
// //         'Hận',
// //         'Đời',         // Last name
// //         'E12345',         // Employee ID
// //         '12341234',     // Contact number
// //         'Male',           // Gender
// //         'thanhkhia@gmail.com', // Email
// //         'nghia123',       // Username
// //         'password123',    // Password
// //         'Morning Shift',  // Work shift
// //         'Normal Role',    // Role
// //         'Human Resource', // Department
// //          'HR',
// //         '',           // Basic salary
// //         '50',             // Hourly rate
// //         'Per Month',      // Pay type
// //         'D:/Download/anhkhi.jpg'  // File path
    
// //     );
// // //  EXPECT 
// // const msgErrBlankFirtname = Getselector.getMessage('toast-message');
// // await msgErrBlankFirtname.waitForDisplayed({ timeout: 5000 });

// // // Lấy nội dung văn bản của thông báo lỗi
// // const errorMessageText = await msgErrBlankFirtname.getText();

// // // Kiểm tra thông báo có đúng nội dung không
// // await expect(errorMessageText).toBe('The basic salary field is required.');
  
   

// // })

// });
