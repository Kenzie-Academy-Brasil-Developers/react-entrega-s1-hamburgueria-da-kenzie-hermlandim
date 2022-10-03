import React from "react";
import { Buttons } from "../../styles/Buttons/buttons";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import { List } from "./styles";

const CardList = ({ product }) => {
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
        <Buttons typeButton="card">Adicionar</Buttons>
      </TagConstructor>
    </List>
  );
};

export default CardList;
