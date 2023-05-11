import dayjs from "dayjs";
import "dayjs/locale/fr";

export function formatDate(date: Date | string) {
    return dayjs(date).locale('fr').format('MMM D, YYYY');
}

export function formatTime(time: Date | string) {
    return dayjs(time).locale('fr').format('h:mm');
}


export function formatNumber(value: number | string) {
    return new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(Number(value) ?? 0);
}
