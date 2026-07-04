import Landingpage from "./Landingpage";
import Loginpage from "./Loginpage";
import Productspage from "./Productspage";
import Signuppage from "./Signuppage";

class Index{
    constructor(page){
        this.page = page;
        this.landingpage = new Landingpage(page);
        this.signuppage = new Signuppage(page);
        this.loginpage = new Loginpage(page);
        this.productpage = new Productspage(page);
    }
}
export default Index;