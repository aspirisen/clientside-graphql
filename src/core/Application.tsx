import { GraphQLProvider } from "./GraphQLProvider";
import { Hello } from "../components/Hello";

export function Application() {
  return (
    <GraphQLProvider>
      <Hello />
    </GraphQLProvider>
  );
}
