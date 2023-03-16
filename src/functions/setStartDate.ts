export const setStartDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();
    const startDate = year+"-"+"0"+month+"-"+day;
    console.log(year);
    console.log(month);
    console.log(day);
}