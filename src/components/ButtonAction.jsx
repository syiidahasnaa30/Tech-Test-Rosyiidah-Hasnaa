/* eslint-disable react/prop-types */
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { FaReadme } from "react-icons/fa";
import DialogDelete from './DialogDelete';
import useOpen from "../hooks/useOpen";

const ButtonAction = ({ id }) => {
    const [deleteDialog, onChangeDeleteDialog] = useOpen(false);

    return (
        <>
            <DialogDelete open={deleteDialog} handleClose={onChangeDeleteDialog} id={id} />
            <button className="btn-view" onClick={() => { alert("mau lihat?") }}><FaReadme /></button>
            <button className="btn-edit" onClick={() => { alert("mau edit?") }}><RiEdit2Fill /></button>
            <button className="btn-delete" onClick={onChangeDeleteDialog}><RiDeleteBinFill /></button></>
    )
}
export default ButtonAction