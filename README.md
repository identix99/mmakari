

//go to sell page click on header sell link 
//and click the property card and get dymaic data for particular product 

#issue in redux in ( productpage.jsx ) component   //this is path == components/productpage-compo

isuue in when i get product wise data on product page by redux i get filted data for product but



this code is working -----> 
 const {pageid} = useParams();
  const  pagedata = useSelector((state) => state.layer1.Filldata);
  const dispatch = useDispatch();
    console.log(pageid);
 

 
  
 
 

 // when is try to print this  {pagedata} object first time print but when is refresh erorr happend

  console.log(pagedata.id);
  
========> go to  components/productpage-compo for code

  useEffect(() => {
   dispatch(Filterdataproduct(pageid))
  },[pageid])
