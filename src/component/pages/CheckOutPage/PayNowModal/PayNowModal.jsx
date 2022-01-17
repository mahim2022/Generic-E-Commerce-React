import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const PaymentModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Payment
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Pay with Crypto</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Account Address:0x09b6214de7387a02CF78394481F4Bf579B5C4e47
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
