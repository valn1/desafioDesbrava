export const badgeColor = (language: string) => {
    const colors: Record<string, string> = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572a5',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'C#': '#178600',
        'PHP': '#4f5d95',
        'HTML': '#e34c26',
        'Ruby': '#701516',
        'Go': '#00add8',
        'Swift': '#f05138',
        'Kotlin': '#a97bff',
        'Rust': '#dea584',
        'Shell': '#89e051',
        'Objective-C': '#438eff',
        'F#': '#b845fc'
    };
    return colors[language] || '#ac2f97';
};

export const timeAgo = (date: string) => {
    const now = new Date();
    const then = new Date(date);
    const diff = now.getTime() - then.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} ${years > 1 ? 'anos' : 'ano'} atrás`;
    if (months > 0) return `${months} ${months > 1 ? 'meses' : 'mês'} atrás`;
    if (days > 0) return `${days} ${days > 1 ? 'dias' : 'dia'} atrás`;
    if (hours > 0) return `${hours} ${hours > 1 ? 'horas' : 'hora'} atrás`;
    if (minutes > 0) return `${minutes} ${minutes > 1 ? 'minutos' : 'minuto'} atrás`;
    if (seconds > 0) return `${seconds} ${seconds > 1 ? 'segundos' : 'segundo'} atrás`;
    return 'now';
}