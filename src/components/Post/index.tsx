import * as S from "./style";
import Profile from "../Profile";

const Post = () => {
  return (
    <S.PostContainer>
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
        id={"Kevin123456"}
      />
      <S.PostContent>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          neque distinctio laudantium reiciendis aliquid ipsum soluta? Sit quas,
          odio nulla eveniet aperiam optio facilis maiores explicabo culpa,
          sint, quasi at.
        </div>
        <div>
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.rawg.io%2Fmedia%2Fresize%2F420%2F-%2Fscreenshots%2F82d%2F82d82268f27fe67b88d617eac00f7e7f.jpg&tbnid=-ayKQ3N-69LqQM&vet=12ahUKEwibttPBxa6GAxXQN7kGHYGcC1UQMygJegQIARBU..i&imgrefurl=https%3A%2F%2Frawg.io%2Fgames%2Flyra-becoming-my-little-pogchamp&docid=UPbego4xeG55KM&w=420&h=420&q=pogchamp&client=firefox-b-d&ved=2ahUKEwibttPBxa6GAxXQN7kGHYGcC1UQMygJegQIARBU"
            alt=""
          />
        </div>

        <S.PostInterectsContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366a8.13 8.13 0 0 1 8.129 8.13c0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067A8.005 8.005 0 0 1 1.751 10zm8.005-6a6.005 6.005 0 1 0 .133 12.01l.351-.01h1.761v2.3l5.087-2.81A6.127 6.127 0 0 0 14.122 4H9.756z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m4.5 3.88 4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 0 1-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5a4 4 0 0 1 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.439 3.439 0 0 0-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.417 5.417 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.417 5.417 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
          </svg>
        </S.PostInterectsContainer>
      </S.PostContent>
    </S.PostContainer>
  );
};
export default Post;
