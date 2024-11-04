import {onEvent, sendEvent, startServer} from "soquetic"
import { signUp } from "./signupback.js"
import { login } from "./loginback.js"
import { favoritos, recibirFavoritos } from "./favoritos.js"
import { planes } from "./ciudad.js"
onEvent("signup", (data) => signUp(data))
onEvent("login", (data)=>login(data))
onEvent("favoritos", (data) => favoritos(data))
onEvent("recibirFavoritos",(data)=>recibirFavoritos(data) )
onEvent ("planes", planes)




startServer()