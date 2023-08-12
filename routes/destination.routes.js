const DestController = require("../controllers/destination.controller")

module.exports = (app) => {
    app.get("/api/test", DestController.testApi)
    app.get("/api/destinations", DestController.allDest)
    app.get("/api/destinations/:id", DestController.oneDest)
    app.post("/api/destinations", DestController.addDest)
    app.put("/api/destinations/:id", DestController.updateDest)
    app.delete("/api/destinations/:id", DestController.deleteDest)
}