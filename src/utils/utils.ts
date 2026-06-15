const months: Record<string, string[]> = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
};

const shortMonths: Record<string, string[]> = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
};

const presentText: Record<string, string> = {
    en: "Present",
    es: "Presente"
};

export function monthYear(startDate: string, endDate: string | null, lang: string = 'es') {
    const [startYear, startMonth] = startDate.split('-');
    const [endYear, endMonth] = endDate ? endDate.split('-') : ['', ''];

    const monthList = months[lang] || months.en;
    const start = `${monthList[parseInt(startMonth) - 1]} ${startYear}`;
    const end = endDate ? `${monthList[parseInt(endMonth) - 1]} ${endYear}` : presentText[lang] || presentText.en;

    return `${start} - ${end}`;
}

export function shortMonthYear(startDate: string, endDate: string | null, lang: string = 'es') {
    const [startYear, startMonth] = startDate.split('-');
    const [endYear, endMonth] = endDate ? endDate.split('-') : ['', ''];

    const monthList = shortMonths[lang] || shortMonths.en;
    const start = `${monthList[parseInt(startMonth) - 1]} ${startYear.slice(2)}`;
    const end = endDate ? `${monthList[parseInt(endMonth) - 1]} ${endYear.slice(2)}` : presentText[lang] || presentText.en;

    return `${start} - ${end}`;
}

export function month(date: string, lang: string = 'es') {
    const [year, month] = date.split('-');
    const monthList = months[lang] || months.en;
    return `${monthList[parseInt(month) - 1]} ${year}`;
}

export function shortMonth(date: string, lang: string = 'es') {
    const [year, month] = date.split('-');
    const monthList = shortMonths[lang] || shortMonths.en;
    return `${monthList[parseInt(month) - 1]} ${year.slice(2)}`;
}