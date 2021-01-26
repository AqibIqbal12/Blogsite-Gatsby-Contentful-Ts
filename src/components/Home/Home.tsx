import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useBlogPostData } from './Query'

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BlogPost from '../BlogPost/BlogPost'
import Newsletter from '../Newsletter/Newsletter';
import Categories from '../Categories/Categories';
import PopularPost from '../PopularPost/PopularPost';

const useStyles = makeStyles((theme) => ({

    container: {
    },
    banner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "550px",
        marginTop: theme.spacing(2.5),
        position: "relative",
        backgroundImage: "url(/images/banner/banner.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",

        [theme.breakpoints.only("sm")]: {
            height: "450px",
        },
        [theme.breakpoints.only("xs")]: {
            height: "350px",
        },

        "&::after": {
            width: "100%",
            height: "100%",
            content: "''",
            background: "rgba(1,3,15,0.3)",
            position: "absolute",
        }

    },
    bannerContent: {
        textAlign: "center",
        zIndex: 1,

        "& h3": {
            fontSize: "27px",
            color: "white",
        },
        "& h1": {
            fontSize: "50px",
            padding: theme.spacing(1, 0),
            color: "white",
        },
        "& h4": {
            fontSize: "18px",
            color: "white"
        }
    },

    blogSlideContent: {
        margin: theme.spacing(1.8, 1.8),
        padding: theme.spacing(2),
        textAlign: "center",

        "& h3": {
            fontSize: "21px",
            fontWeight: "700",
            margin: theme.spacing(2.2, 0, 1, 0),
            color: "#ff9907",

        },

        "& p": {
            fontSize: "16px",
            color: "gray",

        }
    },
    blogSlideLabel: {
        fontSize: "19px",
        color: "#ff9907",
        textTransform: "uppercase",
        background: "#222",
        width: "50%",
        textDecoration: "none",
        padding: theme.spacing(1.1, 5),
    },
    carousel: {
        marginTop: "30px",
    },


    sideBarWrapper: {
        padding: "0px 20px;",

        [theme.breakpoints.down("sm")]: {
            padding: "0px",
        },
    },

}));

const index = () => {

    const classes = useStyles();
    const [category, setCategory] = useState("TRAVEL");
    const data = useBlogPostData();

    const fashionPosts = data.allContentfulBlogPost.nodes.
        filter((post) => (post.blogPostCategory.toUpperCase() === "FASHION")).length;
    const technologyPosts = data.allContentfulBlogPost.nodes.
        filter((post) => (post.blogPostCategory.toUpperCase() === "TECHNOLOGY")).length;
    const travelPosts = data.allContentfulBlogPost.nodes.
        filter((post) => (post.blogPostCategory.toUpperCase() === "TRAVEL")).length;

    const responsive = {
        //superLargeDesktop: {
        // the naming can be any, depends on you.
        //  breakpoint: { max: 4000, min: 3000 },
        //  items: 5,
        //  slidesToSlide: 3 // optional, default to 1.
        //},
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,

        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.banner}>
                        <div className={classes.bannerContent}>
                            <Typography component="h3" variant="h3">Tours & Travels</Typography>
                            <Typography component="h1" variant="h1">Amazing Places on earth</Typography>
                            <Typography component="h4" variant="h4">November 12, 2020</Typography>
                            {/* <h3>Tours & Travels</h3> */}
                            {/* <h1>Amazing Places on earth</h1> */}
                            {/* <h4>November 12, 2020</h4> */}

                        </div>
                    </div>
                </Grid>
            </Grid>

            <Carousel
                responsive={responsive}
                containerClass={classes.carousel}
                autoPlay
                infinite
                autoPlaySpeed={3000}
                customTransition="all ease-in-out 2000ms"
                transitionDuration={2000}
                removeArrowOnDeviceType="mobile"
            >
                <div style={{ padding: "0 10px" }}>
                    <div>
                        <img src="/images/carousel/image1.webp" alt="" width="100%" />
                    </div>
                    <div className={classes.blogSlideContent}>
                        <Link to="/" className={classes.blogSlideLabel}>Travel</Link>
                        <h3><Link to="/" style={{ color: "#222", textDecoration: "none" }}>New york fashion week's continued the evolution</Link></h3>
                        <p>4 days ago</p>
                    </div>
                </div>

                <div style={{ padding: "0 10px" }}>
                    <div >
                        <img src="/images/carousel/image2.webp" alt="" width="100%" />
                    </div>

                    <div className={classes.blogSlideContent}>

                        <Link to="/" className={classes.blogSlideLabel}>Fashion</Link>
                        <h3><Link to="/" style={{ color: "#222", textDecoration: "none" }}>New york fashion week's continued the evolution</Link></h3>
                        <p>1 days ago</p>
                    </div>


                </div >
                <div style={{ padding: "0 10px" }}>
                    <div>
                        <img src="/images/carousel/image3.jpg" alt="" width="100%" />
                    </div>
                    <div className={classes.blogSlideContent}>
                        <Link to="/" className={classes.blogSlideLabel}>Technology</Link>
                        <h3><Link to="/" style={{ color: "#222", textDecoration: "none" }}>New york fashion week's continued the evolution</Link></h3>
                        <p>3 days ago</p>
                    </div>
                </div>
            </Carousel>

            <Grid container style={{ margin: "20px 0" }}>
                <Grid item md={8} xs={12}>
                    <div id="blogPostSection">
                        {
                            data.allContentfulBlogPost.nodes.
                                filter((post) => (post.blogPostCategory.toUpperCase() === category)).
                                map((filteredPost) => (
                                    <BlogPost
                                        key={filteredPost.blogPostId}
                                        id={filteredPost.blogPostId}
                                        imgName={filteredPost.blogPostImage.file.fileName}
                                        tag={filteredPost.blogPostTag}
                                        heading={filteredPost.blogPostHeading}
                                        comments={filteredPost.blogPostComments}
                                        date={filteredPost.blogPostDate}
                                        desc={filteredPost.blogPostDesc.raw}
                                    />
                                ))
                            // console.log(obj.blogPostDate)))                            
                        }
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={classes.sideBarWrapper}>
                        <Newsletter />
                        <Categories
                            setCategory={setCategory}
                            fashionPosts={fashionPosts}
                            technologyPosts={technologyPosts}
                            travelPosts={travelPosts}
                        />
                        <PopularPost />
                    </div>
                </Grid>

            </Grid>
        </Container>
    )
}
export default index;
