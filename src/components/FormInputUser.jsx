/* eslint-disable react/prop-types */
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import useInput from "../hooks/useInput";
import validateInput from "../utils/validate-input";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../utils/user-api";

const FormInputUser = ({ submitForm }) => {
    const { id } = useParams();
    const [defaultInput, setDefaultInput] = useState({});
    const [name, onNameChange] = useInput(defaultInput.name);
    const [address, onAddressChange] = useInput(defaultInput.address);
    const [gender, ongenderChange] = useInput(defaultInput.gender);
    const [born_date, onBornDateChange] = useInput(defaultInput.born_date);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const valid = validateInput({ name, gender });
        if (valid) {
            alert(valid);
        } else {
            submitForm({ name, address, gender, born_date });
        }

    };
    const getExistingUser = async () => {
        if (id) {
            const response = await getUser(id);
            if (response.message) {
                setDefaultInput(response.data);
                return response.data
            } else {
                console.log("error");
                return ""
            }
        }
        return ""
    }
    useEffect(() => {
        getExistingUser()
    }, [defaultInput])

    return (
        <form className="form-input" onSubmit={handleSubmit}>
            <h1>Masukkan data</h1>
            <TextField
                required
                placeholder={defaultInput.name ? defaultInput.name : "Masukkan nama minimal 8 karakter"}
                label="Nama"
                fullWidth={true}
                value={name}
                onChange={onNameChange} />
            <TextField
                placeholder={defaultInput.address ? defaultInput.address : "Masukkan alamatmu"}
                required
                label="Alamat"
                margin="normal"
                fullWidth={true}
                value={address}
                onChange={onAddressChange} />
            <FormLabel>Jenis Kelamin</FormLabel>
            <RadioGroup
                required
                margin="normal"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"

            >
                <FormControlLabel value="p" control={<Radio onClick={ongenderChange} checked={gender === "p" ? true : false} />} label="Perempuan" />
                <FormControlLabel value="l" control={<Radio onClick={ongenderChange} checked={gender === "l" ? true : false} />} label="Laki-laki" />
            </RadioGroup>
            <FormLabel>Tanggal Lahir</FormLabel>
            <input required
                className="form-input__date"
                type="date"
                value={born_date}
                onChange={onBornDateChange}
            />
            <button type="submit">Simpan</button>
            <Link to="/"><p>Kembali ke beranda</p></Link>

        </form>
    );
};

export default FormInputUser