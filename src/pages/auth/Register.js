import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type="email" placeholder="Type your Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <span className={styles.register}>
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>

      <div className={styles.img}>
        <img src={registerImg} alt="Register" width="400" />
      </div>
    </section>
  );
};

export default Register;
