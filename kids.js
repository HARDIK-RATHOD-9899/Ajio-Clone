async function getData() {
  const res = await fetch("https://mock-server-app-ss14.onrender.com/child");
  data = await res.json();
  renderProducts(data);
}

let nav_container = document.getElementById("naz-nav-container");
console.log(navbar);
nav_container.innerHTML = navbar();

let sidebar_container = document.getElementById("naz-sidebar");
sidebar_container.innerHTML = sidebar();

let data;
getData();

document
  .getElementById("naz-sort-products")
  .addEventListener("change", sortingProducts);

function sortingProducts() {
  sortFunctionality(data);
}
let button = document
  .getElementById("filterButton")
  .addEventListener("click", filterProducts);



function renderProducts(data) {
  let parent = document.getElementById("naz-product-container");
  parent.innerHTML = "";
  data.map((elem) => {

    let product = document.createElement("div");
    product.setAttribute("class", "naz-product");
    let poster = document.createElement("img");
    poster.setAttribute("class", "naz-product-img");
    poster.setAttribute("src", elem.imageURL);
    
    let brand = document.createElement("p");
    brand.setAttribute("class", "naz-product-brand");
    brand.innerHTML = elem.brand;
    
    let title = document.createElement("p");
    title.setAttribute("class", "naz-product-title");
    title.innerHTML = elem.product;
    title.innerHTML=`<a href="clickedproduct.html?id=${elem.id}">${elem.product}</a>`;
    
    let price_container = document.createElement("div");
    price_container.setAttribute("class", "naz-price-container");

    let price = document.createElement("p");
    price.setAttribute("class", "naz-price");
    price.innerHTML = `₹${elem.price}`;

    let strikedPrice = document.createElement("p");
    strikedPrice.setAttribute("class", "naz-striked-price");
    strikedPrice.innerHTML = `₹${elem.strikedOffPrice}`;

    let offer = document.createElement("p");
    offer.setAttribute("class", "naz-offer");
    let offerValue = Math.floor(
      ((elem.strikedOffPrice - elem.price) / elem.strikedOffPrice) * 100
    );
    offer.innerHTML = `(${offerValue}% off)`;

    price_container.append(price, strikedPrice, offer);
    product.append(poster, brand, title, price_container);

    parent.append(product);

    poster.addEventListener("click", function () {
      addToCart(elem);
    });
  });
}


function navbar() {
  return `   <div class="header-container">
        <header>
            <div class="signin-customer-care">
              
                <ul>
                    <li>
                        <a href="#" id="username"></a>
                     </li>
                    <li onclick="showBox()">
                       <a href="sign.html"><p id="signin" >Sign In / Join AJIO</p></a> 
                     </li>
                    
                    <li>
                        <a href="#">Customer Care</a>
                     </li>
                  <li>
                      <div class="black-square-box">
                          <a href="#">Visit AJIOLUXE</a>
                      </div>
                    </li>
                    
               </ul>
            </div>
            <div class="logo-box">
                <a href="index.html">
                    <img class="logo-img" src="images/Ajio-Logo.svg" alt="">
                </a>
            </div>

            <div class="nav">
                <div class="left-nav">
                    <ul>

                        <li onmouseover="showMenu('menItems')" onmouseout="hideMenu('menItems')">
                            <a href="menStyles.html">MEN</a>
                            <div class="hover-menu-container" id="menItems">
                              <div>
                              <div>
                                <span>Shop By:</span>
                              </div>
                              <div class="cat-dropdown">
                                <a href="#">CATEGORIES</a>
                                <div class="content-box" id="catContent">
                                  <div>
                                    <ul><a href="index.html" >CLOTHING</a></ul>
                                    <ul><a href="#" >FOOTWEAR</a></ul>
                                    <ul><a href="#" >ACCESSORIES</a></ul>
                                    <ul><a href="#" >ALL THAT'S NEW</a>
                                      <li><a href="index.html" >New Clothing</a></li>
                                      <li><a href="#" >New Footwear</a></li>
                                      <li><a href="#" >New Accessories</a></li>
                                    </ul>
                                    <ul><a href="#" >AJIO GLOBAL</a></ul>
                                    <ul><a href="#" >PLUS SIZE</a></ul>
                                    <ul><a href="#" >NIGHT AND LOUNGEWEAR</a></ul>
                                    <ul><a href="#" >GROOMING</a></ul>
                                    <ul><a href="#" >ETHNIC AND FESTIVAL</a>
                                     <li><a href="#">Kurtas and Shirts</a></li>

                                     <li><a href="#" >Nehru Jackets</a></li>
                                 </div>
                                           <div>
                                                <ul><a href="#" > Western Wear
                                                    <li> <a href="index.html" >Jackets & Coats </a></li>
                                                    <li> <a href="#"  href="#" >Jeans </a></li>
                                                    <li> <a href="#" href="#" >Shirts </a></li>
                                                    <li> <a href="#" >Shorts & 3/4ths </a></li>
                                                    <li> <a href="#" href="#" >Sweatshirts & Hoodies </a></li>
                                                    <li> <a href="#" href="#" >Track Pants </a></li>
                                                    <li> <a href="#" href="#" >Trousers & Pants </a></li>
                                                    <li> <a href="#" href="#" >T-Shirts </a></li>
                                            </a></ul>
                                            
                                                <ul><a href="#"> Footwear
                                                    <li> <a href="index.html" >Casual Shoes </a></li>
                                                    <li> <a href="#" >Flip-Flops & Slippers </a></li>
                                                    <li> <a href="#" >Formal Shoes </a></li>
                                                    <li> <a href="#" >Sandals </a></li>
                                                    <li> <a href="#" >Sneakers </a></li>
                                                    <li> <a href="#" >Sports Shoes </a></li>
                                               </a></ul> 
                                            </div>
                                            <div>
                                                <ul><a href="#"> Accessories
                                                    <li> <a href="#">Backpacks </a></li>
                                                    <li> <a href="#">Bag & Wallets </a></li>
                                                    <li> <a href="#">Belts </a></li>
                                                    <li> <a href="#">Caps & Hats </a></li>
                                                    <li> <a href="#">Fashion Accessories </a></li>
                                                    <li> <a href="#">Socks </a></li>
                                                    <li> <a href="#">Sunglasses & Frames </a></li>
                                                    <li> <a href="#">Wallets </a></li>
                                                    <li> <a href="#">Watches </a></li>
                                                 </a></ul>
                                              <ul><a href="#"> Precious Jewellery 
                                                 <li> <a href="#">Gold And Silver Coins </a></li>
                                                 <li> <a href="#"> Gold And Diamond Jewellery</a></li>
                                                 <li> <a href="#">Silver Jewellery </a></li>
                                              </a></ul>
                                                
                                               
                                                  <ul><a href="#"> Innerwear
                                                    <li> <a href="#">Briefs </a></li>
                                                    <li> <a href="#">Trunks & Boxers </a></li>
                                                    <li> <a href="#">Vests </a></li>
                                                 </a></ul>
                                            </div>
                                    
                                              <div>
                                                <ul><a href="#"> Featured
                                                    <li> <a href="#">Bags Under 1499 </a></li>
                                                    <li> <a href="#">Footwear Under 1499 </a></li>
                                                    <li> <a href="#">Jeans Under 1199 </a></li>
                                                    <li> <a href="#">Shorts & 3/4ths Under 699 </a></li>
                                                 </a></ul>
                                           
                                            
                                                <ul><a href="#"> #Ajiorecommends
                                                    <li> <a href="#">Denimology </a></li>
                                                    <li> <a href="#">Graphic Archive </a></li>
                                                    <li> <a href="#">Play Time </a></li>
                                                 </a></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="brands-dropdown" onmouseover="showMenu('manBrandContent')" onmouseout="hideMenu('manBrandContent')">
                                        <a href="#">BRANDS</a>
                                        <div class="content-box brand-content" id="manBrandContent">
                                            <div>
                                                
                                                <ul><a href="#">Ajio Gold Brands</a>
                                                        <li> <a href="#">Superdry </a></li>
                                                        <li> <a href="#">Scotch & Soda </a></li>
                                                        <li> <a href="#">GAP </a></li>
                                                        <li> <a href="#">GAS</a></li>
                                                        <li> <a href="#">GANT</a></li>
                                                        <li> <a href="#">G Star Raw </a></li>
                                                        <li> <a href="#">CLARKS</a></li>
                                                        <li> <a href="#">EMPORIO ARMANI </a></li>
                                                    </ul>
                                                <ul><a href="#"> Exclusive Brands</a>
                                                        <li> <a href="#">BUDA JEANS AND CO </a></li>
                                                        <li> <a href="#">Netplay</a></li>
                                                        <li> <a href="#">DNMX </a></li>
                                                        <li> <a href="#">John Players </a></li>
                                                        <li> <a href="#">Lee Cooper</a></li>
                                                        <li> <a href="#">Teamspirit</a></li>
                                                        <li> <a href="#">Performax</a></li>
                                                        <li> <a href="#">Altheory</a></li>
                                                        
                                                    </ul>
                                            </div>
                                            <div>
                                                <ul><a href="#"> International brands</a>
                                                        <li> <a href="#">French Connection</a></li>
                                                        <li> <a href="#">TOM TAILOR </a></li>
                                                        <li> <a href="#">New Balance </a></li>
                                                        <li> <a href="#">DIESEL </a></li>
                                                        <li> <a href="#">LACOSTE </a></li>
                                                        
                                                    </ul>
                                                <ul><a href="#" onclick="setProducts('shoes','Shoes for Men')">Footwear</a>
                                                        <li> <a href="#">ADIDAS</a></li>
                                                        <li> <a href="#">Campus</a></li>
                                                        <li> <a href="#">Crocs</a></li>
                                                        <li> <a href="#">Nike</a></li>
                                                        <li> <a href="#">Puma</a></li>
                                                        <li> <a href="#">Red Tape</a></li>
                                                        <li> <a href="#">Reebok</a></li>
                                                        <li> <a href="#">Sketchers</a></li>
                                                        <li> <a href="#">UCB</a></li>
                                                        <li> <a href="#">Woodland</a></li>
                                                        <li> <a href="#">New Balance</a></li>
                                                    </ul>
                                            </div>
                                            <div>
                                                <ul><a href="#">Western Wear</a>
                                                        <li> <a href="#">THE INDIAN GARAGE CO</a></li>
                                                        <li> <a href="#">US Polo Assn</a></li>
                                                        <li> <a href="#">LEVIS</a></li>
                                                        <li> <a href="#">Louis Philippe</a></li>
                                                        <li> <a href="#">THE BEAR HOUSE</a></li>
                                                        <li> <a href="#">KETCH</a></li>
                                                        <li> <a href="#">DENNISLINGO PREMIMUM ATTIRE</a></li>
                                                        <li> <a href="#">Jack & Jones</a></li>
                                                        <li> <a href="#">Allen Solly</a></li>
                                                        <li> <a href="#">Fort Collins</a></li>
                                                        <li> <a href="#">SPIKAR</a></li>
                                                       
                                                    </ul>
                                                 <ul><a href="#">Innerwear</a>
                                                        <li> <a href="#">Calvin Klein Underwear</a></li>
                                                        <li> <a href="#">Jockey</a></li>
                                                        
                                              </ul>
                                            </div>
                                            <div>
                                               
                                                <ul><a href="#">Accessories</a>
                                                        <li> <a href="#">ADIDAS</a></li>
                                                        <li> <a href="#">Allen Solly</a></li>
                                                       
                                                        <li> <a href="#">F Gear</a></li>
                                                        <li> <a href="#">LEVIS</a></li>
                                                        
                                                        <li> <a href="#">Puma</a></li>
                                                        <li> <a href="#">Rayban</a></li>
                                                        <li> <a href="#">United Colors Of Benetton</a></li>
                                                        
                                                        <li> <a href="#">Woodland</a></li>
                                                 
                                                </ul>
                                               <ul><a href="#">A-Z Brands</a></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li onmouseover="showMenu('womenItems') " onmouseout="hideMenu('womenItems')">
                            <a href="#">WOMEN</a>
                            <div class="hover-menu-container" id="womenItems">
                                <div>
                                    <div>
                                        <span>Shop By:</span>
                                    </div>
                                    <div class="cat-dropdown">
                                        <a href="#">CATEGORIES</a>
                                        <div class="content-box" id="catContent">
                                            <div>
                                                
                                                <ul><a href="index.html" > CLOTHING </a></ul>
                                                <ul><a href="#"> FOOTWEAR </a></ul>
                                                <ul><a href="#"> ACCESSORIES </a></ul>
                                                <ul><a href="#" >ALL THATS NEW</a></ul>
                                                <ul><a href="#"> CURVE SIZE </a></ul>
                                                <ul><a href="#"> AJIO GLOBAL </a></ul>
                                                <ul><a href="#"> NIGHT AND LOUNGEWEAR </a></ul>
                                                <ul><a href="#"> BEAUTY </a></ul>
                                                <ul><a href="#"> ATHLEISURE </a></ul>
                                                 <ul><a href="#">FUSION WEAR</a>
                                                    <li> <a href="#">Dresses & Gowns</a></li>
                                                    <li> <a href="#">Kurtas</a></li>
                                                    <li> <a href="#">Kurtis & Tunics</a></li>
                                                   <li> <a href="#">Pants & Shorts</a></li>
                                                   <li> <a href="#">Jackets & Shrugs</a></li>
                                                   <li> <a href="#">Shirts,Tops & Tunics</a></li>
                                                </ul>
                                          </div>
                                          <div>
                                             <ul><a href="#" >Ethnic Wear</a>
                                                        <li> <a href="index.html" >Kurtas </a></li>
                                                        <li> <a href="#" >Dress Material</a></li>
                                                        <li> <a href="#">Salwars & Churidars</a></li>
                                                        <li> <a href="#" >Kurtis & Tunics</a></li>
                                                        <li> <a href="#" >Sarees</a></li>
                                                        <li> <a href="#">Dupattas</a></li>
                                                        <li> <a href="#" >Kurta Suit Sets</a></li>
                                                        <li> <a href="#">Blouses</a></li>
                                                        <li> <a href="#">Leggings</a></li>
                                                        
                                                        <li> <a href="#">Skirt & Ghagras</a></li>
                                                        <li> <a href="#">Shawls & Wraps</a></li>
                                                        <li> <a href="#">Palazzos & Culottes</a></li>
                                                    </ul>
                                                 <ul><a href="#">JEWELLERY</a>
                                                        <li> <a href="#">Gold And Silver Coins</a></li>
                                                        <li> <a href="#">Gold And Diamond Jewellery</a></li>
                                                        <li> <a href="#">Silver Jewellery</a></li>
                                                        <li> <a href="#">Fashion Jewellery</a></li>
                                                </ul>
                                         </div>
                                          <div>
                                                <ul><a href="#">Lingerie Innerwear</a>
                                                        <li> <a href="#">Bras</a></li>
                                                        <li> <a href="#">Panties</a></li>
                                                        <li> <a href="#">Camisoles & Slips</a></li>
                                                        <li> <a href="#">Maternity Wear</a></li>
                                                        <li> <a href="#">Thermal Wear</a></li>
                                                </ul>
                                            </d>
                                               <ul><a href="#">ACCESSORIES</a>
                                                        <li> <a href="#">Sunglasses & Fraames</a></li>
                                                        <li> <a href="#">Watches</a></li>
                                                        <li> <a href="#">Bag, Belts And Wallets</a></li>
                                                        <li> <a href="#">Stoles And Scarves</a></li>
                                                        <li> <a href="#">Socks And Stockings</a></li>
                                                        <li> <a href="#">Caps</a></li>
                                                        <li> <a href="#">Luggage & Trolleys</a></li>
                                                    </ul>
                                              <ul><a href="#">Featured</a>
                                                    <li><a href="#" >Dresses Under 999</a></li>
                                                    <li><a href="#">Footwear Under 799</a></li>
                                                   
                                                </ul>
                                      </div>
                                            <div>
                                                <ul><a href="#">Footwear</a>
                                                        <li> <a href="#">Casual Shoes</a></li>
                                                        <li> <a href="#">Flat Sandals</a></li>
                                                        <li> <a href="#">Sports Shoes</a></li>
                                                        <li> <a href="#">Flip Flop & Slippers</a></li>
                                                        <li> <a href="#">Heeled Sandals</a></li>
                                                        <li> <a href="#">Heeled Shoes</a></li>
                                                        <li> <a href="#">Boots</a></li>
                                                    </ul>
                                                 <ul><a href="#" >Western Wear</a>
                                                        <li> <a href="#">Tops</a></li>
                                                        <li> <a href="#">T-Shirts</a></li>
                                                        <li> <a href="#">Jeans & Jeggings</a></li>
                                                        <li> <a href="#">Dresses</a></li>
                                                        <li> <a href="#">Trousers & Pants</a></li>
                                                        <li> <a href="#">Shirts</a></li>
                                                        <li> <a href="#">Track Pants</a></li>
                                                        <li> <a href="#">Skirts & Shorts</a></li>
                                                        <li> <a href="#">Jackets & Coats</a></li>
                                                        <li> <a href="#" >Jumpsuits & Playsuits</a></li>
                                                        <li> <a href="#" >Shrugs & Boleros</a></li>
                                                        <li> <a href="#">Sweatshirts & Hoodies</a></li>
                                                        <li> <a href="#">Sweaters & Cardigans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="brands-dropdown" onmouseover="showMenu('womenBrandContent')" onmouseout="hideMenu('womenBrandContent')">
                                        <a href="#">BRANDS</a>
                                        <div class="content-box brand-content" id="womenBrandContent">
                                            <div>
                                                <ul><a href="#">Ajio Gold Brands</a>
                                                    <li> <a href="#">MARKS & SPENCER </a></li>
                                                    <li> <a href="#">Superdry</a></li>
                                                    <li> <a href="#">Armani Exchange</a></li>
                                                    <li> <a href="#">GAP</a></li>
                                                    <li> <a href="#">ALDO</a></li>
                                                    <li> <a href="#">CLARKS</a></li>
                                                    <li> <a href="#">AARKE RITU KUMAR</a></li>
                                                </ul>
                                                <ul><a href="#">Inernational Brands</a>
                                                    <li> <a href="#">TRENDYOL</a></li>
                                                    <li> <a href="#">NA-KD</a></li>
                                                    <li> <a href="#">KOTON</a></li>
                                                    <li> <a href="#">WKND</a></li>
                                                    <li> <a href="#">FRENCH CONNECTION</a></li>
                                                    <li> <a href="#">HAILYS</a></li>
                                                    <li> <a href="#">LC WAIKIKI</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                              <ul><a href="#">EXCLUSIVE BRANDS</a>
                                                    <li> <a href="#">AVAASA</a></li>
                                                    <li> <a href="#">Fig</a></li>
                                                    <li> <a href="#">Fyre Rose</a></li>
                                                    <li> <a href="#">Buda Jeans</a></li>
                                                    <li> <a href="#">Acai</a></li>
                                                    <li> <a href="#">Outryt</a></li>
                                                    <li> <a href="#">DNMX</a></li>
                                                    <li> <a href="#">Fusion</a></li>
                                                    <li> <a href="#">Teamspirit</a></li>
                                                    <li> <a href="#">Rio</a></li>
                                                    <li> <a href="#">Svrnaa</a></li>
                                                </ul>
                                          </div>
                                          <div>
                                                <ul><a href="#" onclick="setProducts('women','Clothes for women')">Western Wear</a>
                                                    <li> <a href="#">Levis</a></li>
                                                    <li> <a href="#">VERO MODA</a></li>
                                                    <li> <a href="#">ONLY</a></li>
                                                    <li> <a href="#">AND</a></li>
                                                    <li> <a href="#">Tommy Hilfiger</a></li>
                                                    <li> <a href="#">LEE COOPER</a></li>
                                                    
                                                </ul>
                                             <ul><a href="#">Project Eve</a></ul>
                                                <ul><a href="#" onclick="setProducts('saree','Sarees')">Ethnic Wear</a>
                                                    <li> <a href="#">Alena</a></li>
                                                    <li> <a href="#">Ishin</a></li>
                                                    <li> <a href="#">Jaipur Kurti</a></li>
                                                    
                                                    <li> <a href="#">Biba</a></li>
                                                    
                                                    <li> <a href="#">W</a></li>
                                                  <li> <a href="#">Ask</a></li>
                                                </ul>
                                                
                                               

                                            </div>
                                            <div>
                                               
                                                <ul><a href="#">Footwear</a>
                                                    <li> <a href="#">Carlton London</a></li>
                                                    
                                                    <li> <a href="#">Crocs</a></li>
                                                    <li> <a href="#">Hi Attitude</a></li>
                                                    
                                                    <li> <a href="#">Nike</a></li>
                                                    <li> <a href="#">Puma</a></li>
                                                    <li> <a href="#">Sketchers</a></li>
                                                </ul>
                                            
                                            
                                                <ul><a href="#">Accessories</a>
                                                    <li> <a href="#">Baggit</a></li>
                                                    <li> <a href="#">Carprese</a></li>
                                                    <li> <a href="#">Hidesign</a></li>
                                                    <li> <a href="#">Lavie</a></li>
                                                    <li> <a href="#">Mark & Keith</a></li>
                                                    <li> <a href="#">Zaveri Pearls</a></li>
                                                    
                                                </ul>
                                                <ul><a href="#">Lingerie Innerwear</a>
                                                    <li> <a href="#">Enamor</a></li>
                                                    <li> <a href="#">Jockey</a></li>
                                                    <li> <a href="#">Marks & Spencer</a></li>
                                                    <li> <a href="#">Triumph</a></li>
                                                    <li> <a href="#">Zivame</a></li>
                                                </ul>
                                                <ul><a href="#">A-Z Brands</a></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!--  Kids Category -->
                        <li onmouseover="showMenu('kidsItems') " onmouseout="hideMenu('kidsItems')">
                            <a href="#">KIDS</a>
                            <div class="hover-menu-container" id="kidsItems">
                                <div>
                                    <div>
                                        <span>Shop By:</span>
                                    </div>
                                    <div class="cat-dropdown">
                                        <a href="#">CATEGORIES</a>
                                        <div class="content-box" id="catContent">
                                            <div>
                                                <ul><a href="index.html">NEW In: Collections</a></ul>
                                                <ul><a href="#">New In: Footwear & Accs </a></ul>
                                                <ul><a href="#">Innerwear & Sleepwear </a></ul>
                                                <ul><a href="#">Boys</a>
                                                    <li> <a href="#">Denims & Trousers</a></li>
                                                    <li> <a href="#">Joggers & Track Pants</a></li>
                                                    <li> <a href="#">Outerwear</a></li>
                                                    <li> <a href="#">Shirts</a></li>
                                                    <li> <a href="#">Shorts & 3/4ths</a></li>
                                                    <li> <a href="#">T-Shirts</a></li>
                                                </ul>
                                                <ul><a href="#">Shop By Age </a>
                                                    <li> <a href="#">0 To 2 Years</a></li>
                                                    <li> <a href="#">2 To 5 Years</a></li>
                                                    <li> <a href="#">5 To 8 Years</a></li>
                                                    <li> <a href="#">8 To 12 Years</a></li>
                                                  <li> <a href="#">12 Years And Above</a></li>
                                                </ul>
                                          </div>
                                            <div>
                                                <ul><a href="#">Featured</a>
                                                    <li> <a href="#">Denims Under 799</a></li>
                                                    <li> <a href="#">Shirts Under 599</a></li>
                                                    <li> <a href="#">Tshirts Under 399</a></li>
                                                </ul>
                                                <ul><a href="#">Girls</a>
                                                    <li> <a href="#">Dresses & Frocks</a></li>
                                                    <li> <a href="#">Jeans & Jeggings</a></li>
                                                    <li> <a href="#">Leggings</a></li>
                                                    <li> <a href="#">Outerwear</a></li>
                                                    <li> <a href="#">Skirts & Shorts</a></li>
                                                    <li> <a href="#">Tops & T-Shirts</a></li>
                                                </ul>
                                                <ul><a href="#">Shop By Age</a>
                                                    <li> <a href="#">0 To 2 Years</a></li>
                                                    <li> <a href="#">2 To 5 Years</a></li>
                                                    <li> <a href="#">5 To 8 Years</a></li>
                                                    <li> <a href="#">8 To 12 Years</a></li>
                                                    <li> <a href="#">12 Years And Above</a></li>
                                                </ul>
                                          </div>
                                          <div>
                                                <ul><a href="#">Featured</a>
                                                    <li> <a href="#">Dresses Under 499</a></li>
                                                    <li> <a href="#">Tops Under 300</a></li>
                                                </ul>
                                            
                                                <ul><a href="#">Baby</a>
                                                    <li><a href="#">Sets</a></li>
                                                </ul>
                                                <ul><a href="#">Toys And Babycare</a>
                                                    <li> <a href="#">Action-Figurine & Collectibles</a></li>
                                                    <li> <a href="#">Creative & Education Toys</a></li>
                                                    <li> <a href="#">Gaming, Robots & Vehicles</a></li>
                                                    <li> <a href="#">Infants Toys</a></li>
                                                    <li> <a href="#">Role & Pretend Play</a></li>
                                                    <li> <a href="#">School, Party Supplies & Books</a></li>
                                                    <li> <a href="#">Soft Toys</a></li>
                                                    <li> <a href="#">Toy-Guns & Accessories</a></li>
                                                </ul>
                                              <ul><a href="#">Collections</a></ul>
                                                    
                                                <ul><a href="#">AJIO EXCLUSIVES</a></ul>
                                                <ul><a href="#">FOOTWEAR & ACCESSORIES</a></ul>
                        
                                          </div>
                                            <div>
                                                <ul><a href="#">Featured BRANDS</a>
                                                   
                                                    <li> <a href="#">Crocs</a></li>
                                                    
                                                    <li> <a href="#">MINI KLUB</a></li>
                                                    <li> <a href="#">Gini & Jony</a></li>
                                                    <li> <a href="#">Hamleys</a></li>
                                                    <li> <a href="#">Mothercare</a></li>
                                                    <li> <a href="#">Marks & Spencer</a></li>
                                                    <li> <a href="#">Pepe Jeans</a></li>
                                                    <li> <a href="#">Peppermint</a></li>
                                                    <li> <a href="#">UCB Kids</a></li>
                                                    <li> <a href="#">U.S.P.A Kids</a></li>
                                                    <li> <a href="#">MILA BABY</a></li>
                                                  <li> <a href="#">MUJI</a></li>
                                                  <li> <a href="#">Lee Cooper</a></li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                         
                        <li onmouseover="showMenu('indieItems') " onmouseout="hideMenu('indieItems')">
                            <a href="#">INDIE</a>
                            <div class="hover-menu-container" id="indieItems">
                                <div>
                                    <div>
                                        <span>Shop By:</span>
                                    </div>
                                    <div class="cat-dropdown">
                                        <a href="#">CATEGORIES</a>
                                        <div class="content-box" id="catContent">
                                            <div>
                                                <ul><a href="index.html">NEW In: CLOTHING</a></ul>
                                                <ul><a href="#">New In: SAREES</a></ul>
                                                <ul><a href="#">New In: FOOTWEAR & ACCS</a></ul>
                                                <ul><a href="#">New In: HOME</a></ul>
                                                <ul><a href="#">TOP SELLERS</a></ul>
                                                <ul><a href="#">Clothing</a>
                                                    <li> <a href="#">Sarees</a></li>
                                                    <li> <a href="#">Kurtas</a></li>
                                                    <li> <a href="#">Dresses</a></li>
                                                    <li> <a href="#">Tops & Tunics</a></li>
                                                    <li> <a href="#">Dupattas</a></li>
                                                    <li> <a href="#">Dress Materials</a></li>
                                                    <li> <a href="#">Blouses & Blouses Fabrics</a></li>
                                                    <li> <a href="#">Pants, Skirts & Palazzos</a></li>
                                                </ul>
                                              <ul><a href="#">Accessories</a>
                                                    <li> <a href="#">Bags & Belts</a></li>
                                                    <li> <a href="#">Shawls & Wraps</a></li>
                                                    <li> <a href="#">Stoles & Scarves</a></li>
                                                </ul>
                                          </div>
                                          <div>
                                              <ul><a href="#">HOME</a>
                                                    <li> <a href="#">Bedsheets</a></li>
                                                    <li> <a href="#">Cushions And Covers</a></li>
                                                    <li> <a href="#">Curtains</a></li>
                                                   <li> <a href="#">Table Linen</a></li>
                                                  <li> <a href="#">Rugs, Carpets & Dhurries</a></li>
                                                  
                                                </ul>
                                            <ul><a href="#">WINTER WEAR</a></ul>
                                            <ul><a href="#">MENSWEAR</a>
                                                    <li> <a href="#">Kurtas</a></li>
                                                    <li> <a href="#">Shirts</a></li>
                                                    <li> <a href="#">Ethnic Suits</a></li>
                                                    <li> <a href="#">Jacket</a></li>
                                                    <li> <a href="#">Accessories</a></li>
                                                </ul>
                                        
                                                <ul><a href="#">Footwear</a>
                                                    <li> <a href="#">Chappals</a></li>
                                                    <li> <a href="#">Juttis</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                
                                            
                                                <ul><a href="#">Regional Specialities</a>
                                                    <li><a href="#">Ajrak</a></li>
                                                    <li><a href="#">Bagru</a></li>
                                                    <li><a href="#">Bagh</a></li>
                                                    <li><a href="#">Banaras & Brocades</a></li>
                                                    <li><a href="#">Chanderi & Maheshwari</a></li>
                                                    <li><a href="#">Indigo</a></li>
                                                    <li><a href="#">IKAT</a></li>
                                                    <li><a href="#">Kalamkari</a></li>
                                                    <li><a href="#">Linen</a></li>
                                                    <li><a href="#">Mangalgiri</a></li>
                                                    <li><a href="#">Pipar & Balotra</a></li>
                                                    <li><a href="#">Shibori</a></li>
                                                    <li><a href="#">South Cotton</a></li>
                                                    <li><a href="#">South Silk</a></li>
                                                    
                                                    <li><a href="#">Tant Tangail & Jamdani</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul><a href="#">Featured Brands</a>
                                                    <li> <a href="#">Indie Picks</a></li>
                                                    <li> <a href="#">Swadesh</a></li>
                                                    <li> <a href="#">Fabindia</a></li>
                                                    <li> <a href="#">Qura</a></li>
                                                    <li> <a href="#">Indethnic</a></li>
                                                    <li> <a href="#">Banarasi Silk Works</a></li>
                                                    <li> <a href="#">Awesome</a></li>
                                                    <li> <a href="#">Arteastri</a></li>
                                                    <li> <a href="#">Sajasajo</a></li>
                                                    <li> <a href="#">Angoshobha</a></li>
                                                   <li> <a href="#">Weaversvilla</a></li>
                                                    <li> <a href="#">Anukta</a></li>
                                                    <li> <a href="#">Rangdeep</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                         
                        <li onmouseover="showMenu('homeItems') " onmouseout="hideMenu('homeItems')">
                            <a href="#">HOME AND KITCHEN</a>
                            <div class="hover-menu-container" id="homeItems">
                                <div>
                                    <div>
                                        <span>Shop By:</span>
                                    </div>
                                    <div class="cat-dropdown">
                                        <a href="#">CATEGORIES</a>
                                        <div class="content-box" id="catContent">
                                          <div>
                                            <ul><a href="#">BED LINEN</a>
                                                    <li> <a href="#">Bedsheets</a></li>
                                                    <li> <a href="#">Bedding Sets</a></li>
                                                    <li> <a href="#">Blankets, Dohars & Quilts</a></li>
                                                  <li> <a href="#">Comforters</a></li>
                                                  <li> <a href="#">Bed Covers</a></li>
                                                  <li> <a href="#">Mattress Protectors</a></li>
                                                  <li> <a href="#">Quilt & Duvet Covers</a></li>
                                                  
                                                  
                                                </ul>
                                             <ul><a href="#">CUSHIONS & PILLOWS</a>
                                                    <li> <a href="#">Cushions</a></li>
                                                    <li> <a href="#">Pillows</a></li>
                                                    <li> <a href="#">Bed Wedges & Neck Pillows</a></li>
                                                  <li> <a href="#">Bolsters</a></li>
                                                  <li> <a href="#">Cushion Covers</a></li>
                                                  <li> <a href="#">Pillow Covers</a></li>
                                                 
                                                  
                                                  
                                                </ul>
                                            <ul><a href="#">RUGS, CARPETS & MATS</a></ul>
                                         </div>
                                            <div>
                                                <ul><a href="#">CURTAIN & ACCESSORIES</a>
                                                    <li> <a href="#">Window Curtains</a></li>
                                                    <li> <a href="#">Door Curtains</a></li>
                                              </ul>
                                                <ul><a href="#">KITCHEN</a>
                                                    <li> <a href="#">Cookware & Cutlery</a></li>
                                                    <li> <a href="#">Bakeware</a></li>
                                                    <li> <a href="#">Kitchen Tools</a></li>
                                                  <li> <a href="#">Kitchen Aprons, Gloves & Towel</a></li>
                                                  <li> <a href="#">Kitchen Organisers</a></li>
                                                  
                                                </ul>
                                              <ul><a href="#">DINING</a>
                                                    <li> <a href="#">Serveware & Drinkware</a></li>
                                                    <li> <a href="#">Table Linen Sets</a></li>
                                                    <li> <a href="#">Table Covers & Runners</a></li>
                                                  <li> <a href="#">Table Napkins</a></li>
                                                  <li> <a href="#">Placemats & Coasters</a></li>
                                                  
                                                </ul>
                                                <ul><a href="#">STATIONERY & ORGANISERS</a></ul>
                                          </div>
                                          <div>
                                             <ul><a href="#">HOME DECOR</a>
                                                    <li> <a href="#">Wall Decor</a></li>
                                                    <li> <a href="#">Wall Shelves</a></li>
                                                    <li> <a href="#">Clocks</a></li>
                                                  <li> <a href="#">Photo Frames</a></li>
                                                  <li> <a href="#">Mirrors</a></li>
                                                  <li> <a href="#">Lamp,Diyas & Candle</a></li>
                                                  <li> <a href="#">Home Fragnance</a></li>
                                                  <li> <a href="#">Plants & Flowers</a></li>
                                                  
                                                </ul>
                                            <ul><a href="#">FESTIVE GIFTS</a>
                                                    <li> <a href="#">Bells & Wind Chimes</a></li>
                                                    <li> <a href="#">Decorative pots, plates & jars</a></li>
                                                    <li> <a href="#">Fengshui</a></li>
                                                  <li> <a href="#">Indoor Fountains</a></li>
                                                  <li> <a href="#">Religious Idols</a></li>
                                                  <li> <a href="#">Vases</a></li>
                                                  
                                                  
                                                </ul>
                                            <ul><a href="#">GARDENING & PLANTERS</a></ul>
                                        </div>
                                            <div>
                                                <ul><a href="#">BATH</a>
                                                    <li> <a href="#">Bath Towel & Robes</a></li>
                                                    <li> <a href="#">Hand & Face Towels</a></li>
                                                    <li> <a href="#">Towel Sets</a></li>
                                                    <li> <a href="#">Bath Curtains & Mats</a></li>
                                                    <li> <a href="#">Bathroom Organisers</a></li>
                                                    <li> <a href="#">Laundry Baskets & Dryers</a></li>
                                                    <li> <a href="#">Holders & More</a></li>
                                                   
                                              </ul>
                                                  <ul><a href="#">HOME ESSENTIALS</a></ul>
                                              <ul><a href="#">FEATURED STORIES</a>
                                                    <li> <a href="#">GIFT For Everyone Under 999</a></li>
                                                    <li> <a href="#">Winter Carnival upto 60</a></li>
                                                    <li> <a href="#">Kids Room Min 40</a></li>
                                                    <li> <a href="#">Heritage Of India</a></li>
                                              </ul>
                                                    
                                            </div>
                                          
                                        </div>
                                    </div>
                                   <div class="brands-dropdown" onmouseover="showMenu('HomeBrandContent')" onmouseout="hideMenu('HomeBrandContent')">
                                        <a href="#">BRANDS</a>
                                        <div class="content-box brand-content" id="HomeBrandContent">
                                          <div>
                                            <ul><a href="#">EXCLUSIVE BRANDS</a>
                                                    <li> <a href="#">Indie Picks </a></li>
                                                    <li> <a href="#">Muji</a></li>
                                                    <li> <a href="#">Portico</a></li>
                                                    <li> <a href="#">Stellar Home</a></li>
                                                    <li> <a href="#">Bichauna</a></li>
                                                    <li> <a href="#">Home Expressions USA</a></li>
                                                    <li> <a href="#">Westa Home</a></li>
                                                </ul>
                                        </div>
                                          <div>
                                            <ul><a href="#">NEW TO EXPLORE</a>
                                                    <li> <a href="#">Marks & Spencer </a></li>
                                                    <li> <a href="#">HOMESAKE</a></li>
                                                    <li> <a href="#">Jaipur Pride</a></li>
                                                    <li> <a href="#">Arrabi</a></li>
                                                    <li> <a href="#">Rosarahome</a></li>
                                                    <li> <a href="#">HomeTown</a></li>
                                                    <li> <a href="#">Homez Sparrow</a></li>
                                                    <li> <a href="#">ExclusiveLane</a></li>
                                                    <li> <a href="#">Meyer</a></li>
                                                    <li> <a href="#">Order Happiness</a></li>
                                                    <li> <a href="#">Aapno Rajasthan</a></li>
                                                    <li> <a href="#">Random</a></li>
                                                    <li> <a href="#">Rangoli</a></li>
                                                    <li> <a href="#">Rubix Home</a></li>
                                                </ul>
                                        </div>
                                          <div>
                                            <ul><a href="#">FEATURED BRANDS</a>
                                                    <li> <a href="#">Home Centre </a></li>
                                                    <li> <a href="#">Raymond Home</a></li>
                                                    <li> <a href="#">Story At Home</a></li>
                                                    <li> <a href="#">Jaipur Fabric</a></li>
                                                    <li> <a href="#">Homefab India</a></li>
                                                    <li> <a href="#">Divine Casa</a></li>
                                                    <li> <a href="#">Home Sizzler</a></li>
                                                    <li> <a href="#">Swayam</a></li>
                                                    <li> <a href="#">DdEcor</a></li>
                                                    <li> <a href="#">Good Homes</a></li>
                                                    <li> <a href="#">Cortina</a></li>
                                                    <li> <a href="#">Romee</a></li>
                                                    <li> <a href="#">E Craft India</a></li>
                                                    <li> <a href="#">Bella casa</a></li>
                                                    <li> <a href="#">Aazeem</a></li>
                                                    <li> <a href="#">UniqChoice</a></li>
                                                    <li> <a href="#">Kuber Industries</a></li>
                                                </ul>
                                        </div>
                                            
                                </div>
                            </div>
                        </li>
                         
                        
                   </div>
                
                <div class="right-nav">
                    <div class="search-bar">
                        <input type="text" id="search" placeholder="Search AJIO">

                    </div>
                    <div onclick="showBox()" class="nav-icon-box nav-icon-box2">
                        <a href="#">
                            <img src="images/wishlistIcon.svg" alt="">
                        </a>
                    </div>
                    <div class="nav-icon-box">
                        <a href="#">
                            <img src="images/shopping-bag.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </div>
`;
}

function sidebar() {
  return `
<div id="mobile-filter">
  <div>
    <h4 id="burgundy">Refine By</h4>
  </div>
  <div class="py-1 border-bottom ml-3">
    <h6 class="font-weight-bold">Gender</h6>
    <div id="orange"><span class="fa fa-minus"></span></div>
    <form>
      <div class="form-group">
        <input type="checkbox" id="menFilter" />
        <label for="menFilter">Men Styles</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="womenFilter" />
        <label for="womenFilter">Women Styles</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="kidsFilter" />
        <label for="kidsFilter">Kids Styles</label>
      </div>
    </form>
  </div>
  <div class="py-2 border-bottom ml-3">
    <h6 class="font-weight-bold">Category</h6>
    <div id="orange"><span class="fa fa-minus"></span></div>
    <form>
      <div class="form-group">
        <input type="checkbox" id="shirtFilter" />
        <label for="shirtFilter">Shirts</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="tshirtFilter" />
        <label for="tshirtFilter">T-Shirts</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="jacketFilter" />
        <label for="jacketFilter">Jackets</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="trouserFilter" />
        <label for="trouserFilter">Trousers</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="shortsFilter" />
        <label for="shortsFilter">Shorts</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="topsFilter" />
        <label for="topsFilter">Tops</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="kurtasFilter" />
        <label for="kurtasFilter">Kurtas</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="sareeFilter" />
        <label for="sareeFilter">Saree</label>
      </div>
    </form>
  </div>
  <button id="filterButton">Filter</button>
</div>`;
}



function filterProducts() {
  let menFilter = document.getElementById("menFilter");
  let womenFilter = document.getElementById("womenFilter");
  let kidFilter = document.getElementById("kidsFilter");

  if (menFilter.checked == true) window.location.href = "./menStyles.html";

  if (womenFilter.checked == true) window.location.href = "./womenStyles.html";

  if (kidFilter.checked == true) window.location.href = "./kidsStyles.html";

  let queryURL = `http://localhost:3000/products/filter?items=${elem.products}`;
  let filterQuery = [];
  let shirtFilter = document.getElementById("shirtFilter");
  let tshirtFilter = document.getElementById("tshirtFilter");
  let jacketFilter = document.getElementById("jacketFilter");
  let trouserFilter = document.getElementById("trouserFilter");
  let shortsFilter = document.getElementById("shortsFilter");
  let topsFilter = document.getElementById("topsFilter");
  let kurtasFilter = document.getElementById("kurtasFilter");
  let sareeFilter = document.getElementById("sareeFilter");

  if (shirtFilter.checked == true) filterQuery.push("shirt");
  if (tshirtFilter.checked == true) filterQuery.push("tshirt");
  if (jacketFilter.checked == true) filterQuery.push("jacket");
  if (trouserFilter.checked == true) filterQuery.push("pants");
  if (shortsFilter.checked == true) filterQuery.push("shorts");
  if (topsFilter.checked == true) filterQuery.push("top");
  if (kurtasFilter.checked == true) filterQuery.push("kurta");
  if (sareeFilter.checked == true) filterQuery.push("saree");

  filterQuery.map((elem) => {
    queryURL = queryURL + elem + ",";
  });
  queryURL = queryURL.slice(0, -1);
  queryURL += "]";

  filteredData(queryURL);
}

async function filteredData(queryURL) {
  let res = await fetch(queryURL);
  let data = await res.json();
  data = data.products;
  console.log(data);
  renderProducts(data);
}



function sortFunctionality(data) {
  let selected = document.getElementById("naz-sort-products-option").value;

  if (selected == "default") {
    renderProducts(data);
  }
  if (selected == "Relevence") {
    shuffleArray(data);
  }
  if (selected == "Discount") {
    let array = data.slice();
    array.map((elem) => {
      let offer = Math.floor(
        ((elem.strikedOffPrice - elem.price) / elem.strikedOffPrice) * 100
      );
      elem.discount = offer;
    });
    array.sort((a, b) => {
      return b.discount - a.discount;
    });
    renderProducts(array);
  }

  if (selected == "lowtohigh") {
    let array = data.slice();
    array.sort((a, b) => {
      return a.price - b.price;
    });
    renderProducts(array);
  }

  if (selected == "hightolow") {
    let array = data.slice();
    array.sort((a, b) => {
      return b.price - a.price;
    });
    renderProducts(array);
  }
}

function shuffleArray(data) {
  let array = data.slice();
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  renderProducts(array);
}