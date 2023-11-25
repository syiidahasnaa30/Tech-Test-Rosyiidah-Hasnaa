const validateInput = ({ name }) => {
    if (name.length < 8) {
        return "pastikan panjang karakter nama minimal 8";
    }
    return;
};
export default validateInput