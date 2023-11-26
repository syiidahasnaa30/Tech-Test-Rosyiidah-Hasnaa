/* eslint-disable react/prop-types */
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { FaReadme } from "react-icons/fa";
import DeleteDialog from './DeleteDialog';
import useOpen from "../hooks/useOpen";
import DetailDialog from "./DetailDialog";
import { useNavigate } from "react-router-dom";

const ButtonAction = ({ id }) => {
    const [deleteDialog, onChangeDeleteDialog] = useOpen(false);
    const [detailDialog, onChangeDetailDialog] = useOpen(false);
    const navigate = useNavigate()

    const openCreatePage = () => {
        navigate(`/user/${id}`)
    }
    return (
        <>
            <DeleteDialog open={deleteDialog} handleClose={onChangeDeleteDialog} id={id} />
            <DetailDialog open={detailDialog} handleClose={onChangeDetailDialog} id={id} />
            <button className="btn-view" onClick={onChangeDetailDialog}><FaReadme /></button>
            <button className="btn-edit" onClick={openCreatePage}><RiEdit2Fill /></button>
            <button className="btn-delete" onClick={onChangeDeleteDialog}><RiDeleteBinFill /></button>
        </>
    )
}
export default ButtonAction