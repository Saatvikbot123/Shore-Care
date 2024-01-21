from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from io import BytesIO
import base64
import pandas as pd
import matplotlib.pyplot as plt


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        if self.path == '/api/data':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            image = self.create_plot(data)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = json.dumps({"image": image}).encode('utf-8')
            self.wfile.write(response)

    def create_plot(self, data):
        # Convert the dictionary to a pandas DataFrame
        df = pd.DataFrame(list(data.items()), columns=['Trash Type', 'Quantity']).set_index('Trash Type')

        # Create the plot
        ax = df.plot(kind='bar')
        plt.title("Beach Trash Statistics")
        plt.ylabel("Quantity")

        # Save the plot to a BytesIO object
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        # Encode the plot as a base64 string
        image_png = buffer.getvalue()
        buffer.close()
        return base64.b64encode(image_png).decode('utf-8')


def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print('Starting httpd...')
    httpd.serve_forever()


if __name__ == '__main__':
    run()