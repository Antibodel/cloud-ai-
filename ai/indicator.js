function movingAverage(data) {
    return data.reduce((a, b) => a + b, 0) / data.length;
}
