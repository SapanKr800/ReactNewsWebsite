import { NavLink, Link} from "react-router-dom";


function Nav() {
    return (
  <>



<div className="container-fluid">
 

 <nav className="sticky-top head-content">
   <div className="row   ">
     <div className=" col-md-6 col-sm-6 col-6 brand-name ">

       <h3>
         <Link to="/"> Magazine <sup> TM</sup> </Link>
       </h3>


     </div>

     <div className=" col-md-6 col-sm-6 col-6 social-icon">
       <div className="menu-icon">

         <Link to="https://www.facebook.com/sapan.yadav.520" target="_blank" rel="noreferrer"> <i
             className="fa fa-facebook-square"></i></Link>
         <Link to="https://github.com/SapanKr800" target="_blank" rel="noreferrer"> <i className="fa fa-github"></i> </Link>
         <Link to="https://www.linkedin.com/in/sapan-kumar-12b9ab175" target="_blank" rel="noreferrer"> <i
             className="fa fa-linkedin-square"></i> </Link>

       </div>
     </div>
   </div>

 </nav>
 <div className="row">
      <div className=" col-md-12 category">
        

      <NavLink className="nav-link" activeClassName="active" exact to="/">General </NavLink>
      <NavLink className="nav-link" exact to="/business">Business</NavLink>
      <NavLink className="nav-link" exact to="/sports">Sports</NavLink>
      <NavLink className="nav-link" exact to="/tech">Tech</NavLink>
      <NavLink className="nav-link" exact to="/entertainment">Entertainment</NavLink>
       
       

      </div>
    </div>
</div>


    <hr/>

  </>
  
    );
  }
  
  export default Nav;
  