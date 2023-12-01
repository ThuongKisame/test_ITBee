import Header from "../../components/common/Header";

function DefaultLayout({ children }) {
    return ( <div >
        <Header/>
         { children }</div> );
}

export default DefaultLayout;