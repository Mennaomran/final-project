import React, { Component, Fragment, } from "react";
import style from './style.module.css';
import img from "../../assets/developers.jpg";

export default class Home extends Component {
  render() {


    return (
      <Fragment>

        <div className={`${style.home}`}>
          <section className={`${style.container}`}>
            <div className="row ms-5">
              <div className="cont col-lg-6 col-sm-6 ">
                <h2>Welcome in our<span> community where you</span> can find what you need.</h2>
                <ul >
                  <li>Hire the best talent .</li>
                  <li>Pay only when you are 100% happy.</li>
                  <li>Start making your dreams reality.</li>
                </ul>
                <button className={`${style.button1}`}><span className=""></span>Hire Freelancer<i className="fa-solid fa-arrow-right ps-3 py-1"></i></button>
                <button className={`${style.button2}`}><span className=""></span>Start Freelancing<i className="fa-solid fa-arrow-right ps-3 py-1"></i></button>
              </div>
            </div>
          </section>



          <section className={`${style.container1}`}>
            <div className="row ">
              <div className="col-lg-2 col-sm-12"></div>
              <div className="col-lg-2 col-md-1 col-sm-1 c d-flex justify-content-around">
                <i className="fa-solid fa-user-tie  text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>800,000</h4>
                  <p>Employers Worldwide</p>
                </div>
              </div>

              <div className="col-lg-2  col-md-1 col-sm-1 d-flex justify-content-start">
                <i className="fa-solid fa-file-invoice-dollar text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>1 Million</h4>
                  <p>Paid Invoices</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-1 col-sm-1 d-flex justify-content-start ">
                <i className="fa-solid fa-hand-holding-dollar text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>$250 Million</h4>
                  <p>Paid to Freelancers</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-start ">
                <i className="fa-regular fa-face-smile-beam text-center mt-4 pe-1 fs-1"></i>
                <div className="mt-3">
                  <h4>99%</h4>
                  <p>Customer Satisfaction Rate </p>
                </div>
              </div>
            </div>
          </section >


          <section className={`${style.container2}`}>
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-5 pb-4">
                    <span>Make it real</span> <h1 className="">with Freelancer</h1>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>The best talent</h3>
                      <p>
                        Discover reliable professionals by exploring their
                        portfolios and immersing yourself in
                        the feedback shared on their profiles.</p>
                    </div>
                    <div className="col-lg-6">
                      <h3>Fast bids</h3>
                      <p>
                        Get quick, no-obligation quotes from skilled freelancers.
                        80% of jobs receive bids within
                        60 seconds. Your idea is just moments from reality.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>Quality work</h3>
                      <p>
                        With Freelancer's talent pool of over 60 million professionals
                        at your fingertips, you'll find quality talent to get what you need done.</p>
                    </div>
                    <div className="col-lg-6">
                      <h3>Be in control</h3>
                      <p>
                        Stay in the loop while on the move. Chat with your freelancers and get
                        real time updates with our mobile app. Anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-1"><img src="https://www.f-cdn.com/assets/main/en/assets/home/make-it-real/make-it-real-cards-ld.png" alt="" height={600} width={300} /></div>
            </div>

          </section>



          <section className={`${style.container3}`}>
            <div className="container">
              <div className="row">
              
                <div className="col-lg-4 sm-12">
                  <img src="https://www.keystonesubic.com/storage/2023/03/web-devlopment.jpg" alt=""
                    width={350}
                    height={630}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-12 py-1">
                      <img
                        src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
                        alt=""
                        width={250}
                        height={180}
                      />
                    </div>

                    <div className="col-lg-5 col-md-4 col-sm-12  ">
                      <img
                        src="https://www.velvetech.com/wp-content/uploads/2019/08/15-software-development-methodologies-fb.jpg"
                        alt=""
                        width={250}
                        height={180}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 py-1 m-2 ">
                      <img
                        src="https://www.brilworks.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F219851%2F550x283%2F4df17cf388%2Fevolution-of-generative-ai.webp&w=3840&q=30"
                        width={530}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-12 m-2">
                      <img
                        src="https://media.b2broker.com/app/uploads/2023/11/Overview-of-The-MetaTrader-4-Web-Platform.png"
                        alt=""
                        width={250}
                        height={180}
                      />
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-1 py-1">
                      <img
                        src="https://www.theknowledgeacademy.com/_files/images/Game_Development_Process_An_Overview.png"
                        alt=""
                        width={250}
                        height={180}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 sm-2"></div>
              </div>
            </div>
          </section>




    {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
          
    <div className={`container text-center py-5 ${style.container10}`}>
            <h1 className={`pt-5 ${style.h1}`}>
              Find the right Developer for you.
            </h1>
            <p className={`pt-3 ${style.p}`}>
              With over 30,000 Developers and 1M+ clients, we know language
              learning.
            </p>
          </div>
          {/* start of be a developer section */}
          <div className={`container ${style.container9}`}>
            <div className={`row m-5 ${style.row}`}>
              <div
                className={`col-lg-6 col-md-6 col-sm-12 ${style.muliimage}`}
              >
                <img
                  className={`ps-5 ${style.img1}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"500px"}
                />
                <img
                  className={`ps-3 pt-4 ${style.img2}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"470px"}
                />
                <img
                  className={`pt-5 ${style.img3}`}
                  src={img}
                  alt=""
                  width={"430px"}
                  height={"420px"}
                />
              </div>
              <div className={`col-lg-6 col-md-6 col-sm-12 ${style.text}`}>
                <h1>Start Your Journy as a Developer With us</h1>
                <h6>
                  Sign Up now <i class="fa-solid fa-arrow-down"></i>
                </h6>
                <button
                  style={{ color: "#ffff" }}
                  type="button"
                  class="btn btn-warning ms-5 px-3 mt-3"
                >
                  <i class="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          {/* end of be a developer section */}

          {/* ////////////////////////////////////////////////////////////////////////////////////////// */}





          <section className={`${style.container4}`}>
            <div classNam="container  ps-2  ">

              <div className="row pb-5">

                <h1 className="col-lg-7 sm-12 pb-5">A whole world of freelance talent at your fingertips.</h1>
              </div>
              <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-solid fa-table-cells fs-1"></i>
                  <h3 className="py-3">We have 300 categories </h3>
                  <p >Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-regular fa-handshake fs-1"></i>
                  <h3 className="py-3" >Clear,transparent pricing</h3>
                  <p >Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <i class="fa-solid fa-bolt-lightning fs-1"></i>
                  <h3 className="py-3">Quality work done faster</h3>
                  <p > Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <i class="fa-regular fa-clock fs-1"></i>
                  <h3 className="py-3 fs-4 pb-4">24/7award-winning support </h3>
                  <p >Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                </div>
              </div>
            </div>
          </section>



          <section className={`${style.container5}`}>
            <div className="container  mt-5">
              <div className="row">
                <div className="col-lg-5 col-sm-12 pt-5 mt-5">
                  <img src="https://www.f-cdn.com/assets/main/en/assets/home/global-talent/global-talent-cards-ld.png"
                    alt="" width={560} />
                </div>
                <div className="col-lg-1 col-sm-12 "></div>
                <div className="col-lg-6 col-sm-12  ">
                  <div className="col-lg-12 col-sm-12  pb-4">
                    <h1>Tap into a</h1>
                    <span>global talent network</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12  ">
                      <h3>Post your job</h3>
                      <p>
                        It's free and easy! Get lots of competitive bids that suit your budget in minutes.
                        Start making your dreams reality.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12  ">
                      <h3>Choose freelancers</h3>
                      <p>

                        No job is too big or complex. We've got freelancers for jobs of any size or budget,
                        across 2700+ skills. Let our talent bring your ideas to life</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12  ">
                      <h3>Pay safely</h3>
                      <p>
                        Only pay for work when you are 100% satisfied with the outcome. Our milestone payment
                        system protects you every step of the way</p>
                    </div>
                    <div className="col-lg-6 col-sm-12  ">
                      <h3>We're here to help</h3>
                      <p>
                        Your time is precious. Let our team of expert recruiters and
                        co-pilots save you time finding talent, even managing your job if needed.</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>



          <section className={`${style.container6}`}>
            <div className="container pb-5 mb-5">
              <div className="row">
                <div className="col-lg-8 sm-12 sm-12">
                  <div className="row">

                    <div className="col-lg-6 sm-12 sm-12">
                      <img src="https://www.sphereinc.com/wp-content/uploads/2022/05/cloud_cybersecurity.webp" alt="" width={400} height={180} />
                    </div>
                    <div className="col-lg-6 sm-12 sm-12">
                      <img src="https://bombaychamber.com/wp-content/uploads/2024/04/Online-Blockchain-Cryptocurrency-Certification-Course-scaled-1.jpg" alt="" width={400} height={180} />
                    </div>


                    <div className="row">
                      <div className="col-lg-12 py-3 sm-12 sm-12">
                        <img src="https://novawebbusiness.com/wp-content/uploads/2024/03/Web-Development.webp" alt="" width={835} height={200} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 sm-12 sm-12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUkqpOsgKKtlelRm8RvRZs3-4Xi1DMshFiA&s" alt="" width={400} height={180} />
                      </div>
                      <div className="col-lg-6 sm-12 sm-12">
                        <img src="https://www.newperspectivestudio.co.za/wp-content/uploads/2024/09/What-is-website-maintenance-and-Why-it-is-important.jpg" alt="" width={400} height={180} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 sm-12 sm-12">
                  <img src="https://media.licdn.com/dms/image/D4D12AQHcNSzLU7jiGA/article-cover_image-shrink_720_1280/0/1715785719025?e=2147483647&v=beta&t=8u6gqTJqGsPUNhgAAjxbFm9cdazu8EUYtU-ybD_z3gU" alt="" width={400} height={595} />

                </div>
              </div>
            </div>
          </section>




          <section className={`${style.container7}`}>
            <div >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h1>Get work done in <span>over 2000 </span>different categories</h1>
                  </div>

                  <div className="col-lg-6">

                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>Mobile app development</h4></a>
                      </div>
                      <div className="col-lg-6">
                        <a href="/"><h4>Wed development</h4></a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>Chatbot development</h4></a>
                      </div>
                      <div className="col-lg-6">
                        <a href="/"><h4>Game development</h4></a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>Web Maintenance</h4></a>
                      </div>
                      <div className="col-lg-6">
                        <a href="/"><h4>Web Platform</h4></a>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>Blockchain&Cyptoucrrency</h4></a>
                      </div>
                      <div className="col-lg-6">
                        <a href="/"><h4>Data Science&ML </h4></a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>Web Design</h4></a>
                      </div><div className="col-lg-6">
                        <a href="/"><h4>Cloud&Cybersecurity</h4></a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <a href="/"><h4>AI development</h4></a>
                      </div>
                      <div className="col-lg-6">
                        <a href="/"><h4>Software development</h4></a>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </Fragment >
    )
  }
}