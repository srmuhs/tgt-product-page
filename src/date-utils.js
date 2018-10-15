export const formatDate = (date, type) => {
    const options = {
        month: type,
        day: 'numeric',
        year: 'numeric'
    };

    return new Date(date).toLocaleString('en-us', options)
}
