import React from "react";
import { Buttons } from "../../styles/Buttons/buttons";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import { List } from "./styles";

const ListCart = () => {
  return (
    <>
      <TagConstructor
        tag="div"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* <StyledTags tag="h3" typography="h3">
        Sua sacola está vazia
      </StyledTags>
      <StyledTags tag="h4" typography="body">
        Adicione itens
      </StyledTags> */}
      </TagConstructor>
      <TagConstructor tag="ul">
        <List>
          <figure>
            <img src="https://i.imgur.com/Vng6VzV.png" alt="" />
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
              Hamburger
            </StyledTags>
            <StyledTags tag="p" typography="caption">
              Sanduíches
            </StyledTags>
          </TagConstructor>
          <Buttons typeButton="cart-disabled">Remover</Buttons>
        </List>
      </TagConstructor>
    </>
  );
};

export default ListCart;