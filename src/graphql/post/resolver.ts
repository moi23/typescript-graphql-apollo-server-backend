const posts = () => {
  return [
    {
      id: "1",
      title: "TESTE POST 1",
    },
    {
      id: "2",
      title: "TESTE POST 2",
    },
    {
      id: "3",
      title: "TESTE POST 3",
    },
  ];
};
const post = () => {
  return {
    id: "1",
    title: "TESTE POST UNICO",
  };
};

export const postResolvers = {
  Query: {
    post: post,
    posts: posts,
  },
};
