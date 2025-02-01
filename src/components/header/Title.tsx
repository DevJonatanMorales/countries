interface PropTitle {
  message: string;
}
export const Title = ({ message }: PropTitle) => {
  return <h1 className="article__title">{message}</h1>;
};
