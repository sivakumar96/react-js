import { useRouteError } from "react-router";

const Error1 = () => {

    const err = useRouteError();
    console.log(err)

    return (
        <div>
            <h1>oopss!!!</h1>
            <h2>Something went wrong !!</h2>
            <h3>{err.status} : {err.statusText} : {err.data}</h3>
        </div>
    )
}

export default Error1;