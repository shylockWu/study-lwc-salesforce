/*
 * @Author: shylock shylock.wu@moblor.com
 * @Date: 2023-04-12 14:39:54
 * @LastEditors: shylock shylock.wu@moblor.com
 * @LastEditTime: 2023-04-12 14:51:31
 * @FilePath: /lwcForVisualforceDevs/force-app/main/default/lwc/accountSearch/accountSearch.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { LightningElement, wire } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
export default class AccountSearch extends LightningElement {
    numberOfEmployees = null;
    handleChange(event) {
        this.numberOfEmployees = event.detail.value;
    }
    reset() {
        this.numberOfEmployees = null;
    }
    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;
}
