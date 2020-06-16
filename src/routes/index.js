import productsRouter from "./products";

function init(app) {
	// redirect to doc
	app.get("/", (req, res) => {
		res.redirect("/api/doc");
	});

	// products router
	app.use("/api/products", productsRouter);
}

const router = { init: init };

export default router;
