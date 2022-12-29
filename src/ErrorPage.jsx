import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <div className="error-page">
            <h1 className="error-title">Oops!</h1>
            <p className="error-unexpected">An unexpected error has occurred</p>
            <p className="error-message">{ error.statusText || error.message }</p>
        </div>
        
    )
}

export default ErrorPage