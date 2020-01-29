exports.seed = async knex => {
  await knex("users").insert([
    {
      username: "admin",
      password: "1234",
      department: "marketing"
    },
    {
      username: "manager",
      password: "4321",
      department: "HR"
    }
  ]);
};
