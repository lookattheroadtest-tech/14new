function sender(msg, initiator, helper) {
    var uri = msg.getRequestHeader().getURI().toString();
    if (uri.includes("/api/admin/addUser")) {
        msg.getRequestHeader().setHeader("Authorization", "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj9lPz8/P2c=");
        msg.getRequestHeader().setHeader("Content-Type", "application/json");
        msg.getRequestHeader().setHeader("Accept", "application/json");
    }
    return msg;
}

function getName() { return "Force Admin Token Header"; }
