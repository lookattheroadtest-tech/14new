// ZAP Active Scan Script — forces your exact token on EVERY request
function scanNode(ps, node, msg) {
    // Force the exact Authorization header
    msg.getRequestHeader().setHeader("Authorization", "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj9lPz8/P2c=");
}

// This script runs on every request during active scan
function getName() { return "Force Admin Token"; }
function getId() { return 99999; }
