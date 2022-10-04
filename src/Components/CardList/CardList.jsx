import React, { useState } from "react";
import { Buttons } from "../../styles/Buttons/buttons";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import { List } from "./styles";

const CardList = ({ product, cart, setCart }) => {
  const addProductInCart = (elem, cart, setCart) => {
    const isExistsProduct = cart.some((element) => element.id === elem.id);
    if (isExistsProduct) {
      const teste = cart.map((prod) => {
        return {
          ...prod,
          count: prod.count + 1,
        };
      });
      setCart(teste);
    } else {
      setCart((previousCart) => {
        return [...previousCart, { ...elem, count: 1 }];
      });
    }
    console.log(cart);
  };
  return (
    <List>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <TagConstructor
        tag="div"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="1rem"
        gap=".75rem"
      >
        <StyledTags tag="h3" typography="h3">
          {product.name}
        </StyledTags>
        <StyledTags tag="p" typography="caption">
          {product.category}
        </StyledTags>
        <StyledTags
          tag="span"
          typography="body-600"
          fontColor="var(--color-primary)"
        >
          R${product.price.toFixed(2)}
        </StyledTags>
        <Buttons
          typeButton="card"
          onClick={() => addProductInCart(product, cart, setCart)}
        >
          Adicionar
        </Buttons>
      </TagConstructor>
    </List>
  );
};

export default CardList;
