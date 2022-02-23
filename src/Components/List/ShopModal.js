import React from 'react'
import { useSelector } from 'react-redux'
import { Image } from 'react-bootstrap'

import { Modal, Button } from 'react-bootstrap';
export default function ShopModal(props) {
    const { shopName, show, handleClose } = props;
    const shops = useSelector(state => state.shops);
    const shopSelected = shops.filter(shop => shop.Name === shopName)[0];

    return (
        <Modal show={show} onHide={handleClose} className='list'>
            <Modal.Header closeButton>
                <Modal.Title>{shopName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center offCanvasImg">
                    <Image
                        src={shopSelected.Logo}
                        onError={e => e.currentTarget.src = ''}
                    />
                </div>
                <div className='fs-3 text-center p-3'>
                    {shopSelected.Name}<br />
                    {shopSelected.City},{shopSelected.Region}<br />
                    <a href={shopSelected.Link} target={'_blank'} rel="noreferrer">Visit Here</a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    )



}