from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from io import BytesIO
import base64
import matplotlib.pyplot as plt
import pandas as pd

class RequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_POST(self):
        self._set_headers()
        length = int(self.headers['Content-Length'])
        post_data = json.loads(self.rfile.read(length))

        # Create your plot here using the post_data
        plt.figure()
        plt.plot([1, 2, 3], [4, 5, 6])  # Replace with your own data and plotting code
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)
        image_data = base64.b64encode(buffer.getvalue()).decode('utf-8')

        # Send the base64-encoded image data
        self.wfile.write(json.dumps({"image": image_data}).encode())

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print('Server running at http://localhost:8000/')
    httpd.serve_forever()

if __name__ == '__main__':
    run()