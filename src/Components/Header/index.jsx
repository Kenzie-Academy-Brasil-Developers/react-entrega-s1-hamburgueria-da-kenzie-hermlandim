import { Header } from "./styles";
// import { StyledTags } from "../../styles/Typography/typography";
import { Buttons } from "../../styles/Buttons/buttons";
import { Inputs } from "../../styles/Inputs/inputs";
import { Form } from "../../styles/Divs/divs";
import { TagConstructor } from "../../styles/Constructor/constructor";
import logo from "../../assets/logo/logo.svg";
import Container from "../Container";
import { useState } from "react";

const HeaderMain = ({ list, setList, originalList }) => {
  const [value, setValue] = useState("");

  const findProduct = (event) => {
    event.preventDefault();
    console.log(list);
    console.log(value);
    const findFiltered = originalList.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(findFiltered);
    findFiltered.length === 0 ? setList(originalList) : setList(findFiltered);
  };
  return (
    <Header>
      <Container display="flex" justifyContent="space-between">
        <TagConstructor tag="img" src={logo} />
        <Form onSubmit={findProduct}>
          <Inputs
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setValue(event.target.value)}
          />
          <Buttons type="submit" typeButton="cart">
            Pesquisar
          </Buttons>
        </Form>
      </Container>
    </Header>
  );
};

export default HeaderMain;
