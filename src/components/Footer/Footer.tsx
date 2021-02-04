import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { useInstagramFeedData } from './Query';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "black",
        padding: theme.spacing(10, 0),
    },
    root: {
    },
    newsletter:{
        paddingLeft:"20px",

        [theme.breakpoints.down("sm")]:{
            paddingLeft:"0px",
        }
    },
    inp_but_wrapper: {
        display: "flex",

        "& input": {
            border: "none",
            outline: "none",
            fontSize: "14px",
            paddingLeft: "20px",
            fontWeight: "bold"
        },
        "& button": {
            border: "none",
            outline: "none",
            backgroundColor: "#F09804",
            verticalAlign: "center",
            padding: "6px 12px"
        }

    },
    ul: {
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        width: "70%",
        margin: "1rem 0 1.5rem 0",

        "& li": {
            padding: "2px 4px 0 0",
        }
    },
    socialIcon: {
        "&:hover": {
            color: "#F09804",
        }
    },
    paragraph: {
        color: "gray",
        textAlign: "center",
        marginTop: "50px",

        "& span": {
            color: "#F09804",
            fontSize: "20px",
        }
    }

}));


const Footer = () => {
    const data = useInstagramFeedData();
    const classes = useStyles();
    return (
        <footer className={classes.footerContainer}>
            <Container maxWidth="lg">
                <Grid container className={classes.root}>
                    <Grid item md={3} sm={6} xs={12} style={{}}>
                        <Typography variant="h6" component="h6" style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
                            About Us
                        </Typography>
                        <Typography variant="body1" component="p" color="textSecondary" style={{ margin: "1rem 0", color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur totam accusantium delectus facilis, mollitia dignissimos molestiae voluptatum deserunt, quos molestias cupiditate? Eaque veniam atque laudantium dicta mollitia vel voluptas.
                        </Typography>

                    </Grid>
                    <Grid item md={4} sm={6} xs={12} style={{}}>
                        <div className={classes.newsletter}>
                            <div>
                                <Typography variant="h6" component="h6" style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
                                    Newsletter
                        </Typography>
                                <Typography variant="body1" component="h6" style={{ margin: "1rem 0", color: "gray" }}>
                                    Stay update with our latest
                        </Typography>
                            </div>
                            <div style={{ margin: "16px 0 25px 0" }}>
                                <form>
                                    <div className={classes.inp_but_wrapper}>
                                        <input type="email" name="email" required placeholder="Enter Email" />
                                        <button style={{ cursor: "pointer" }}>
                                            <span>{<ArrowRightAltIcon />}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div style={{}}>
                            <Typography variant="h6" component="h6" style={{ color: "white", fontWeight: "bold", fontSize: "18px", }}>
                                Instagram Feed
                            </Typography>
                            <ul className={classes.ul}>
                            {
                                data.allContentfulInstagramFeed.nodes.map((elem, i) => (
                                    <li key={i}><img src={elem.instagramFeedImg.fluid.src} alt="" /></li>
                                ))
                            }
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={2} sm={6} xs={12} style={{}}>
                        <div>
                            <Typography variant="h6" component="h6" style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
                                Follow Us
                            </Typography>
                            <Typography variant="body1" component="p" style={{ margin: "15px 0", color: "gray" }}>
                                Let us be social
                            </Typography>
                            <div>
                                <a
                                    href="https://www.facebook.com/"
                                    style={{ color: "gray" }}>
                                    {<FacebookIcon className={classes.socialIcon} />}
                                </a>
                                <a
                                    href="https://twitter.com/"
                                    style={{ paddingLeft: "15px", color: "gray" }}>
                                    {<TwitterIcon className={classes.socialIcon} />}
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    style={{ paddingLeft: "15px", color: "gray" }}>
                                    {<InstagramIcon className={classes.socialIcon} />}
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <p className={classes.paragraph}>Copyright © 2020 All rights | Developed by <span>Aqib Iqbal</span></p>
        </footer>
    )
}

export default Footer;