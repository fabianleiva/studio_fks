import HomeGallery from "../components/HomeGallery.jsx";

const Home = ({ setCursorText }) => {
  return (
    <>
      <main className="relative z-10 mt-[12vh] px-5 page-fade-in">
        {/* Home Main Custom Image Gallery*/}
        <HomeGallery setCursorText={setCursorText} />
      </main>
    </>
  );
};

export default Home;
