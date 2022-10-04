import React from "react";
import { Buttons } from "../../styles/Buttons/buttons";
import { TagConstructor } from "../../styles/Constructor/constructor";
import { StyledTags } from "../../styles/Typography/typography";
import { List } from "./styles";

const ListCart = ({ cart, setCart }) => {
  console.log(cart);

  const removeItem = (setCart, elem) => {
    console.log(cart);
    console.log(elem);
    const attCart = cart.filter((newProd) => newProd.name !== elem.name);
    console.log(attCart);
    setCart(attCart);
  };

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
        {cart.map((elem, key) => (
          <List key={key}>
            <figure>
              <img src={elem.img} alt={elem.name} />
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
                {elem.name}
              </StyledTags>
              <StyledTags tag="p" typography="caption">
                {elem.category}
              </StyledTags>
            </TagConstructor>
            <Buttons
              typeButton="cart-disabled"
              onClick={() => removeItem(cart, setCart, elem.name)}
            >
              Remover
            </Buttons>
          </List>
        ))}
      </TagConstructor>
    </>
  );
};

export default ListCart;
