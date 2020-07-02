# https://code-maven.com/static-server-in-python
#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import re


class StaticServer(BaseHTTPRequestHandler):

    def do_GET(self):
        root = os.path.join(os.path.dirname(
            os.path.dirname(os.path.abspath(__file__))), '')
        # print(self.path)
        if self.path == '/':
            filename = root + '/server/queries/1.json'
        else:
            filename = root + self.path

        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        if filename[-4:] == '.css':
            self.send_header('Content-type', 'text/css')
        elif filename[-5:] == '.json':
            self.send_header('Content-type', 'application/json')
        elif filename[-3:] == '.js':
            self.send_header('Content-type', 'application/javascript')
        elif filename[-4:] == '.ico':
            self.send_header('Content-type', 'image/x-icon')
        else:
            self.send_header('Content-type', 'text/html')
        self.end_headers()
        with open(filename, 'r') as file:
            data = file.read().replace('\\', '\\\\').replace(
                "`", "\\`").replace("}{", "},{").replace("\"]", "\"")
            fixed = re.sub(
                r"\"src\":(.*)},\n", "\"src\":\\1}],\n", data)
            html = bytes(fixed, 'utf8')
            self.wfile.write(html)


def run(server_class=HTTPServer, handler_class=StaticServer, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print('Starting httpd on port {}'.format(port))
    httpd.serve_forever()


run()

# vim: expandtab
