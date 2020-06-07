#!/usr/bin/env python
# coding: utf-8
import sys
import cherrypy

class Root(object):
    @cherrypy.expose
    def server(self):
        return 'Wazappppp!'

if __name__ == '__main__':
    cherrypy.config.update({
        'server.socket_host': '0.0.0.0',
        'server.socket_port': 8000
    })
    
    cherrypy.quickstart(Root())
