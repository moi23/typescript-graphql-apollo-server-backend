const users = () => {
  return [
    {
      id: "1",
      userName: "Moisés",
    },
    {
      id: "2",
      userName: "Belle",
    },
    {
      id: "3",
      userName: "Cleitinho",
    },
  ];
};
const user = () => {
  return {
    id: "1",
    userName: "Moisés",
  };
};

export const userResolvers = {
  Query: {
    user: user,
    users: users,
  },
};
