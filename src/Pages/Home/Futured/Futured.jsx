import futuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Futures.css";
const Futured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"chek it out"}
        heading={"Futured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={futuredImg} alt="" />
        </div>
       
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            deserunt quasi possimus, adipisci error, tempora officia pariatur
            inventore, fugiat aperiam ipsum tempore nesciunt perspiciatis minima
            doloremque? Sunt necessitatibus eum, ea consequuntur ipsum
            doloremque veniam. Placeat soluta minima quae quam itaque! Facere
            repudiandae facilis, dolores animi nostrum officiis aperiam laborum
            sequi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Futured;
