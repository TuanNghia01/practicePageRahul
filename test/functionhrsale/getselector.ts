import {$} from '@wdio/globals';
import PageHrsale from "../url/page";

// Class to get selector elements
class GetSelector extends PageHrsale {



    // Get selector input 
    public getInp(input: string) {
        return $(`input[name="${input}"]`); 
    }

    
// Method to get buttons by text
public getButtonText(buttonText: string) {
    return $(`button*=${buttonText}`); // Finds button by visible text
}


// Method to get links by text
public getLinkText(linkText: string) {
    return $(`a=${linkText}`);  // Finds anchor by visible text
}


   // Get selector button by data-style
public getButtonLogin2(btnLogin: string) {
    return $(`button[data-style="${btnLogin}"]`);
}


    
    // Get selector list menu Header element
    public getListElement(listtxt:string){

        return $(`a span=${listtxt}`);
    }
    
    // Method to get dropdowns
public getDropDown(dropdownName: string) {
    return $(`select[name="${dropdownName}"]`);
}

// get private dropdown element 'HR'
public getHR(hr:string){
    return $(`span.${hr}`);
}
  
    // get element selector message 
    public getMessage(msg: string){
        return $(`div.${msg}`);
    }

    // Login method
    public async login(username: string, password: string ) {
        const btnLogin = this.getButtonLogin2('expand-right');
        const inpUsername = this.getInp('iusername');
        const inpPassword = this.getInp('password');
        
        
        await inpUsername.setValue(username);
        await inpPassword.setValue(password);
        await btnLogin.click();
      
    }

    // function create a new employess
    public async addnewEmployes(
        firstname: string, lastname: string, idemployes: string, contact: string, gender: string,
        email: string, name: string, pass: string, workshift: string, role: string, 
        department: string, designation:string, basicsalary: string, hourlyrate: string, 
        paytype: string, file: string
    ) {
        const inpFirstname = this.getInp('first_name');
        const inpLastname = this.getInp('last_name');
        const inpID = this.getInp('employee_id');
        const inpContactNumber = this.getInp('contact_number');
        const inpGender = this.getDropDown('gender');
        const inpEmail = this.getInp('email');
        const inpUsername = this.getInp('username');
        const inpPassword = this.getInp('password');
        const inpWorkShift = this.getDropDown('office_shift_id');
        const inpRole = this.getDropDown('role');
        const inpDepartment = this.getDropDown('department_id');
        const inpDesignation = this.getDropDown('designation_id');  
        const inpBasicSalary = this.getInp('basic_salary');
        const inpHourlyRate = this.getInp('hourly_rate');
        const inpPayType = this.getDropDown('salay_type');
        const inpFile = this.getInp('file');
        const btnSave = this.getButtonText('Save');
    
        // Điền form
        await inpFirstname.setValue(firstname);
        await inpLastname.setValue(lastname);
        await inpID.setValue(idemployes);
        await inpContactNumber.setValue(contact);
        await inpGender.selectByVisibleText(gender);  // Chọn gender từ dropdown
        await inpEmail.setValue(email);
        await inpUsername.setValue(name);
        await inpPassword.setValue(pass);
        await inpWorkShift.selectByVisibleText(workshift);  // Chọn work shift
        await inpRole.selectByVisibleText(role);  // Chọn role
        
        // Chọn department
        await inpDepartment.selectByVisibleText(department);
        
        // Đợi designation được kích hoạt
        await browser.waitUntil(async () => {
            return await inpDesignation.isEnabled();  // Đợi khi nào designation không còn disabled
        }, {
            timeout: 5000,
            timeoutMsg: 'Designation field vẫn bị disabled sau 5 giây.'
        });
     
        // Chọn designation
        await inpDesignation.selectByVisibleText(designation);
    
        await inpBasicSalary.setValue(basicsalary);
        await inpHourlyRate.setValue(hourlyrate);
        await inpPayType.selectByVisibleText(paytype); // Chọn pay type
       
        // Upload file
        await inpFile.setValue(file); 
        await inpFile.getValue();
        console.log( await inpFile.getValue());
        
        // Lưu employee mới
        await btnSave.waitForClickable({ timeout: 5000 });
        await btnSave.click();
    }
    
    
    






}

export default new GetSelector();
