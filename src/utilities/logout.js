const logout = async (app, context) => {
    try {
        await app
            .auth()
            .signOut()
            .then(() => {
                context.setLoggedUser(null);
            });
    } catch (err) {
        console.info(err);
    }
}

export default logout;