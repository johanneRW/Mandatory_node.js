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

const gitTerminal = templateEngine.readPage("./public/pages/git_terminal/git_terminal.html")
const gitTerminalPage = templateEngine.renderPage(gitTerminal, {
    tabTitle: "Git + Terminal | Mandatory"
})

const toolsPlatform = templateEngine.readPage("./public/pages/tools_platform/tools_platform.html")
const toolsPlatformPage = templateEngine.renderPage(toolsPlatform, {
    tabTitle: "Tools and Platform | Mandatory"
})

const core_js = templateEngine.readPage("./public/pages/core_js/core_js.html")
const core_jsPage = templateEngine.renderPage(core_js, {
    tabTitle: "Core_js | Mandatory"
})

const webApp = templateEngine.readPage("./public/pages/web_app/web_app.html")
const webAppPage = templateEngine.renderPage(webApp, {
    tabTitle: "web application | Mandatory"
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

app.get("/gitTerminal", (req, res) => {
    res.send(gitTerminalPage)
})

app.get("/toolsPlatform", (req, res) => {
    res.send(toolsPlatformPage)
})

app.get("/webApplication", (req, res) => {
    res.send(webAppPage)
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