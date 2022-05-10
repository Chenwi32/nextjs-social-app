import Loader from "../../components/Loader";

const userName = () => {
    return (
        <div>
            <h1>Another page in Dynamic Directory</h1>
            <Loader show={true}/>
        </div>
    );
}

export default userName;