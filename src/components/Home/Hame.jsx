import React from "react";
import "../../assets/style/Home.css";
import HomeBigImg from "../../assets/image/HomeBig.svg"
import HomeBigImg2 from "../../assets/image/HomeBig2.svg"
import SliderImg from "../../assets/image/Slider.svg"
import KyrychImg from "../../assets/image/kyrych.svg"
import RisImg from "../../assets/image/ris.svg"
import MeatImg from "../../assets/image/Meat.svg"
import DesertImg from "../../assets/image/Desert.svg"
import ButerImg from "../../assets/image/Buter.svg"
import ChocolateImg from "../../assets/image/Chocolate.svg"
import TImeIcon from "../../assets/image/Time.svg"
import VilkaNoj from "../../assets/image/VilkaNoj.svg"
import Svitak from "../../assets/image/Svitak.svg"
import PlayBar from "../../assets/image/PlayBar.svg"
import UserImg from "../../assets/image/UserMan.svg"
import BurgerImg from "../../assets/image/Burger.svg"
import FishImg from "../../assets/image/Fish.svg"
import TortImg from "../../assets/image/Tort.svg"
import OrehImg from "../../assets/image/Oreh.svg"
import Shashlyk from "../../assets/image/Shashlyk.svg"
import SalatImg from "../../assets/image/Salat.svg"
import TortDisert from "../../assets/image/TortDisert.svg"
import BananDisert from "../../assets/image/BananDisert.svg"
import Pasta from "../../assets/image/Pasta.svg"
import SerdseImg from "../../assets/image/Serdse.svg"
import SmmokeSerdse from "../../assets/image/SmokeSerdse.svg"
import PovarImg from "../../assets/image/Povar.svg"
import AvatarImg from "../../assets/image/avatar.svg"
import Icon1 from "../../assets/image/Icon1Home.svg"
import Icon2 from "../../assets/image/Icon2Home.svg"
import SerdseIcon from "../../assets/image/SerdseImg.svg"
import ComentImg from "../../assets/image/Comantari.svg"
import SamaletImg from "../../assets/image/Samalet.svg"
import FavoriteImg from "../../assets/image/Favorite.svg"
import iconAvatar from "../../assets/image/iconAvatar.svg"
import ktk from "../../assets/image/ktk.svg"
import kcd from "../../page/assets/mask-group-KCD.png";


const Home = () => {
  const handleSubmit = () => {
    // Здесь вы можете добавить логику обработки формы, если это необходимо

    // После обработки формы, обновите страницу
    window.location.reload();
  };
  return (
    
    <>
    <div className="container">
     <div className="home-page-JXT">
  <div className="auto-group-enxb-q2q">
    <img className="rectangle-5-yPw" src={ktk}/>
    <div className="featured-recipe-Kih">
      <img className="rectangle-1-eW5" src={HomeBigImg}/>
      <img className="mask-group-zpq" src={HomeBigImg2}/>
      <p className="spicy-delicious-chicken-wings-YbT">Spicy delicious chicken wings</p>
      <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-NKb">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      <div className="group-825-CZX">
        <div className="ellipse-2-7gV">
        </div>
        <div style={{display: "flex", alignItems: "center"}} className="auto-group-hjff-SCy">
          <img src={UserImg} alt="" />
          <div className="">
          <p className="john-smith-LZF">John Smith</p>
          <p className="march-2022-fbX">15 March 2022</p>
          </div>
        </div>
      </div>
      <div className="group-831-y6R">
        <div className="group-829-eTT">
          <img className="timer-1Yu" src={TImeIcon}/>
          <p className="minutes-iTK">30 Minutes</p>
        </div>
      </div>
      <div className="group-832-Bbo">
        <div className="group-830-7VT">
          <img className="forkknife-gHf" src={VilkaNoj}/>
          <p className="chicken-E4H">Chicken</p>
        </div>
      </div>
      <div style={{cursor: "pointer"}} className="group-826-JK3">
        <div className="group-833-P5b">
          <p className="view-recipes-idf">View Recipes</p>
          <img className="playcircle-S3s" src={PlayBar}/>
        </div>
      </div>
      <div className="group-828-AVf">
        <div className="group-827-HqB">
          <img className="image-14-1mB" src={Svitak}/>
          <p className="hot-recipes-pid">Hot Recipes</p>
        </div>
      </div>
      <div className="badge-4N5">
        <img className="linked-ellipse-4-LKb" src={SliderImg}/>
      </div>
    </div>

  </div>
  <div className="auto-group-jrpj-M13">
    <div className="categories-gZ7">
      <div className="auto-group-rh9t-qgu">
        <p className="categories-PyK">Categories</p>
        <div className="group-843-XZj">View All Categories</div>
      </div>
      <div className="group-842-729">
        <div className="group-836-qD3">
          <div className="rectangle-7-Zuj">
          </div>
          <p className="breakfast-sfX">Breakfast</p>
          <img className="image-25-8rM" src={KyrychImg}/>
        </div>
        <div className="group-837-Tdj">
          <div className="rectangle-7-CLR">
          </div>
          <p className="vegan-Wc1">Vegan</p>
          <div className="group-879-nZX">
            <img className="image-19-ii5" src={RisImg}/>
          </div>
        </div>
        <div className="group-838-Nnd">
          <div className="rectangle-7-hK7">
          </div>
          <p className="meat-RF7">Meat</p>
          <img className="image-20-iV7" src={MeatImg}/>
        </div>
        <div className="group-839-pY9">
          <div className="rectangle-7-ZVj">
          </div>
          <p className="dessert-5ys">Dessert</p>
          <img className="image-21-B1K" src={DesertImg}/>
        </div>
        <div className="group-840-GYZ">
          <div className="rectangle-7-2nd">
          </div>
          <p className="lunch-6Gh">Lunch</p>
          <img className="image-22-1Pf" src={ButerImg}/>
        </div>
        <div className="group-841-tiM">
          <div className="rectangle-7-TFf">
          </div>
          <p className="chocolate-P9K">Chocolate</p>
          <img className="image-23-dZT" src={ChocolateImg}/>
        </div>
      </div>
    </div>
    <div className="recipes-Kx5">
      <div className="auto-group-nvyz-pdw">
        <p className="simple-and-tasty-recipes-kXb">Simple and tasty recipes</p>
        <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-rad">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="auto-group-gcp9-5TP">
        <div className="group-845-ciD">
        <img style={{position:"absolute"}} src={BurgerImg } alt="" />
          <div className="auto-group-ptwm-Z1B">
            <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SerdseImg   }/>
          </div>
          <p className="big-and-juicy-wagyu-beef-cheeseburger-aws">Big and Juicy Wagyu Beef Cheeseburger</p>
          <div className="auto-group-csob-Fo7">
            <div className="group-829-yz1">
              <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-UQy">30 Minutes</p>
            </div>
            <div className="group-830-A2u">
              <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="snack-EHf">Snack</p>
            </div>
          </div>
        </div>
        <div className="group-845-SuX">
          <img style={{position:"absolute"}} src={FishImg} alt="" />
          <div className="auto-group-6ywx-LV7">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={  SmmokeSerdse }/>
          </div>
          <p className="fresh-lime-roasted-salmon-with-ginger-sauce-CnD">Fresh Lime Roasted Salmon with Ginger Sauce</p>
          <div className="auto-group-gyuq-GGH">
            <div className="group-829-C9w">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-VPw">30 Minutes</p>
            </div>
            <div className="group-830-R2h">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="fish-JMP">Fish</p>
            </div>
          </div>
        </div>
        <div className="group-845-Hz1">
        <img style={{position:"absolute"}} src={TortImg} alt="" />
          <div className="auto-group-egjt-cmP">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SmmokeSerdse   }/>
          </div>
          <p className="strawberry-oatmeal-pancake-with-honey-syrup-4tH">Strawberry Oatmeal Pancake with Honey Syrup</p>
          <div className="auto-group-w3a1-mnh">
            <div className="group-829-WEV">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-bmj">30 Minutes</p>
            </div>
            <div className="group-830-vp1">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="breakfast-BE9">Breakfast</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-group-wezo-p2D">
        <div className="group-845-kRf">
        <img style={{position:"absolute"}} src={OrehImg} alt="" />
          <div className="auto-group-suvj-gKK">
            <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SmmokeSerdse   }/>
          </div>
          <p className="fresh-and-healthy-mixed-mayonnaise-salad-jYV">Fresh and Healthy Mixed Mayonnaise Salad</p>
          <div className="auto-group-aglh-EEM">
            <div className="group-829-mEH">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-HCd">30 Minutes</p>
            </div>
            <div className="group-830-AnD">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="healthy-V3o">Healthy</p>
            </div>
          </div>
        </div>
        <div className="group-845-Lq7">
        <img style={{position:"absolute"}} src={Shashlyk} alt="" />

          <div className="auto-group-nk8y-1AZ">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SerdseImg   }/>
          </div>
          <p className="chicken-meatballs-with-cream-cheese-ezD">Chicken Meatballs with Cream Cheese</p>
          <div className="auto-group-njgh-NfK">
            <div className="group-829-uQM">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-b2H">30 Minutes</p>
            </div>
            <div className="group-830-h5K">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="meat-R1K">Meat</p>
            </div>
          </div>
        </div>
        <div className="ads-Sh7">
        <img style={{position:"absolute"}} src={SalatImg} alt="" />
          <p className="dont-forget-to-eat-healthy-food-CgH">
          Don’t forget to eat 
          <br/>
          healthy food
          </p>
          <div className="item-01-Gw3">
          </div>
          <p className="wwwfoodielandcom-J73">www.foodieland.com</p>
        </div>
      </div>
      <div className="auto-group-jjid-mFX">
        <div className="group-845-K29">
        <img style={{position:"absolute"}} src={TortDisert} alt="" />

          <div className="auto-group-raqq-doX">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SmmokeSerdse   }/>
            </div>
          <p className="fruity-pancake-with-orange-blueberry-hHb">Fruity Pancake with Orange &amp; Blueberry</p>
          <div className="auto-group-fjyd-DFw">
            <div className="group-829-kFs">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-qHK">30 Minutes</p>
            </div>
            <div className="group-830-wLM">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="sweet-EKT">Sweet</p>
            </div>
          </div>
        </div>
        <div className="group-845-ghF">
        <img style={{position:"absolute"}} src={BananDisert} alt="" />
          <div className="auto-group-lg6v-p2m">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SmmokeSerdse   }/>
          </div>
          <p className="the-best-easy-one-pot-chicken-and-rice-eXb">The Best Easy One Pot Chicken and Rice</p>
          <div className="auto-group-oslz-Mwo">
            <div className="group-829-Vo7">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-oJ1">30 Minutes</p>
            </div>
            <div className="group-830-sYm">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="snack-bUm">Snack</p>
            </div>
          </div>
        </div>
        <div className="group-845-HMb">
        <img style={{position:"absolute"}} src={Pasta} alt="" />
          <div className="auto-group-jpv1-zG1">
          <img style={{position: "absolute", zIndex: "100"}} className="group-852-tJM" src={SmmokeSerdse   }/>
          </div>
          <p className="the-creamiest-creamy-chicken-and-bacon-pasta-2yP">The Creamiest Creamy Chicken and Bacon Pasta</p>
          <div className="auto-group-sxtk-X9T">
            <div className="group-829-nbB">
            <img className="timer-LZf" src={TImeIcon}/>
              <p className="minutes-ZkM">30 Minutes</p>
            </div>
            <div className="group-830-UMX">
            <img className="forkknife-8Ed" src={VilkaNoj}/>
              <p className="noodles-MAR">Noodles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="learn-more-q5b">
      <div className="group-853-b4m">
        <p className="everyone-can-be-a-chef-in-their-own-kitchen-JE5">
        Everyone can be a
        <br/>
        chef in their own kitchen
        </p>
        <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-zMo">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <div className="group-826-GaD">Learn More</div>
      </div>
      <div className="group-880-8cR">
        <div className="rectangle-8-ysw">
        </div>
        <div className="portrait-happy-male-chef-dressed-uniform-1-gnM">
        </div>
        <img style={{position: "absolute", top: "0"}} src={PovarImg} alt="" />
      </div>
    </div>
  </div>
  <div className="instagram-U5w">
    <div className="group-857-Pyb">
      <p className="check-out-foodieland-on-instagram-KMT">Check out @foodieland on Instagram</p>
      <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-dd3">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    </div>
    <div className="auto-group-9eqo-VQM">
      <div className="post-Dr9">
        <div className="post-top-aRo">
          <img className="oval-sA1" src={AvatarImg}/>
          <div className="auto-group-ebut-9tD">
            <p className="joshual-74M">Foodieland.</p>
            <p className="tokyo-japan-BK7">Tokyo, Japan</p>
          </div>
          <img className="official-icon-W6V" src="./assets/official-icon-LK3.png"/>
          <img className="more-icon-2qX" src="./assets/more-icon-ySH.png"/>
        </div>
        <div className="auto-group-cj1s-vR7">
          <div className="photo-number-FyB" style={{zIndex:'9999'}}>1/3
              
          </div>
          <img style={{position: "relative", left:'-253px',top:'-280px', zIndex:'0'}} src={Icon1} alt="" />
        </div>
        <div className="post-bottom-u29">
          <div className="auto-group-gpkd-2cZ">
            <img className="like-NwK" src={SerdseIcon}/>
            <img className="comment-7tu" src={ComentImg}/>
            <img className="messanger-Dh3" src={SamaletImg}/>
            <img className="pagination-kws" src="./assets/pagination.png"/>
            <img className="save-VuT" src={FavoriteImg}/>
          </div>
          <div className="likes-info-qTX">
            <img className="oval-Mgm" src="./assets/oval-5wo.png"/>
            <p className="liked-by-craiglove-6PT">
              <span className="liked-by-craiglove-6PT-sub-0">Liked by </span>
              <span className="liked-by-craiglove-6PT-sub-1">craig_love</span>
              <span className="liked-by-craiglove-6PT-sub-2"> and </span>
              <span className="liked-by-craiglove-6PT-sub-3">44,686 others</span>
            </p>
          </div>
          <p className="joshual-the-game-in-mnR">
            <span className="joshual-the-game-in-mnR-sub-0">Foodieland.</span>
            <span className="joshual-the-game-in-mnR-sub-1"> </span>
            <span className="joshual-the-game-in-mnR-sub-2">The vegetables dishes need to have certain vitamin for those people</span>
          </p>
          <p className="september-19-atH">September 19</p>
        </div>
      </div>
      <div className="post-edF">
        <div className="post-top-amo">
        <img className="oval-sA1" src={AvatarImg}/>
          <div className="auto-group-nvhb-afK">
            <p className="joshual-Y6M">Foodieland.</p>
            <p className="tokyo-japan-GY9">Tokyo, Japan</p>
          </div>
          <img className="official-icon-QeM" src="./assets/official-icon-Tpm.png"/>
          <img className="more-icon-JDw" src="./assets/more-icon.png"/>
        </div>
        <div className="auto-group-bnnm-PWH">
          <div className="photo-number-hms" style={{zIndex:'9999'}}>1/3</div>
          <img style={{position: "relative", left:'-253px',top:'-280px', zIndex:'0'}} src={Icon2} alt="" />
        </div>
        <div className="post-bottom-Nd7">
          <div className="auto-group-o7cm-hvH">
          <img className="like-NwK" src={SerdseIcon}/>
          <img className="comment-7tu" src={ComentImg}/>
          <img className="messanger-Dh3" src={SamaletImg}/>
            <img className="pagination-BDB" src=""/>
            <img className="save-VuT" src={FavoriteImg}/>
          </div>
          <div className="likes-info-pmw">
            <img className="oval-AL1" src="./assets/oval.png"/>
            <p className="liked-by-craiglove-Wuf">
              <span className="liked-by-craiglove-Wuf-sub-0">Liked by </span>
              <span className="liked-by-craiglove-Wuf-sub-1">craig_love</span>
              <span className="liked-by-craiglove-Wuf-sub-2"> and </span>
              <span className="liked-by-craiglove-Wuf-sub-3">44,686 others</span>
            </p>
          </div>
          <p className="joshual-the-game-in-UtR">
            <span className="joshual-the-game-in-UtR-sub-0">Foodieland.</span>
            <span className="joshual-the-game-in-UtR-sub-1"> Sweet food can bring someon into happiness as long as they don’t eat to much</span>
          </p>
          <p className="september-19-Jky">September 19</p>
        </div>
      </div>
      <div className="post-MUM">
        <div className="post-top-VKf">
        <img className="oval-sA1" src={AvatarImg}/>
          <div className="auto-group-joe1-hwX">
            <p className="joshual-r3j">Foodieland.</p>
            <p className="tokyo-japan-AKK">Tokyo, Japan</p>
          </div>
          <img className="official-icon-VsP" src="./assets/official-icon.png"/>
          <img className="more-icon-S1w" src="./assets/more-icon-9C5.png"/>
        </div>
        <div className="auto-group-rj2m-L7K">
          <div className="photo-number-sN9" style={{zIndex:'9999'}}>1/3</div>
          <img style={{position: "relative", left:'-253px',top:'-280px', zIndex:'0'}} src={Icon1} alt="" />

        </div>
        <div className="post-bottom-hry">
          <div className="auto-group-ecmw-S3s">
          <img className="like-NwK" src={SerdseIcon}/>
          <img className="comment-7tu" src={ComentImg}/>
          <img className="messanger-Dh3" src={SamaletImg}/>
            <img className="pagination-vNM" src="./assets/pagination-3TF.png"/>
            <img className="save-VuT" src={FavoriteImg}/>
          </div>
          <div className="likes-info-bDb">
            <img className="oval-vmf" src="./assets/oval-DiZ.png"/>
            <p className="liked-by-craiglove-TWh">
              <span className="liked-by-craiglove-TWh-sub-0">Liked by </span>
              <span className="liked-by-craiglove-TWh-sub-1">craig_love</span>
              <span className="liked-by-craiglove-TWh-sub-2"> and </span>
              <span className="liked-by-craiglove-TWh-sub-3">44,686 others</span>
            </p>
          </div>
          <p className="joshual-the-game-in-37X">
            <span className="joshual-the-game-in-37X-sub-0">Foodieland.</span>
            <span className="joshual-the-game-in-37X-sub-1"> What are you doing before start cooking? prepare the  tools or ingredients?</span>
          </p>
          <p className="september-19-Xwo">September 19</p>
        </div>
      </div>
      <div className="post-RGV">
        <div className="post-top-9TP">
        <img className="oval-sA1" src={AvatarImg}/>
          <div className="auto-group-ihwo-B9B">
            <p className="joshual-w8M">Foodieland.</p>
            <p className="tokyo-japan-GRX">Tokyo, Japan</p>
          </div>
          <img className="official-icon-QXj" src="./assets/official-icon-NSD.png"/>
          <img className="more-icon-LRP" src="./assets/more-icon-1Sy.png"/>
        </div>
        <div className="auto-group-7zxh-CCh">
          <div className="photo-number-vuP" style={{zIndex:'9999'}}>1/3</div>
          <img style={{position: "relative", left:'-253px',top:'-280px', zIndex:'0'}} src={Icon1} alt="" />
        </div>
        <div className="post-bottom-ME1">
          <div className="auto-group-awjm-G65">
          <img className="like-NwK" src={SerdseIcon}/>
          <img className="comment-7tu" src={ComentImg}/>
          <img className="messanger-Dh3" src={SamaletImg}/>
            <img className="pagination-BcM" src="./assets/pagination-VBX.png"/>
            <img className="save-VuT" src={FavoriteImg}/>
          </div>
          <div className="likes-info-TZs">
            <img className="oval-CGZ" src="./assets/oval-VBP.png"/>
            <p className="liked-by-craiglove-wzq">
              <span className="liked-by-craiglove-wzq-sub-0">Liked by </span>
              <span className="liked-by-craiglove-wzq-sub-1">craig_love</span>
              <span className="liked-by-craiglove-wzq-sub-2"> and </span>
              <span className="liked-by-craiglove-wzq-sub-3">44,686 others</span>
            </p>
          </div>
          <p className="joshual-the-game-in-xS5">
            <span className="joshual-the-game-in-xS5-sub-0">Foodieland.</span>
            <span className="joshual-the-game-in-xS5-sub-1"> Steak never be wrong, it’s suitable for you who want romantic dinner</span>
          </p>
          <p className="september-19-b7f">September 19</p>
        </div>
      </div>
    </div>
    <div className="group-826-4mw">
      <p className="visit-our-instagram-XvR">Visit Our Instagram</p>
      <img className="instagram-5Kf" src="./assets/instagram-2uo.png"/>
    </div>
  </div>
  <div className="auto-group-2q3j-hrq">
    <div className="more-recipes-2PK">
      <div className="auto-group-7n4h-ZPF">
        <p className="try-this-delicious-recipe-to-make-your-day-twK">
        Try this delicious recipe
        <br/>
        to make your day
        </p>
        <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-yhs">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="auto-group-qjhx-eJD">
        <div className="group-866-mtd">
          <div className="auto-group-mzdt-8UH">
            <img className="group-852-rfB" src="./assets/group-852-35j.png"/>
          </div>
          <p className="mixed-tropical-fruit-salad-with-superfood-boosts-N7j">Mixed Tropical Fruit Salad with Superfood Boosts </p>
          <div className="auto-group-nic9-ytD">
            <div className="group-829-8FK">
              <img className="timer-4uf" src="./assets/timer.png"/>
              <p className="minutes-Cky">30 Minutes</p>
            </div>
            <div className="group-830-izD">
              <img className="forkknife-fuT" src="./assets/forkknife-673.png"/>
              <p className="healthy-bo7">Healthy</p>
            </div>
          </div>
        </div>
        <div className="group-867-isj">
          <div className="auto-group-vgsv-HA9">
            <img className="group-852-NhP" src="./assets/group-852.png"/>
          </div>
          <p className="big-and-juicy-wagyu-beef-cheeseburger-fAh">Big and Juicy Wagyu Beef Cheeseburger</p>
          <div className="auto-group-5eyo-YkH">
            <div className="group-829-VQd">
              <img className="timer-eoK" src="./assets/timer-X4V.png"/>
              <p className="minutes-1Ny">30 Minutes</p>
            </div>
            <div className="group-830-tSm">
              <img className="forkknife-DE9" src="./assets/forkknife.png"/>
              <p className="western-AQH">Western</p>
            </div>
          </div>
        </div>
        <div className="group-868-t5P">
          <div className="auto-group-qpvk-Euw">
            <img className="group-852-9n1" src="./assets/group-852-gPb.png"/>
          </div>
          <p className="healthy-japanese-fried-rice-with-asparagus-U3b">Healthy Japanese Fried Rice with Asparagus</p>
          <div className="auto-group-ryt1-yW9">
            <div className="group-829-vAV">
              <img className="timer-t7K" src="./assets/timer-oqK.png"/>
              <p className="minutes-dah">30 Minutes</p>
            </div>
            <div className="group-830-is3">
              <img className="forkknife-sE9" src="./assets/forkknife-AhP.png"/>
              <p className="healthy-Doo">Healthy</p>
            </div>
          </div>
        </div>
        <div className="group-869-7uB">
          <div className="auto-group-uufb-GGH">
            <img className="group-852-oGD" src="./assets/group-852-sHT.png"/>
          </div>
          <p className="cauliflower-walnut-vegetarian-taco-meat-7Gu">Cauliflower Walnut Vegetarian Taco Meat</p>
          <div className="auto-group-ve3s-ph7">
            <div className="group-829-yK7">
              <img className="timer-jZB" src="./assets/timer-Vyj.png"/>
              <p className="minutes-VHT">30 Minutes</p>
            </div>
            <div className="group-830-WCZ">
              <img className="forkknife-eZf" src="./assets/forkknife-nR7.png"/>
              <p className="eastern-oSZ">Eastern</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-group-s2ad-tyo">
        <div className="group-870-2KK">
          <div className="auto-group-qjnd-nJV">
            <img className="group-852-Vih" src="./assets/group-852-Peh.png"/>
          </div>
          <p className="rainbow-chicken-salad-with-almond-honey-mustard-dressing-R6Z">Rainbow Chicken Salad with Almond Honey Mustard Dressing</p>
          <div className="auto-group-s52h-8Fs">
            <div className="group-829-Gss">
              <img className="timer-qg5" src="./assets/timer-Nfs.png"/>
              <p className="minutes-kY9">30 Minutes</p>
            </div>
            <div className="group-830-4Yq">
              <img className="forkknife-2kZ" src="./assets/forkknife-NPb.png"/>
              <p className="healthy-an5">Healthy</p>
            </div>
          </div>
        </div>
        <div className="group-871-V8M">
          <div className="auto-group-gqah-2PB">
            <img className="group-852-79j" src="./assets/group-852-qEy.png"/>
          </div>
          <p className="barbeque-spicy-sandwiches-with-chips-F13">Barbeque Spicy Sandwiches with Chips </p>
          <div className="auto-group-2o77-ZXX">
            <div className="group-829-Jk1">
              <img className="timer-fqT" src="./assets/timer-isB.png"/>
              <p className="minutes-AnD">30 Minutes</p>
            </div>
            <div className="group-830-ty7">
              <img className="forkknife-pbs" src="./assets/forkknife-gtR.png"/>
              <p className="snack-yUm">Snack</p>
            </div>
          </div>
        </div>
        <div className="group-872-JG9">
          <div className="auto-group-rzeh-qms">
            <img className="group-852-B53" src="./assets/group-852-HfP.png"/>
          </div>
          <p className="firecracker-vegan-lettuce-wraps-spicy-Wd7">Firecracker Vegan Lettuce Wraps - Spicy! </p>
          <div className="auto-group-sidp-dSq">
            <div className="group-829-wyK">
              <img className="timer-tNm" src="./assets/timer-1Kf.png"/>
              <p className="minutes-bHB">30 Minutes</p>
            </div>
            <div className="group-830-iMo">
              <img className="forkknife-4gZ" src="./assets/forkknife-s5K.png"/>
              <p className="seafood-CGy">Seafood</p>
            </div>
          </div>
        </div>
        <div className="group-873-KMb">
          <div className="auto-group-2hk7-rsK">
            <img className="group-852-P6Z" src="./assets/group-852-iAM.png"/>
          </div>
          <p className="chicken-ramen-soup-with-mushroom-72Z">Chicken Ramen Soup with Mushroom </p>
          <div className="auto-group-h3p5-pxZ">
            <div className="group-829-AWd">
              <img className="timer-hmT" src="./assets/timer-EGq.png"/>
              <p className="minutes-46D">30 Minutes</p>
            </div>
            <div className="group-830-nH7">
              <img className="forkknife-kUq" src="./assets/forkknife-LEu.png"/>
              <p className="japanese-Gxy">Japanese</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="subscribe-card-91B" style={{position:'relative', top:'-70px'}}>
          <div className="group-874-GrV">
            <img
              src={kcd}
              style={{
                zIndex: 0,
                width: "1280px",
                height: "442px",
                flexShrink: 0,
              }}
            />
            <div style={{ position: "relative", top: "-340px" }}>
              <p className="deliciousness-to-your-inbox-oLd">
                Deliciousness to your inbox
              </p>
              <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-KZs">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </p>
              <div className="auto-group-g4kb-B6H">
                <input 
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  className="your-email-address-gHw"
                  style={{border:'none'}}
                />
                <div
                  className="group-826-au7"
                  style={{ cursor: "pointer" }}
                  onClick={handleSubmit}
                >
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</div>
    </div>
    </>
  );
};

export default Home;
