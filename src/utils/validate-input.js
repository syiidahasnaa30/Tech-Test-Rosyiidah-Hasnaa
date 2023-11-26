const validateInput = ({ name, gender}) => {
    if (name.length < 8) {
        return "pastikan panjang karakter nama minimal 8";
    }else if(gender===""){
        return "pastikan anda mengisi input jenis kelamin "
    }    
    
    return;
};
export default validateInput