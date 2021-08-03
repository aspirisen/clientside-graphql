import * as path from "path";
import * as webpack from "webpack";
import exec from "exec-sh";

export class GraphqlSchemaCreator {
  public static pluginName = "GraphqlSchemaCreator";

  public apply(compiler: webpack.Compiler) {
    compiler.hooks.environment.tap(
      GraphqlSchemaCreator.pluginName,
      this.generate
    );

    compiler.hooks.afterCompile.tap(
      GraphqlSchemaCreator.pluginName,
      this.generate
    );
  }

  private generate() {
    const filePath = require.resolve("./createSchemaFile.ts");

    exec
      .promise(`npx ts-node ${filePath}`, {
        cwd: path.resolve(__dirname, "../../"),
      })
      .catch((e) => console.error(e));
  }
}
