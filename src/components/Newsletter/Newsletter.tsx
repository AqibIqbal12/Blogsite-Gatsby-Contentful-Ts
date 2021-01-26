import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme)=>({
    newsLetter: {
        backgroundColor:"#F9F9FF",
        padding: theme.spacing(6, 4),
        marginBottom: theme.spacing(3.5),

        "& h4": {
            fontSize: "25px",
            position: "relative",
            marginBottom: theme.spacing(2.8),
        },
        "& div":{
            marginBottom: theme.spacing(2),
            "& div":{
                "& input":{
                    width:"100%",
                    borderRadius: "0px",
                    fontSize: "14px",
                    color: "#999999",
                    padding: theme.spacing(0, 1.9),
                    height: "50px",
                    borderColor: "rgba(112,111,135,0.2)",
                    outline:"none",
                }
            }
        },
        "& button":{
            width:"100%",
            background: "#222",
            border: "1px solid #222",
            fontSize: "13px",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: theme.spacing(1.5, 2.5),
            borderRadius: 0,
            cursor: "pointer",
            color: "#ff9907",
            transition: "all .4s ease",

            "&:hover": {
                color: "black",
                backgroundColor: "#ff9907",
            },
        }
    }

}));

const Newsletter = () => {

    const classes = useStyles();
    return (
        <div className={classes.newsLetter}>
            <h4>Newsletter</h4>
            <div>
                <div>
                    <input type="text" name="" id="" placeholder="Enter email" />
                </div>
            </div>
            <button>Subcribe</button>
        </div>

    )
}
export default Newsletter;
