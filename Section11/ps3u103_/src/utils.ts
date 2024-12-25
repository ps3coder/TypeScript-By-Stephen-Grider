

// Define a dateStringToDate
export const dateStringToDate = (dateString: string) => {
    const dateParts = dateString.split('/').map(value => parseInt(value, 10));
    //  10 is for providing as the radix ensures consistent conversion to decimal(base 10) 
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}