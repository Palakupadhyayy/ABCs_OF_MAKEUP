import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => { //Here, children represents whatever content we pass inside the App.js under the <Layout> .. </Layout>
  return (
    <div>
        <Navbar title="ABC's of MakeUp"/>
            <main>         {/* dynamically renders the page’s specific content — like your About, Products, etc. */}
                {children}
            </main>
        <Footer/>
    </div>
  );
}

export default Layout;


