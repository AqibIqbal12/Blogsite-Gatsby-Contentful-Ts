import React, { useContext, FC, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { Link, navigate } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PopupForm from '../PopupForm';
import 'reactjs-popup/dist/index.css';


import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    blogPostWrapper: {
        marginBottom: theme.spacing(6),
    },
    thumb: {
        height: "438px",
        position: "relative",

        [theme.breakpoints.only("xs")]: {
            height: "338px",
        },

        "& ul": {
            padding: theme.spacing(1.2, 0, 1.2, 2.5),
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "#fff",
            width: "100%",
            maxWidth: "415px",

            "& li": {
                listStyle: "none",
                display: "inline-block",
                fontSize: "17px",

                [theme.breakpoints.only("xs")]: {
                    fontSize: "15px",
                },

                "& a": {
                    display: "flex",
                    alignItems: "center",
                    marginRight: theme.spacing(1.1),
                    textDecoration: "none",
                    color: "gray",

                    "& span": {
                        marginLeft: theme.spacing(0.5),
                    }
                }
            }
        },
    },

    details: {
        color: "gray",
        marginTop: theme.spacing(3),
        padding: theme.spacing(0.5, 0),

        "& a": {
            textDecoration: "none",
            color: "black"
        },

        "& button": {
            marginTop: theme.spacing(1.2),
            fontSize: "15px",
            display: "inline-block",
            border: "1px solid #222",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: theme.spacing(1.2, 2.5),
            backgroundColor: "#222",
            varticalAllign: "middle",
            color: "#ff9907",
            cursor: "pointer",
            transition: "all .4s ease",

            "&:hover": {
                color: "black",
                backgroundColor: "#ff9907",
            },

        }
    },
}));

type BlogPostProps = {
    id: number,
    imgName: string,
    tag: string,
    heading: string,
    comments: number,
    date: string,
    desc: string
}

const BlogPost: FC<BlogPostProps> = ({ id, imgName, tag, heading, comments, date, desc }) => {

    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false)
    const { user }: any = useContext(AuthContext);
    //console.log(user);

    const ReadMore = () => {
        if (!user) {
            setOpenPopup(true);
        }
        else {
             navigate(`blog/${id}`);
        }
    }

    return (
        <>
            {!user && (
                <PopupForm popup={{ openPopup, setOpenPopup }} id={id} />
            )
            }
            <div className={classes.blogPostWrapper}>
                <div className={classes.thumb}>
                    <img src={`/images/blog_post/${imgName}`} width="100%" height="100%" alt="" style={{}} />
                    <ul>
                        <li>
                            <Link
                                to="/"> <PersonOutlineOutlinedIcon />
                                <span>Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"><CalendarTodayOutlinedIcon />
                                <span>{date}</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"><CommentOutlinedIcon />
                                <span>{comments} Comments</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={classes.details}>
                    <Link to="/">
                        <h3 style={{ fontSize: "27px" }}>{heading}</h3>
                    </Link>
                    <p style={{ marginTop: "10px" }}>Tag: <Link to="/"> {tag}</Link></p>
                    <div style={{ marginTop: "10px" }}>{documentToReactComponents(JSON.parse(desc))}</div>
                    <button onClick={ReadMore}>
                        <span>Read More</span>
                        <span><ArrowRightAltIcon style={{ verticalAlign: "middle" }} /></span>
                    </button>
                </div>
            </div>


        </>
    )
}

export default BlogPost;
