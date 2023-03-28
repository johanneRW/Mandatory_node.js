import express from "express"
import bodyParser from "body-parser"

const app = express()

//import path from "path"

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

import templateEngine from "./util/templateEngine.js"

const main = templateEngine.readPage("./public/pages/main/main.html")
const mainPage = templateEngine.renderPage(main, {
    tabTitle: "Main | Mandatory"
})

const git_deploy = templateEngine.readPage("./public/pages/git_deploy/git_deploy.html")
const git_deployPage = templateEngine.renderPage(git_deploy, {
    tabTitle: "Git + Deploye | Mandatory"
})

const frontend = templateEngine.readPage("./public/pages/Frontend/frontend.html")
const frontendPage = templateEngine.renderPage(frontend, {
    tabTitle: "Frontend | Mandatory"
})

const core_js = templateEngine.readPage("./public/pages/core_js/core_js.html")
const core_jsPage = templateEngine.renderPage(core_js, {
    tabTitle: "Core_js | Mandatory"
})

const backend = templateEngine.readPage("./public/pages/backend/backend.html")
const backendPage = templateEngine.renderPage(backend, {
    tabTitle: "Backend | Mandatory"
})

const admin = templateEngine.readPage("./public/pages/admin/admin.html")
const adminPage = templateEngine.renderPage(admin, {
    tabTitle: "Admin| Mandatory"
})

const edit = templateEngine.readPage("./public/pages/edit/edit.html")
const editPage = templateEngine.renderPage(edit, {
    tabTitle: "Edit | Mandatory"
})


app.get("/", (req, res) => {
    res.send(mainPage);
})

app.get("/git_deploy", (req, res) => {
    res.send(git_deployPage)
})

app.get("/backend", (req, res) => {
    res.send(backendPage)
})

app.get("/frontend", (req, res) => {
    res.send(frontendPage)
})

app.get("/core_js", (req, res) => {
    res.send(core_jsPage)
})

app.get("/admin", (req, res) => {
    res.send(adminPage)
})

app.get("/edit", (req, res) => {
    res.send(editPage)
})

app.post("/edit", (req, res) => {
    console.log(req.body.title)
    console.log(req.body.contents)
    res.send(`Saved your page:<br>Title: ${req.body.title}<br>Contents:<br>${req.body.contents}`)
})

app.listen(8080, (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Server is running on port", 8080)
})