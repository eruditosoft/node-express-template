import { healthRouter } from "@/app/health/api/health-router";

import { baseUrl, Route } from "@/contexts/shared/data/endpoint-name";
import { userRouter } from "@/contexts/users/api/user-router";

const routes: Route[] = [
  {
    path: `${baseUrl}user`,
    component: userRouter,
  },
  {
    path: "/api/v1/health",
    component: healthRouter,
  },
];
export default routes;
