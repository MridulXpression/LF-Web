import Footer from "@/components/footer";
import Navbar from "../(navbar)/Navbar";
import WishlistBoards from "./Board";

const page = () => {
  return (
    <div>
      <Navbar />
      <WishlistBoards />
      <Footer />
    </div>
  );
};

export default page;
