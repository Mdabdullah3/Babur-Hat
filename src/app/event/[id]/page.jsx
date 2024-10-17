import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import EventCard from "../../../components/EventCard";
const page = ({ params }) => {
  const { id } = params;

  return (
    <main>
      <Navbar />
      <EventCard id={id} />
      <Footer />
    </main>
  );
};

export default page;
