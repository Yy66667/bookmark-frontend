import { Download } from "./Hero/Download";
import { FAQ } from "./Hero/FAQ";
import { Features } from "./Hero/Features";
import { Home } from "./Hero/Home";
import { Subscribe } from "./Hero/Subscribe";

export function Hero(){
    return(
        <>
        <Home />
        <Features />
        <Download />
        <FAQ />
        <Subscribe />
        </>
    )
}