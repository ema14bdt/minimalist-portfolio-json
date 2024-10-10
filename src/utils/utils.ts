const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export function monthYear(startDate: string, endDate: string | null) {
    const [startYear, startMonth] = startDate.split('-');
    const [endYear, endMonth] = endDate ? endDate.split('-') : ['Present', ''];

    const start = `${startYear} ${months[parseInt(startMonth) - 1]}`;
    const end = endDate ? `${endYear} ${months[parseInt(endMonth) - 1]}` : 'Present';

    return `${start} - ${end}`;
}

export function month(date: string) {
    const [year, month] = date.split('-');
    return `${year} ${months[parseInt(month) - 1]}`;
}
