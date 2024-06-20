import { useState } from "react";
import Button from "../../components/Button";
import Item from "../../components/Item";
import * as S from "./style";

type Props = {
  isVisible: boolean;
};

const Login = ({ isVisible }: Props) => {
  const [modal, setModal] = useState<Props>({
    isVisible: false,
  });
  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };
  return (
    <>
      <S.LoginContainer>
        <div>
          <Item
            children={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            title={""}
          />
          <S.RegisterContainer>
            <h1>Acontencendo agora</h1>
            <h3>Inscreva-se hoje</h3>
            <Button children={"Inscrever-se no Google"} />
            <Button children={"Inscrever-se com Apple"} />
            <div>
              <hr />
              <span>ou</span>
              <hr />
            </div>

            <Button children={"Criar conta"} />
            <p>
              Ao se inscrever, você concorda com os Termos de Serviço e a
              Política de Privacidade, incluindo o Uso de Cookies.
            </p>
            <div>
              <p>Já tem uma conta?</p>
              <Button
                children={"Entrar"}
                onClick={() => {
                  setModal({
                    isVisible: true,
                  });
                }}
              />
            </div>
          </S.RegisterContainer>
        </div>
      </S.LoginContainer>

      <S.Modal className={modal.isVisible ? "is-visible" : ""}>
        <S.ModalContent className="container">
          <header>
            <img src={""} alt="X" onClick={closeModal} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </header>
          <form action="">
            <input
              type="text"
              placeholder="Celular, e-mail ou nome de usuário"
            />
            <input type="password" placeholder="Senha" />
            <button type="submit">Avançar</button>
          </form>
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  );
};

export default Login;
