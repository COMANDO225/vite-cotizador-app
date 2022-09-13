const Error = ({children}) => {
    return (
        <div className="block bg-red-200 text-center py-2 mt-5 px-4 font-medium rounded text-red-500">
            <p>{children}</p>
        </div>
    );
}

export default Error;