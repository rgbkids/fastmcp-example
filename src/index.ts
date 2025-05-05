import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
  name: "My MCP Server",
  version: "1.0.0",
});

server.addTool({
  name: "myMCPServer",
  description: "Returns the input text as-is",
  parameters: z.object({
    text: z.string(),
  }),
  async execute(args) {
    return {
      content: [
        { type: "text", text: myMCPServer(args.text) }
      ]
    };
  },
});

await server.start({
  transportType: "stdio",
});

function myMCPServer(text: string) {
  return `${text} by myMCPServer`
}
