import { Router } from "express";

type Version = "v1" | "v2";

//TODO mejorar para que sea un pattern el string
type Path = `/api/${Version}/${string}`;

export interface Route {
  path: Path;
  component: Router;
}

export const baseUrl: Path = "/api/v1/";
