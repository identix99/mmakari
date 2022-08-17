import img1 from "../../src/assets/img/pro1.png";
import img2 from "../../src/assets/img/pro2.png";
import img3 from "../../src/assets/img/pro3.png";
import img4 from "../../src/assets/img/pro4.png";
import img5 from "../../src/assets/img/pro5.png";
import img6 from "../../src/assets/img/pro6.png";
 
//rating imgs
import Star1 from "../assets/img/star1.png";
import Star2 from "../assets/img/star2.png";

//inner bigslider img's
import poster1 from "../assets/img/productPage/poster1.png";
import poster2 from "../assets/img/productPage/poster2.png";
import poster3 from "../assets/img/productPage/poster3.png";
import poster4 from "../assets/img/productPage/poster4.png";
import poster5 from "../assets/img/productPage/poster5.png";
import poster6 from "../assets/img/productPage/poster6.png";
import poster7 from "../assets/img/productPage/poster7.png";
import poster8 from "../assets/img/productPage/poster8.png";

//gallary photos 
import gal1 from "../assets/img/productPage/gal1.png";
import gal2 from "../assets/img/productPage/gal2.png";
import gal3 from "../assets/img/productPage/gal3.png";
import gal4 from "../assets/img/productPage/gal4.png";
import gal5 from "../assets/img/productPage/gal5.png";
import gal6 from "../assets/img/productPage/gal6.png";
import gal7 from "../assets/img/productPage/gal7.png";
import gal8 from "../assets/img/productPage/gal8.png";



// Photo Gallery
import item1 from "../assets/img/productPage/1.png";
import item2 from "../assets/img/productPage/2.png";
import item3 from "../assets/img/productPage/3.png";
import item4 from "../assets/img/productPage/4.png";
import item5 from "../assets/img/productPage/5.png";
import item6 from "../assets/img/productPage/6.png";

export const CardData = {
  Cards: [
    {
      id: "1",
      CardTopimg: [img1 , img1 , img1],
      propertystatus: "rent",
      bedrooms: "5",
      bathtubs: "3",
      area: "2400",
      price: "25000",
      location: "Sheikh Mohammed bin Rashid Blvd",
      properttheme : "Lifestyle Location" ,

      productpage :{
        id_x :"1",
        pagetitle : "Lifestyle Location" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "34",
        ButtonsDetils : ["Bad 5" , "SQ.FT 2400", "Garage 2" ,"Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "Downtown Dubai" ,
        Description : "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise. <br/> <br/> Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise." ,
        PropertyDetailInfo : {
          PropertyID : "HZ29" ,
          HomeArea : "2400 Sqft" ,
          Rooms : "5" ,
          Baths : "3" ,
          YearBuilt : "1992" ,
          LotArea : "HZ29" ,
          LotDimensions : "120 Sqft" ,
          Beds:  "5",
          Price: "231622.93 AED",
          PropertyStatus : "1992" ,
          PropertyVideo : "https://www.youtube.com/embed/9xwazD5SyVg" ,
          googlemap : {
            lati : "21.175037338812114",
            lat : " 72.82631498149652"
          },
          gallary : [ gal1,gal2,gal3,gal4,gal5,gal6,gal7,gal8 ] ,
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1   ] 
        }
      }
    },
    {
      id: "2",
      CardTopimg: [img2 , img2 , img2],
      propertystatus: "sell",
      bedrooms: "4",
      bathtubs: "3",
      area: "2200",
      price: "28000",
      location: "Emaar Blvd - Downtown Dubai",
      properttheme : "Residencial Location" ,

      productpage :{
        id_x :"2",
        pagetitle : "Residencial Location" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star1 ],
        reviewText : "28",
        ButtonsDetils : ["Bad 5" , "SQ.FT 2200", "Garage 2" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "57QJ+P78 - Downtown Dubai - Dubai - United Arab Emirates" ,
        Description : "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise. <br/> <br/> Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise." ,
        PropertyDetailInfo : {
          PropertyID : "HZ29" ,
          HomeArea : "2200 Sqft" ,
          Rooms : "4" ,
          Baths : "3" ,
          YearBuilt : "1999" ,
          LotArea : "HZ27" ,
          LotDimensions : "145 Sqft" ,
          Beds:  "5",
          Price: "28000 AED",
          PropertyStatus : "1997" ,
          PropertyVideo : "https://www.youtube.com/embed/9xwazD5SyVg" ,
          googlemap : {
            lati : "20.59744721502637",
            lat : "73.15944399371169" ,
          },
          gallary : [ gal1,gal2,gal3,gal4,gal5,gal6,gal7,gal8 ] ,
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1   ] 
        }
      }
    },
    {
      id: "3",
      CardTopimg: [img3 , img3 , img3],
      propertystatus: "buy",
      bedrooms: "8",
      bathtubs: "1",
      area: "2148",
      price: "44000",
      location: "Sheikh Mohammed bin Rashid Blvd",
      properttheme : "Studio Location" ,

      productpage :{
        id_x :"3",
        pagetitle : "Studio Location" ,
        ratingProduct : [Star1 ,Star1 , Star1 , Star1 , Star2 ],
        reviewText : "34",
        ButtonsDetils : ["Bad 3" , "SQ.FT 3500 ", "Garage 1" ," Baths 3"] ,
        BigSiliderimg : [poster1,poster2,poster3,poster4,poster5,poster6,poster7, poster8],
        smallSliderimg : "https://picsum.photos/200/165?random=" ,
        locality : "2A Street - Jumeirah 1 - Dubai - United Arab Emirates" ,
        Description : "Port De La Mer is set within the prestigious Jumeirah 1 district, and it is an inspirational beachfront destination. With fresh contemporary design, it boasts premium dining, shopping, entertainment, leisure and hospitality experiences along 2.5 kilometers of pristine beaches. The residential communities here benefit from excellent connectivity to the city’s most popular attractions, and easy accessibility to Dubai’s international airports." ,
        PropertyDetailInfo : {
          PropertyID : "HZ25" ,
          HomeArea : "155 Sqft" ,
          Rooms : "5" ,
          Baths : "3" ,
          YearBuilt : "1991" ,
          LotArea : "HZ21" ,
          LotDimensions : "112 Sqft" ,
          Beds:  "5",
          Price: "44000 AED",
          PropertyStatus : "1990" ,
          PropertyVideo : "https://www.youtube.com/embed/9xwazD5SyVg" ,
          googlemap : {
            lati : "22.188924962416813",
            lat : " 69.20642515300649"
          },
          gallary : [ gal1,gal2,gal3,gal4,gal5,gal6,gal7,gal8 ] ,
          PhotoGallary :  [ item3 , item2 ,item5 ,item6 ,item4 ,item1] 
        }
      }
    },





    // {
    //   id: "4",
    //   CardTopimg: [img4 , img4 , img4],
    //   propertystatus: "rent",
    //   bedrooms: "8",
    //   bathtubs: "6",
    //   area: "1800",
    //   price: "30000",
    //   location: "57VM+QR5 - Al Asayel St- Downtown Dubai",
    //   properttheme : "Studio Location"
    // },
    // {
    //   id: "5",
    //   CardTopimg: [img5 , img5 , img5],
    //   propertystatus: "buy",
    //   bedrooms: "7",
    //   bathtubs: "2",
    //   area: "5000",
    //   price: "60000",
    //   location: "57VM+QR5 - Al Asayel St- Downtown Dubai",
    //   properttheme : "Studio Location"
    // },
    // {
    //   id: "6",
    //   CardTopimg: [img6 , img6 , img6],
    //   propertystatus: "sell",
    //   bedrooms: "5",
    //   bathtubs: "3",
    //   area: "4000",
    //   price: "40000",
    //   location: "Emaar Blvd - Downtown Dubai",
    //   properttheme : "Residencial Location"
    // },




    // {
    //   id: "7",
    //    CardTopimg: [img6 , img6 , img6],
    //   propertystatus: "rent",
    //   bedrooms: "10",
    //   bathtubs: "1",
    //   area: "4400",
    //   price: "18000",
    //   location: "Sheikh Mohammed bin Rashid Blvd",
    //   properttheme : "lifestyle Location"
    // },
    // {
    //   id: "8",
    //   CardTopimg: [img1 , img1 , img1],
    //   propertystatus: "sell",
    //   bedrooms: "3",
    //   bathtubs: "5",
    //   area: "1200",
    //   price: "21700",
    //   location: "Emaar Blvd - Downtown Dubai",
    //   properttheme : "lifestyle Location"
    // },
    // {
    //   id: "9",
    //   CardTopimg: [img2 , img2 , img2],
    //   propertystatus: "but",
    //   bedrooms: "10",
    //   bathtubs: "3",
    //   area: "78257",
    //   price: "74578",
    //   location: "Sheikh Mohammed bin Rashid Blvd",
    //   properttheme : "lifestyle Location"
    // },
    // {
    //   id: "10",
    //   CardTopimg: [img3 , img3 , img3],
    //   propertystatus: "rent",
    //   bedrooms: "3",
    //   bathtubs: "2",
    //   area: "7800",
    //   price: "70000",
    //   location: "57VM+QR5 - Al Asayel St- Downtown Dubai",
    //   properttheme : "Studio Location"
    // },
    // {
    //   id: "11",
    //   CardTopimg: [img4 , img4 , img4],
    //   propertystatus: "buy",
    //   bedrooms: "4",
    //   bathtubs: "5",
    //   area: "9000",
    //   price: "91000",
    //   location: "57VM+QR5 - Al Asayel St- Downtown Dubai",
    //   properttheme : "Studio Location"
    // },
    // {
    //   id: "12",
    //   CardTopimg: [img5 , img5 , img5],
    //   propertystatus: "sell",
    //   bedrooms: "5",
    //   bathtubs: "1",
    //   area: "4800",
    //   price: "10000",
    //   location: "Emaar Blvd - Downtown Dubai",
    //   properttheme : "Residencial Location"
    // },
    // {
    //   id: "13",
    //   CardTopimg: [img6 , img6 , img6],
    //   propertystatus: "sell",
    //   bedrooms: "3",
    //   bathtubs: "1",
    //   area: "4000",
    //   price: "40000",
    //   location: "Emaar Blvd - Downtown Dubai",
    //   properttheme : "Residencial Location"
    // },
  ],
  Filldata : null ,
};
