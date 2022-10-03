import React from "react";
import { Buttons } from "../../styles/Buttons/buttons";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import ListCart from "../ListCart/ListCart";

const Cart = () => {
  return (
    <>
      <StyledTags
        tag="h3"
        typography="h3"
        textAlign="center"
        fontColor="var(--color-gray-0)"
        borderRadius="10px 10px 0px 0px"
        backgroundColor="var(--color-primary)"
        height="17%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Carrinho de Compras
      </StyledTags>
      <TagConstructor
        tag="section"
        display="flex"
        // alignItems="center"
        justifyContent="center"
        height="83%"
        width="100%"
        backgroundColor="var(--color-gray-0)"
      >
        <ListCart />
      </TagConstructor>
      <TagConstructor
        tag="div"
        display="flex"
        flexDirection="column"
        backgroundColor="var(--color-gray-0)"
      >
        <TagConstructor tag="div" display="flex" justifyContent="space-between">
          <StyledTags tag="h2" typography="h3">
            Total
          </StyledTags>
          <StyledTags tag="span" typography="body-600">
            R$40,00
          </StyledTags>
        </TagConstructor>
        <Buttons typeButton="card-disabled">Remover Todos</Buttons>
      </TagConstructor>
    </>
  );
};

export default Cart;
