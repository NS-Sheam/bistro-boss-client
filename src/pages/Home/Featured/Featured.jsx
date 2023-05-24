import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-cover text-white pt-8 my-20">
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 gap-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-x-2 text-center">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eius magni, dignissimos corporis, ipsa nam minima blanditiis ratione cumque autem tempore quas saepe. Soluta dolores voluptas reiciendis ipsam ea ducimus, maxime optio ut officia error rerum mollitia labore consectetur eum deleniti odio modi eius, in aspernatur debitis tempora consequatur quis?</p>
                <button className="btn btn-outline border-0 border-b-4 border-white hover:bg-white text-white hover:text-black"> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;