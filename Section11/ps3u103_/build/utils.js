"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
// Define a dateStringToDate
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map(value => parseInt(value, 10));
    //  10 is for providing as the radix ensures consistent conversion to decimal(base 10) 
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
