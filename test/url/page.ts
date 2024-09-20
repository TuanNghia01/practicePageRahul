import {browser} from '@wdio/globals'

// class page hrsale
export default class Page{
 public openHrsale(){
  return browser.url('https://app.hrsale.com/erp/login');

 }
 

}