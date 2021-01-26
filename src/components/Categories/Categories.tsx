import { makeStyles } from '@material-ui/core';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';

import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
    category: {
        backgroundColor: "#F9F9FF",
        padding: theme.spacing(6, 4),
        marginBottom: theme.spacing(3.5),

        "& h4": {
            fontSize: "25px",
            position: "relative",
            //zIndex: 1;
            marginBottom: theme.spacing(2.8),
        },
        "& ul": {
            listStyleType: "none",
            marginTop: theme.spacing(2.5),
            
            "& li": {
                padding: theme.spacing(1.5, 2.5),
                background: "#ffffff",
                marginBottom: theme.spacing(2),
                transition: "all 0.3s ease 0s",

                "&:hover": {
                    cursor:"pointer",
                    color: "#ff9907",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                },

                "& a": {
                    textDecoration: "none",
                    color: "gray",
                    display: "flex",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease 0s",

                    "&:hover": {
                        color: "#ff9907",
                    }
                }
            }
        }
    }

}))

type CategoriesProp = {
    setCategory: Dispatch<SetStateAction<string>>
    fashionPosts: number,
    technologyPosts: number,
    travelPosts: number,
}

const Categories:FC<CategoriesProp> = ({setCategory, fashionPosts, technologyPosts, travelPosts}) => {

    const classes = useStyles();
    const [activeCategory, setActiveCategory] = useState("TRAVEL")

    return (
        <div className={classes.category}>
            <h4>Categories</h4>
            <ul>
                <li onClick={(e) => {e.preventDefault(); setCategory("TRAVEL"); setActiveCategory("TRAVEL")}}>
                    <Link to="#blogPostSection" style={ activeCategory === "TRAVEL" ? {color: "#ff9907",} : {}}>
                        <p>Travel</p>
                        <p>({travelPosts})</p>
                    </Link>
                </li>
                <li onClick={(e) => {e.preventDefault(); setCategory("TECHNOLOGY"); setActiveCategory("TECHNOLOGY")}}>
                    <Link to="#blogPostSection" style={ activeCategory === "TECHNOLOGY" ? {color: "#ff9907",} : {}}>
                        <p>Technology</p>
                        <p>({technologyPosts})</p>
                    </Link>
                </li>
                <li onClick={(e) => {e.preventDefault(); setCategory("FASHION"); setActiveCategory("FASHION")}}>
                    <Link to="#blogPostSection" style={ activeCategory === "FASHION" ? {color: "#ff9907",} : {}}>
                        <p>Fashion</p>
                        <p>({fashionPosts})</p>
                    </Link>
                </li>
            </ul>
        </div >
    )
}
export default Categories;
