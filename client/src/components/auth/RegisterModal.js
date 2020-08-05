import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";

export const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(GlobalContext);
  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // create user object
    const newUser = {
      name,
      email,
      password,
    };

    // attempt to register
    register(newUser);
  };

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
