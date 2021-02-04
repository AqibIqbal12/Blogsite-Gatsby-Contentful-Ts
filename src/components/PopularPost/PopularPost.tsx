import { makeStyles } from '@material-ui/core';
import React from 'react';

import { usePopularPostData } from './Query';

import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
    popularPost: {
        backgroundColor: "#F9F9FF",
        padding: theme.spacing(6, 4),
        marginBottom: theme.spacing(3.5),

        "& h4": {
            fontSize: "25px",
            position: "relative",
            marginBottom: "22px",
        },
    },
    popularPostList: {
        marginTop: theme.spacing(3.5),
    },
    popularPostListWrapper:{
        marginBottom: theme.spacing(4),
    },
    thumb:{
        position:"relative",
    },
    thumbInfo:{
        position:"absolute",
        bottom:0,
        left:0,
        width:"100%",
        maxWidth:"160px",
        background: "#fff",
        padding:theme.spacing(0.6,0,0.6,1),

        "& li":{
            display:"inline-block",
            color: "#999999",
            fontSize:"15px",

            "&:first-child ::after":{
                content:"'|'",
                padding: "0 7px",
            },    

            "& a":{
                color: "#999999",
                textDecoration:"none",
            }
        }
    },
    details:{
        marginTop:theme.spacing(2.4),

        "& a":{
            display:"inline-block",
            textDecoration:"none",
            color:"black",

            "& h6":{
                fontSize:"16px",
                lineHeight:"26px",
            }
        }
    }

}));

const PopularPost = () => {
    const classes = useStyles();
    const data = usePopularPostData();
    return (
        <div className={classes.popularPost}>
            <h4>Popular Posts</h4>
            <div className={classes.popularPostList}>
                <div className={classes.popularPostListWrapper}>
                    <div className={classes.thumb}>
                        <img src={data.allContentfulPopularPost.nodes[0].popularPostImg.fluid.src} alt="" width="100%"/>
                        <ul className={classes.thumbInfo}>
                            <li>
                                <Link to="/">Adam Colinge</Link>
                            </li>
                            <li>
                                <Link to="/">Dec 15</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.details}>
                        <Link to="/">
                            <h6>Tennessee outback steakhouse the worker diagnosed</h6>
                        </Link>
                    </div>
                </div>
                <div className={classes.popularPostListWrapper}>
                    <div className={classes.thumb}>
                        <img src={data.allContentfulPopularPost.nodes[1].popularPostImg.fluid.src} alt="" width="100%"/>
                        <ul className={classes.thumbInfo}>
                            <li>
                                <Link to="/">Adam Colinge</Link>
                            </li>
                            <li>
                                <Link to="/">Dec 15</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.details}>
                        <Link to="/">
                            <h6>Tennessee outback steakhouse the worker diagnosed</h6>
                        </Link>
                    </div>
                </div>
                <div className={classes.popularPostListWrapper}>
                    <div className={classes.thumb}>
                        <img src={data.allContentfulPopularPost.nodes[2].popularPostImg.fluid.src} alt="" width="100%"/>
                        <ul className={classes.thumbInfo}>
                            <li>
                                <Link to="/">Adam Colinge</Link>
                            </li>
                            <li>
                                <Link to="/">Dec 15</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.details}>
                        <Link to="/">
                            <h6>Tennessee outback steakhouse the worker diagnosed</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopularPost;
