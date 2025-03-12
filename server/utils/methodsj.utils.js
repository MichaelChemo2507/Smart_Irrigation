function getCurrentDate() {
    let date = new Date();
    date = date.toISOString().slice(0, 19).replace('T', ' ');
    return date;
}

module.exports = {
    getCurrentDate:getCurrentDate
}