// MCPサーバー (ClaudeDesktop対応) - FastMCP + stdio

import { FastMCP } from "fastmcp";
import { z } from "zod";

// サーバーのインスタンス作成
const server = new FastMCP({
  name: "ClaudeDesktop Echo Server",
  version: "1.0.0",
});

// "echo"ツールを追加
server.addTool({
  name: "echo",
  description: "入力されたテキストをそのまま返します",
  parameters: z.object({
    text: z.string(),
  }),
  async execute(args) {
    return {
      content: [
        { type: "text", text: `${args.text} - example` }
      ]
    };
  },
});

// stdioトランスポートでサーバー起動 (ClaudeDesktop用)
await server.start({
  transportType: "stdio",
});