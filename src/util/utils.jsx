

export const formatPadding = (num) => { return String(num).padStart(2, '0') };

export const formatDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (h === 0) return `${m} min`;
    if (m === 0) return `${h} hr`;

    return `${h} hr ${m} min`;
}