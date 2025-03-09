import {Contact} from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { Portfolio } from "@/components/Portfolio";


export default function Home(){
   return(
    <>
    <Navbar/>
    <Hero/>
    <Stack/>
    <Portfolio/>
    <LogoAnimation/>
    <KeyMetrics/>
    <Services/>
    <Contact/>
    </>
   )
}