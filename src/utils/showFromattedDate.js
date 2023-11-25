const showFormattedDate = (date) => {
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric",

    };
    return new Date(date).toLocaleDateString('id', options);
};

const showFormattedTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" }
    return new Date(time).toLocaleTimeString('id', options)
}

export { showFormattedDate, showFormattedTime };