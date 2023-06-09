export default function Home () {
    return (
    <>
    <h1>Home Page of the Webseite</h1>
    <p>This is {process.env.NODE_ENV} environmet</p>
    <p>
        data coming from url{" "}
        {process.env.NODE_ENV === "development" ? 
        process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL}
    </p>
    </>
    )
}