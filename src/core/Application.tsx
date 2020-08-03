import React from "react";
import { GraphQL } from "./GraphQL";
import { Hello } from "../components/Hello";

export function Application() {
  return (
    <GraphQL>
      <Hello />
    </GraphQL>
  );
}
