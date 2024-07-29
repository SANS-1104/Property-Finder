import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";  // HomeComponent consists of search bar and all images section as (housing-location components)
import path from "path";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path : '',
        component : HomeComponent,
        title : 'Home Page'
    },
    {
        path:'details/:id',
        component : DetailsComponent,
        title : 'Details Page'
    }
]

export default routeConfig;