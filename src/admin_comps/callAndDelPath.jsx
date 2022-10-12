import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { API_URL, doApiMethod, PATHS, VOLUNTEERS } from '../services/apiService';
import { toast } from 'react-toastify';



export default function CallAndDelPath({ fullName, volunteer, idDel }) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onDelClick = async () => {
        let url = API_URL + PATHS + "/delPath/" + idDel;
        try {
            let resp = await doApiMethod(url, "delete");
            if (resp.data.deletedCount == 1) {
                toast.success("Path deleted");
                await delPathFromVolAr();
                window.location.reload();
                console.log("Path deleted from volunteerModel");
            }
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete path, try refresh the page");
        }
    }


    const delPathFromVolAr = async () => {
        try {
            let url = API_URL + VOLUNTEERS + '/delOnePath/' + volunteer._id + '/' + idDel;
            let resp = await doApiMethod(url, 'PUT');
            console.log(resp.data);
            console.log("path from volunteerModel.path_Id deleted");
        }

        catch (err) {
            console.log(err);
            toast.warning("there problem to delete path from volunteerModel, check server");
        }
    }


    return (
        <React.Fragment>

            <Button variant="secondary" onClick={handleShow}>
                <DeleteIcon className='fs-4' />  Delete path
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete path</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-danger text-uppercase fw-bold'>
                    Call {fullName} first to inform him before delete path
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">
                        <a className='text-decoration-none text-white' href={`tel:${volunteer.phone}`}>
                            <PhoneForwardedIcon className='fs-4' />
                            Call {fullName}
                        </a>

                    </Button>
                    <Button onClick={() => { window.confirm('Are you sure?') && onDelClick() }} variant="danger"><DeleteIcon className='fs-4' />DELETE</Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}
