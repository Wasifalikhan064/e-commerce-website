import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
        return (
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                        Welcome to HWA Store, your ultimate destination for all your electronic needs! At HWA Store, we pride ourselves on providing a vast selection of high-quality electronic products, exceptional customer service, and an unmatched shopping experience. Whether you're a tech enthusiast, a professional seeking cutting-edge gadgets, or a casual shopper in search of everyday electronics, we have something for everyone.
                        </p>
                        <div className="ctas">
                            <div className="banner-cta">Read More</div>
                            <div className="banner-cta v2">Shop Now</div>
                        </div>
                    </div>
                    <img className="banner-img" src={BannerImg} />
                </div>
            </div>
        );


};

export default Banner;