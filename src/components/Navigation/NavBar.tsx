import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { Link } from 'gatsby';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { AuthContext } from '../../context/auth';
import firebase from 'gatsby-plugin-firebase';


const useStyles = makeStyles((theme) => ({
    navigationWrapper: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(4),
    },
    ul: {
        listStyle: "none",
        display: "flex",
        "& li": {
            padding: theme.spacing(0.8),
            color: "blue",
        }
    },
    user: {
        //backgroundColor:"red",
        marginTop: theme.spacing(1),
        textAlign: "right",

        "& p": {
            fontSize: "20px",

            "& span": {
                fontWeight: "bold"
            },
            "& a": {
                textDecoration: "none",
                fontSize: "22px"
            }
        }
    }
}));


const NavBar = () => {
    const classes = useStyles();
    const { user } = useContext(AuthContext);
    // console.log(user)
    
    const handleLogOut = async () => {
        await firebase.auth().signOut();
        //navigate("/");
    }

    return (
        <Container maxWidth="lg">
            <nav className={classes.navigationWrapper}>
                <img src="/images/logo.webp" alt="" />
                <ul className={classes.ul}>
                    <li><a href="https://www.facebook.com/" style={{ color: "black" }}>{<FacebookIcon />}</a></li>
                    <li><a href="https://twitter.com/" style={{ color: "black" }}>{<TwitterIcon />}</a></li>
                    <li><a href="https://www.instagram.com/" style={{ color: "black" }}>{<InstagramIcon />}</a></li>

                </ul>

            </nav>
            {user &&
                <div className={classes.user}>
                    <p onClick={handleLogOut}>LoggedIn As: <span>{user.email || user.user.email}</span><Link to="/"><br />Logout</Link></p>
                </div>
            }
        </Container>
    )
}

export default NavBar;