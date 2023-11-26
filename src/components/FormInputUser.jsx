/* eslint-disable react/prop-types */
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import useInput from "../hooks/useInput";
import validateInput from "../utils/validate-input";
import { Link } from "react-router-dom";

const FormInputUser = ({ addNewUser }) => {
    const [name, onNameChange] = useInput("");
    const [addres, onAddressChange] = useInput("");
    const [gender, ongenderChange] = useInput("");
    const [born_date, onBornDateChange] = useInput("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        const valid = validateInput({ name, gender });
        if (valid) {
            alert(valid)
        } else {
            addNewUser({ name, address: addres, gender, born_date })
        }

    };

    return (
        <form className="form-input" onSubmit={handleSubmit}>
            <h1>Tambahkan data</h1>
            <TextField
                required
                id="outlined-required"
                label="Nama"
                placeholder="Masukkan nama minimal 8 karakter"
                fullWidth={true}
                value={name}
                onChange={onNameChange} />
            <TextField
                required
                id="outlined-multiline-flexible"
                label="Alamat"
                multiline
                margin="normal"
                maxRows={4}
                fullWidth={true}
                value={addres}
                onChange={onAddressChange} />
            <FormLabel>Jenis Kelamin</FormLabel>
            <RadioGroup
                required
                margin="normal"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={gender}

            >
                <FormControlLabel value="p" control={<Radio onClick={ongenderChange} />} label="Perempuan" />
                <FormControlLabel value="l" control={<Radio onClick={ongenderChange} />} label="Laki-laki" />
            </RadioGroup>
            <FormLabel>Tanggal Lahir</FormLabel>
            <input required className="form-input__date" type="date" value={born_date} onChange={onBornDateChange} />
            <button type="submit">Simpan</button>
            <p><Link to="/">Kembali ke beranda</Link></p>

        </form>
    );
};

export default FormInputUser