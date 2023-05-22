import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Skeleton from "../UI/Skeleton";


const HotCollections = () => {


  const [data, setData]  = useState(null)


useEffect(() => {
  
  const hotData =  axios.get(`${`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`}`).then((response) => {
    setData(response.data)
  })

  
},[data === null])

  

console.log(data)




  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {/* {new Array(4).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={AuthorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div>
          ))} */}




  <OwlCarousel data-aos='fade-right'  className='owl-theme' loop nav items={4} dots={false} margin={14}>

           {data ? data?.map((items) => { 
             
             return (
               
               <div key={items?.id}>
             <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to={`/item-details/${items?.nftId}`}>
                    <img src={items.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to={`/author/${items?.authorId}`}>
                    <img className="lazy pp-coll" src={items.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{items.title}</h4>
                  </Link>
                  <span>ERC-{items.code}</span>
                </div>
              </div>
            </div>
            )
          }) 
          : 
          <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to='/'>
                    <Skeleton width={'100%'} height={200}> </Skeleton>
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to='/'>
                    <Skeleton width={50} height={50} borderRadius={'50%'}> </Skeleton>
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/">
                    <Skeleton width={100} height={20} ></Skeleton>
                  </Link>
                  <br  />
<Skeleton width={60} height={20}></Skeleton>

                </div>
              </div>
}
          </OwlCarousel>
        </div>
      </div>
    </section>
    );
};


export default HotCollections;
