type Props = {
  title: string;
};

const ListTitle = ({ title }: Props) => {
  return <h1 className="lg:text-5xl text-3xl font-semibold">{title}</h1>;
};

export default ListTitle;
