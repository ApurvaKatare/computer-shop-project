import Footer from "./Footer";
import Service from "./Service";

const Home=()=>{
    return(
        <>
        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/crousal1.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption cara-desc d-none d-md-block">
        <h5 style={{fontSize:"3rem"}}>Having problems with your laptop ?</h5>
        <h4 style={{fontSize:"3rem"}}>We are just a call away !</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/crousal2.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption cara-desc d-none d-md-block">
        <h5 style={{fontSize:"3rem"}}>One stop solution for all computer problems</h5>
        <h4 style={{fontSize:"3rem"}}>Book online and get a free diagnosis !!</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/crousal3.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption cara-desc d-none d-md-block">
        <h5 style={{fontSize:"3rem"}} className="cara-desc-title">Is Your Laptop Slow ??</h5>
        <h4 style={{fontSize:"3rem"}} className="cara-desc-title">Upgrade to an SSD now !!</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>

  <Service/>
  <Footer/>
</div>

        </>
    )
}

export default Home;