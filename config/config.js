const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "secret",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://Expenseadmin:admin123@cluster0.f8jlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
}
export default config;