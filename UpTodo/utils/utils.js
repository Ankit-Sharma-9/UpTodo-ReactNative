export const getCurrentDateYYYYMMDD = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const getTomorrowDateYYYYMMDD = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const convertYYYYMMDDtoDDMMM = (inputDate) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [year, month, day] = inputDate.split("-");
    const dayWithoutLeadingZero = parseInt(day);
    const monthAbbr = months[parseInt(month) - 1];
    return `${dayWithoutLeadingZero} ${monthAbbr}`;
}

export const convertDateToYYYYMMDD = (inputDate) => {
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}