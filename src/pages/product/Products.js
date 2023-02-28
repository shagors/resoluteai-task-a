import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./Products.module.scss";
import { app, database } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Products = () => {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  return (
    <div className={styles["products-main"]}>
      <h2>ALL PRODUCTS</h2>
    </div>
  );
};

export default Products;
