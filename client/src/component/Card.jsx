import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Addnote } from "../component/Addnote";

export const Card = ({ id, title, desc , date}) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title2, setTitle2] = useState(title);
  const [description, setDescription] = useState(desc);
  const data={"id":id,"title":title,"desc":desc}
  




  const handleDelete = async () => {
    const res = await fetch(`http://localhost:9090/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    window.location.reload();
  };

  return (
    <>
      <div className="col-md-4 single-note-item all-category" style={{}}>
        <div className="card card-body">
          <span className="side-stick" />
          <h5
            className="note-title text-truncate w-75 mb-0"
            data-noteheading="Book a Ticket for Movie"
          >
            {title}
            {/* <i className="point fa fa-circle ml-1 font-10" /> */}
          </h5>
          <p className="note-date font-12 text-muted">{date}</p>
          <div className="note-content">
            <p
              className="note-inner-content text-muted"
              data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
            >
              {desc}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="m-1">
              <i className="fa fa-star favourite-note" />
            </span>
            <span className="m-1" onClick={handleDelete}>
              <i className="fa fa-trash remove-note" />
            </span>
            <span className="m-2" onClick={handleShow}>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          </div>
        </div>
      </div>

      {show && <Addnote handleClose={handleClose} show={show} data={data} edit={true} />}


      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="addnotesmodalTitle">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="note-title">
                  <label>Note Title</label>
                  <input
                    type="text"
                    id="note-has-title"
                    className="form-control"
                    minLength={25}
                    onChange={(e) => setTitle2(e.target.value)}
                    value={title2}
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="note-description">
                  <label>Note Description</label>
                  <textarea
                    id="note-has-description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    minLength={60}
                    placeholder="Description"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
