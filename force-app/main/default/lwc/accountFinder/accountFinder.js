/*
 * @Author: shylock shylock.wu@moblor.com
 * @Date: 2023-04-12 14:43:33
 * @LastEditors: shylock shylock.wu@moblor.com
 * @LastEditTime: 2023-04-12 17:35:06
 * @FilePath: /lwcForVisualforceDevs/force-app/main/default/lwc/accountFinder/accountFinder.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class AccountFinder extends LightningElement {
  annualRevenue = null;
  handleChange(event) {
    this.annualRevenue = event.detail.value;
  }

  reset() {
    this.annualRevenue = null;
  }
  @wire(queryAccountsByRevenue, {annualRevenue: '$annualRevenue' })
  accounts;
}
