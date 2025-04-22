# FastMCP Example

## About FastMCP

FastMCP is a powerful and efficient tool designed to streamline your workflow. For more details, visit the official repository:

[FastMCP GitHub Repository](https://github.com/punkpeye/fastmcp)

## Installation

To install the necessary dependencies, run the following command:

```sh
npm i
```

## Use Case

### Claude Desktop Integration

To integrate FastMCP with Claude Desktop, you can use the following configuration file: `claude_desktop_config.json`.

Example configuration:

```json
{
  "mcpServers": {
    "my-mcp-server": {
      "command": "{Path}node",
      "args": [
        "{Path}node_modules/tsx/dist/cli.mjs",
        "{Path}src/index.ts"
      ]
    }
  }
}
```

Replace `{Path}` with the appropriate paths on your system to ensure proper functionality.

### Cline

VSCode 👉 Cline 👉 MCP Servers 👉 Installed 👉 Configure 👉 cline_mcp_settings.json 👉 Restart

### Roo Code

`.roo/mcp.json`

### Copilot Agent

VSCode 👉 Settings 👉 Search `MCP` 👉 settings.json 👉 Start

### Cursor

`.cursor/mcp.json`
