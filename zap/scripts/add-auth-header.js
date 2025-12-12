# Python hook script — zap-api-scan.py supports --hook for Python files
def zap_api_scan_hook(request, response, api_scan):
    if "/api/admin/addUser" in request.url:
        request.headers["Authorization"] = "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj9lPz8/P2c="
        request.headers["Content-Type"] = "application/json"
        request.headers["Accept"] = "application/json"
    return request
