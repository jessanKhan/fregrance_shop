 const baseUrl = () => {
    if(process.env.NODE_ENV !== 'production'){
        return 'https://' + process.env.API_PRODUCTION
    }else if(process.env.NODE_ENV !== 'development'){
        return 'http://' + process.env.API_DEVELOPMENT
    }
}

export default baseUrl