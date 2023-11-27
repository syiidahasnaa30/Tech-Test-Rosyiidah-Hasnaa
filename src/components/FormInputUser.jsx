/* eslint-disable react/prop-types */
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import useInput from "../hooks/useInput";
import { validateInputUser } from "../utils/validate-input";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/user-api";
import FormAction from "./FormAction";
import { useEffect } from "react";
import SnackBarMessage from "./SnackBarMessage";
import useSnackBar from "../hooks/useSnackBar";

const FormInputUser = ({ submitForm, setLoading }) => {
    const { id } = useParams();
    const [name, onNameChange, setName] = useInput("");
    const [address, onAddressChange, setAddress] = useInput("");
    const [gender, ongenderChange, setGender] = useInput("");
    const [born_date, onBornDateChange, setBornDate] = useInput("");
    const [open, messgeSnackBar, severity, setSnackBar, onOpenChange] = useSnackBar()

    const getExistingUser = async () => {
        if (id) {
            const response = await getUser(id);
            if (response.message) {
                setName(response.data.name)
                setGender(response.data.gender)
                setAddress(response.data.address)
                setBornDate(response.data.born_date)
            } else {
                console.log(response.detail)
            }
        } else {
            console.log("id not defined")
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const valid = validateInputUser({ name, gender });
        if (valid) {
            setSnackBar({ message: valid, severity: "warning" })
        } else {
            setLoading(true)
            submitForm({ name, address, gender, born_date });
        }
    };

    useEffect(() => {
        getExistingUser()
    }, [])

    return (
        <>
            <SnackBarMessage handleClose={onOpenChange} open={open} severity={severity} message={messgeSnackBar} />
            <form className="form-input" onSubmit={handleSubmit}>
                <h1>Masukkan data</h1>
                <TextField
                    required
                    placeholder="Masukkan nama minimal 8 karakter"
                    label="Nama"
                    fullWidth={true}
                    value={name}
                    onChange={onNameChange} />
                <TextField
                    placeholder="Masukkan alamatmu"
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
                <FormAction />

            </form>
        </>

    );
};

export default FormInputUser