import { Header } from "./styles";
// import { StyledTags } from "../../styles/Typography/typography";
import { Buttons } from "../../styles/Buttons/buttons";
import { Inputs } from "../../styles/Inputs/inputs";
import { Div } from "../../styles/Divs/divs";
import { TagConstructor } from "../../styles/Constructor/constructor";
import logo from "../../assets/logo/logo.svg";

const HeaderMain = () => {
  return (
    <Header>
      <TagConstructor tag="img" src={logo} />
      <Div>
        <Inputs type="text" placeholder="Digitar Pesquisa" />
        <Buttons typeButton="cart">Pesquisar</Buttons>
      </Div>
    </Header>
  );
};

export default HeaderMain;
