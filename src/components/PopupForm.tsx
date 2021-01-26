import firebase from 'firebase';
import React, { FC, useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    h1: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    h2: {
        textAlign: 'center',
    },
    form: {
        border: '3px solid #f1f1f1'
    },
    container: {
        padding: '16px',
    },
    input: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button_submit: {
        backgroundColor: 'black',
        color: '#F09804',
        fontSize: "16px",
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        cursor: 'pointer',
        width: '100%',

        '&:hover': {
            opacity: '0.8',
            backgroundColor: '#F09804',
            color: 'black',

        }
    }
}))


type PopupFormProps = {
    popup: { openPopup: boolean, setOpenPopup: React.Dispatch<React.SetStateAction<boolean>> },
    id: number,
}

const PopupForm: FC<PopupFormProps> = ({ popup: { openPopup, setOpenPopup }, id }) => {

    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
    });
    const { setUser }: any = useContext(AuthContext)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null });

        if (isLogin) {
            try {
                const result = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                //console.log(result)
                setUser(result);
                navigate(`blog/${id}`);
            }
            catch (err) {
                setData({ ...data, error: err.message });
            }
        }
        else {
            try {
                const result = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                setUser(result);
                navigate(`blog/${id}`);
            }
            catch (err) {
                setData({ ...data, error: err.message });
            }
        }
    }


    return (
        <Popup open={openPopup} contentStyle={{ width: 'auto' }} onClose={() => setOpenPopup(false)}>
            <div style={{ width: "350px" }}>
                <h1 className={classes.h1}>{isLogin ? 'Please login to continue!' : ''}</h1>
                <h2 className={classes.h2}>{isLogin ? 'Login' : 'Create Account'}</h2>
                <form className={classes.form}>
                    <div className={classes.container}>
                        <label ><b>Email</b></label>
                        <input
                            type="email"
                            className={classes.input}
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            name="email"
                            required />

                        <label><b>Password</b></label>
                        <input
                            type="password"
                            className={classes.input}
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            name="password"
                            required />
                        {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className={classes.button_submit}>{isLogin ? 'Login' : 'Signup'}
                        </button>
                    </div>
                    <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', opacity: 0.7 }}>
                        {isLogin ? 'No account? Create one' : 'Already have an account?'}
                    </p>
                </form>

            </div>

        </Popup>
    )
}

export default PopupForm;
