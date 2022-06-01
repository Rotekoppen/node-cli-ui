#!/usr/bin/env node
var cliui = require("./main.js");

cliui.addCommand("ping", {
  function: () => {
    process.stdout.write("pong\n") // Write to terminal, remember newline
    cliui.readline.prompt(); // Print the prompt again
  },
  helpText: "Responds with pong"
});

cliui.startCLI();
