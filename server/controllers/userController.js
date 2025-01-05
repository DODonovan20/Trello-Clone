const registerNewUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
};
export default registerNewUser;
