const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "secret",
    mongoUri: process.env.MONGODB_URI || "URL"
}
export default config;