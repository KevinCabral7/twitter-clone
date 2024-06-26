import Button from "../../components/Button";
import Item from "../../components/Item";
import Profile from "../../components/Profile";
import { NavContainer } from "./styles";

const Nav = () => {
  return (
    <>
      <NavContainer>
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
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.591 7.146 12.52 1.157a.937.937 0 0 0-1.04 0l-9.071 5.99A.906.906 0 0 0 2 7.904v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904a.934.934 0 0 0-.408-.758z" />
            </svg>
          }
          title={"Página Inicial"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25z" />
            </svg>
          }
          title={"Explorar"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.993 9.042a8.062 8.062 0 0 0-15.996.009L2.866 18H7.1a5.002 5.002 0 0 0 9.8 0h4.236l-1.143-8.958zM12 20a3.001 3.001 0 0 1-2.829-2h5.658A3.001 3.001 0 0 1 12 20zm-6.866-4 .847-6.698a6.062 6.062 0 0 1 12.028-.007L18.864 16H5.134z" />
            </svg>
          }
          title={"Notificações"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M1.998 5.5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5v-13zm2.5-.5a.5.5 0 0 0-.5.5v2.764l8 3.638 8-3.636V5.5a.5.5 0 0 0-.5-.5h-15zm15.5 5.463-8 3.636-8-3.638V18.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-8.037z" />
            </svg>
          }
          title={"Mensagens"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g clip-path="url(#a)" clip-rule="evenodd">
                <path d="M18 4.1H6A1.9 1.9 0 0 0 4.1 6v12c0 1.05.85 1.9 1.9 1.9h12a1.9 1.9 0 0 0 1.9-1.9V6A1.9 1.9 0 0 0 18 4.1zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z" />
                <path d="m6.68 17.8 8.108-11.58h2.532L9.21 17.8H6.68z" />
              </g>
              <defs>
                <clipPath id="a">
                  <rect height="20" rx="1" width="20" x="2" y="2" />
                </clipPath>
              </defs>
            </svg>
          }
          title={"Grok"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.501 19.917 7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672a9.115 9.115 0 0 0-1.212 1.656 4.388 4.388 0 0 0-1.658-.329c-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9a3.467 3.467 0 0 1-2.116-.73 3.483 3.483 0 0 1-1.384-2.77c0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77a3.467 3.467 0 0 1-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z" />
            </svg>
          }
          title={"Comunidades"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
            </svg>
          }
          title={"Perfil"}
        />
        <Item
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm9.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
            </svg>
          }
          title={"Mais"}
        />
        <Button children={"Postar"} />
        <Profile
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
            </svg>
          }
          name={"Kevin"}
          id={"@Kevin123456"}
        ></Profile>
      </NavContainer>
    </>
  );
};
export default Nav;
