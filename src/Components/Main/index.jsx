import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";
// import { StyledTags } from "../../styles/Typography/typography";
import { Constructors } from "../Constructor/constructor";
import Container from "../Container";

function Main({ list, setList }) {
  const [cart, setCart] = useState([]);
  console.log(setCart);

  useEffect(() => {
    api.get("/products").then((response) => {
      console.log(response);
      setList(response.data);
    });
  }, []);

  return (
    <TagConstructor tag="main">
      <Container>
        <TagConstructor
          tag="section"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <TagConstructor
            tag="ul"
            display="flex"
            gap=".5rem"
            width="65%"
            flexWrap="wrap"
            // flexWrap="wrap"
          >
            {/* <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList /> */}
            {list.map((card) => (
              <CardList
                key={card.id}
                product={card}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </TagConstructor>
          <TagConstructor tag="aside" width="26%" tagName="aside">
            <Cart cart={cart} setCart={setCart} />
          </TagConstructor>
        </TagConstructor>
      </Container>
    </TagConstructor>
  );
}

export default Main;
