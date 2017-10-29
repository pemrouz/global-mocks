const { Writable } = require('stream')
    , { resolve } = require('path')
    , { min } = Math
    , fs = {
        existsSync: dir => true
      , createWriteStream(dir){ 
          const { files } = this
              , file = resolve(dir)
          files.written[file] = ''

          return new Writable({ 
            write(data, enc, next){ 
              files.written[file] += data
              next()
            }
          })
        }
      , files: {
          written: {}
        }
      , reset(){
          this.files.written = {}
        }
      }

function WebSocket(location) {
  this.location = location
  this.sent = []
  this.send = d => this.sent.push(d)
  WebSocket.sockets.push(this)
}

function fakeTimeout(fn, ms){
  fakeTimeout.timeouts = fakeTimeout.timeouts || []
  fakeTimeout.timeouts.push({ fn, ms })
  setTimeout(fn)
}

function Blob({ size }){
  this.size = size
}

Blob.prototype.slice = function(start, end) {
  return { start, end: min(end, this.size) }
}

module.exports = { 
  WebSocket
, fakeTimeout
, Blob
, fs
}