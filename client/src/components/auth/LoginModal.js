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

export const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(GlobalContext);
  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // attempt to log in
    login(user);
  };

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
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
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
