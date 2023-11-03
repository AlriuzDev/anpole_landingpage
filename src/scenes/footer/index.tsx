import Logo from "@/assets/Logo.png";

// type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            doloribus accusamus a? Obcaecati laboriosam eligendi voluptas,
            asperiores quae nesciunt officiis laborum illum! Animi nemo
            explicabo ad inventore commodi laudantium eveniet.
          </p>
          <small>© Evogym All Rights Reserved.</small>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">This is a Link</p>
          <p className="my-5">This is another Link</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Consectetur adipisicing elit!</p>
          <p className="my-5">(555) 555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
