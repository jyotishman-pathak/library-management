

const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey : process.env.IMAGEKIT_PRIVATE_KEY!
        },
        DatabaseUrl : process.env.NEXT_DATABASE_URL!

    }

}

export default config;