import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function section3() {
    return (
        <>
            <section className="services center section-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subtitle">What We Do</div>
                            <div className="section-title">Our <span>Services</span></div>
                        </div>
                    </div>
                    <div className="row">
                        <Splide options={{
                            type: 'loop',
                            pagination: true, arrows: false, cover: true, gap: 50, perPage: 3, hheight: "550px",
                            breakpoints: { 1200: { height: "550px", perPage: 3 }, 1050: { height: "550px", perPage: 2 }, 600: { height: 600, perPage: 1 } },
                        }}>
                            <SplideSlide>
                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-1.jpg" alt /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-new-construction" /> </div>
                                        <h5><a href="services-page.html">Project Planning</a></h5>
                                        <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>

                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-2.jpg" alt /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-construction-sign" /> </div>
                                        <h5><a href="services-page.html">Commercial & Residential</a></h5>
                                        <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="item mb-30">
                                    <div className="service-img">
                                        <div className="img"> <img src="https://www.aspbuilding.com.au/data/uploads/images/services/service-3.jpg" alt /> </div>
                                    </div>
                                    <div className="cont">
                                        <div className="service-icon"> <i className="asp-factory" /> </div>
                                        <h5><a href="services-page.html">Construction & Renovation</a></h5>
                                        <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
                                    </div>
                                </div>
                            </SplideSlide>


                        </Splide>
                    </div>
                </div>
            </section>
        </>
    )
}
