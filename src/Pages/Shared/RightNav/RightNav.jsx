import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
    FaGoogle,
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
    return (
        <div className="mt-4">
            <h4>Login With</h4>
            <Button className="mb-2 w-100" variant="outline-primary">
                <FaGoogle /> Login with Google
            </Button>
            <Button className="w-100" variant="outline-secondary">
                <FaGithub /> Login with Github
            </Button>
            <div className="mt-4">
                <h4>Find Os On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram />
                        Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone />
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
