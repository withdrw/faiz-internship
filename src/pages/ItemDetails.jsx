import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {




  const [detail, setDetail] = useState();



  const {nftId} = useParams()




  useEffect(() => {

    const newDetails = axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`).then((response) => {
      setDetail(response.data)
    })



    window.scrollTo(0, 0);

  }, []);



  console.log(detail)
  return (


    
    
    <div id="wrapper">


      

    
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            { detail ? 
            
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={detail?.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                  />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{detail?.title} #{detail?.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {detail?.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {detail?.likes}
                    </div>
                  </div>
                  <p>
                    {detail?.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detail?.ownerId}`}>
                            <img className="lazy" src={detail?.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detail?.ownerId}`}>{detail?.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detail?.creatorId}`}>
                            <img className="lazy" src={detail?.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detail?.creatorId}`}>{detail?.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{detail?.price} ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :  
            <div className="row">
              <div className="col-md-6 text-center">
               <Skeleton width={'100%'} height={'100%'}></Skeleton>
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2><Skeleton width={300} height={340}></Skeleton></h2>

                  <div className="item_info_counts">
                    <Skeleton width={80} height={30}></Skeleton>
                    <Skeleton width={80} height={30}></Skeleton>
                    
                  </div>
                  <p>
                   <Skeleton width={'100%'} height={80}></Skeleton>
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to='/'>
                            <Skeleton width={50} height={50} borderRadius={'50%'}></Skeleton>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Skeleton width={125} height={20}></Skeleton>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to='/'>
                          <Skeleton width={50} height={50} borderRadius={'50%'}></Skeleton>
                          </Link>
                        </div>
                        <div className="author_list_info">
                        <Skeleton width={125} height={20}></Skeleton>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <Skeleton width={75} height={20} ></Skeleton>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
          </div>
          </section>
          </div>
          </div>
          );
        };

export default ItemDetails;
