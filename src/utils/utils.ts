export function monthYear(startDate: string, endDate: string | null) {
    const [startYear, startMonth] = startDate.split('-');
    const [endYear, endMonth] = endDate ? endDate.split('-') : ['Present', ''];

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const start = `${months[parseInt(startMonth) - 1]} ${startYear}`;
    const end = endDate ? `${months[parseInt(endMonth) - 1]} ${endYear}` : 'Present';

    return `${start} - ${end}`;
}
