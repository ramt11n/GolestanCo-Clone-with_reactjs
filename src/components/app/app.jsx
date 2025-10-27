import Counter from "../counter/counter";
import Footer from "../footer/footer";
import Ghorekeshi from "../ghorekeshi/ghorekeshi";
import Introduce from "../introduce/introduce";
import Majale from "../majale/majale";
import Nav from "../nav/Nav";
import Products from "../products/products";
import Responsibility from "../responsibiltiy/responsibility";


const App = () => {
    return(
        <>
            <Nav />
            <Ghorekeshi />
            <Introduce />
            <Counter />
            <Products />
            <Majale />
            <Responsibility />
            <Footer />
        </>
    )
}

export default App;