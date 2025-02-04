
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
            <div className="text-3xl font-bold underline">hello</div>
        ),
    },
]
