import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="absolute inset-0 flex justify-center items-center overflow-hidden px-3 font-work-sans page-fade-in">
      <section className="text-center">
        <div>
          <p>Malaga 254, oficina 52</p>
          <p>Las Condes, Santiago. CHILE</p>
          <p>Zip 7510077</p>
          <p className="mt-5">+56 9 6835 4322</p>
          <p>+56 9 6727 5050</p>
          <p>+56 9 7969 8916</p>
        </div>
        <div className="mt-5">
          <p>fksarquitectos@gmail.com</p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/studiofks_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#adadad] hover:text-[#000000]"
            >
              <FaInstagram className="text-lg mr-1" />
              fks_aa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
