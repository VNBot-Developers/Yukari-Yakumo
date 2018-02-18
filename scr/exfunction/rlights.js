function getRandomColor(api) {
    const colors = Object.keys(api.threadColors).map(n => api.threadColors[n]);
    return colors[Math.floor(Math.random() * colors.length)];
}
exports.getRandomColor = getRandomColor;

