import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

export const Addnote = ({show,handleClose,edit,data}) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.desc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description cannot be blank");
     
  }else {
    if(edit){
      const res = await fetch(`http://localhost:9090/api/notes/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
    }else{

      const res = await fetch(`http://localhost:9090/api/notes/${sessionStorage.getItem("email")}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
    }
  
    setDescription("");
    setTitle("");
    window.location.reload();
    handleClose();
  } 

  };
     



  return (
    
    <>
      <Modal show={show} onHide={handleClose}>
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
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
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
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
