import { Home } from "@screen/Home"
import { Problem1 } from "@screen/Problem1"
import { Problem2 } from "@screen/Problem2"
import { WalletPage } from "@screen/Problem3"

export interface IRouteConfig {
    name: string
    path: string
    component: JSX.Element
}

export const routes: Array<IRouteConfig> = [
    {
        name: "home",
        path: "/",
        component: (
            <Home />
        ),
    },
    {
        name: "Problem1",
        path: "/problem1",
        component: (
            <Problem1 />
        ),
    },
    {
        name: "Problem2",
        path: "/problem2",
        component: (
            <Problem2 />
        ),
    },
    {
        name: "Problem3",
        path: "/problem3",
        component: (
            <WalletPage />
        ),
    },
]
