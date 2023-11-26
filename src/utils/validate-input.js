const validateInputUser = ({ name, gender}) => {
    if (name.length < 8) {
        return "pastikan panjang karakter nama minimal 8";
    }else if(gender===""){
        return "pastikan anda mengisi input jenis kelamin "
    }    
    
    return;
};
const validateInputRegister = ({ name, password }) => {
    if (name.length < 8) {
        return "Pastikan nama anda minimal 8 karakter"
    } else if (password.length < 8) {
        return "Pastikan password minimal 8 karakter"
    }
    return
}
export {validateInputUser,validateInputRegister}