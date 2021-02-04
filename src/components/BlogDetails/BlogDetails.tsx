import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const useStyles = makeStyles((theme) => ({
    container: {
    },
    blogDetailsWrapper: {
        backgroundColor: "#F9F9FF",
        margin: theme.spacing(5, 0),
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    imgWrapper:{
        backgroundColor:"red",
        width:"80%",
        height:"522px",

        [theme.breakpoints.only("sm")]: {
            height: "422px",
        },
        [theme.breakpoints.only("xs")]: {
            width:"100%",
            height: "322px",
        },
    }
}));



const BlogDetails = ({ blogDetails }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.blogDetailsWrapper}>
                <div className={classes.imgWrapper}>
                    <img src={blogDetails.blogPostImage.fluid.src} alt="" width="100%" height="100%" style={{}}/>
                </div>
                <div style={{width:"80%", marginTop:"7px", wordWrap:"break-word"}}>
                    <h1>{blogDetails.blogPostHeading}</h1>
                    <div style={{marginTop:"10px", fontSize:"20px", textAlign:"justify" }}>
                        {documentToReactComponents(JSON.parse(blogDetails.blogPostDesc.raw))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default BlogDetails;
