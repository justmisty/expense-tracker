import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const Homepage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="container">
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction />
    </main>
  );
};

export default Homepage;