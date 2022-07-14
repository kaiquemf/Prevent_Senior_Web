import { Router } from './router.js';
import { toSwitch } from './search.js';

const router = new Router()

router.add("/Home", "/html/Home.html")
router.add("/Area-do-Beneficiario", "/html/Patient_Area.html")
router.add("/explorer", "/html/explorer.html")
router.add(404, "/html/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

toSwitch()