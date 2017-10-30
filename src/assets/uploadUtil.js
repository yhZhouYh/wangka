var ImageUploadUtil = {
    _tempObjectURL: null,
    _canavs: null,
    _limitSize: 5 * 1024 * 1024,// 5M 5242880
    _imageAccept: ['image/jpg', 'image/jpeg', 'image/png'],
    _rules: [{
        size: 1 * 1024 * 1024,
        quality: 1
    }, {
        size: 5 * 1024 * 1024,
        quality: 0.6
    }],
    getDataURL: function (file, cb) {
        if (!this._validImageSizeAndType(file)) return false
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            cb(e.target.result)
        }
    },
    // 创建 URL 的 File 对象或者 Blob 对象
    getObjectURL: function (file) {
        var url = window.URL || window.webkitURL || window.mozURL;
        if (this._tempObjectURL != null) {
            url.revokeObjectURL(this._tempObjectURL)
            this._tempObjectURL = null;
        }
        this._tempObjectURL = url.createObjectURL(file);
        return this._tempObjectURL
    },
    // 释放 getObjectURL 创建的对象，优化内存
    // revokeObjectURL: function (objUrl) {
    //     if (objUrl) {
    //         window.URL.revokeObjectURL(objUrl);
    //     } else {
    //         for (var i = 0; i < this._tempObjectURL.length; i++) {
    //             window.URL.revokeObjectURL(this._tempObjectURL[i]);
    //         }
    //     }
    // },
    revokeObjectURL: function () {
        if (this._tempObjectURL.length) {
            for (var i = 0; i < this._tempObjectURL.length; i++) {
                window.URL.revokeObjectURL(this._tempObjectURL[i]);
            }
        }
    },
    creatCanvas: function (width, height) {
        var canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        this._canvas = canvas
    },
    destroy: function () {
        this._canvas = null
    },
    compressImage: function (file, quality, cb) {
        var that = this
        try {
            if (typeof (file) === "object" && file.size && file.type && that._validImageSizeAndType(file)) {
                that.canvas = null
                // $('#_canvas-image,#_img-canvas').remove();
                // $('body').append($('<canvas id="_canvas-image"  style="display:none;"></canvas><img id="_img-canvas" src=""" style="display:none;"/>'));
                var img = new Image()

                img.onload = function () {
                    // var canvas = document.getElementById('_canvas-image')
                    that.creatCanvas(this.width, this.height)
                    // canvas.width = this.width
                    // canvas.height = this.height
                    var ctx = that._canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
                    var dataUrl = null
                    if (typeof (quality) == "function") {
                        // 根据规则进行不同比例的压缩
                        if (file.size <= 1024 * 1024) {
                            quality({
                                bolb: file,
                                dataUrl: canvas.toDataURL(file.type)
                            })
                        } else if (file.size <= 5 * 1024 * 1024) {
                            dataUrl = canvas.toDataURL(file.type, 0.6)
                            quality({
                                bolb: that.dataURLtoBlob(dataUrl),
                                dataUrl: dataUrl
                            })
                        }

                    } else {
                        dataUrl = that._canvas.toDataURL(file.type, (quality * 1).toFixed(3) * 1)
                        cb({
                            bolb: that.dataURLtoBlob(dataUrl),
                            dataUrl: dataUrl
                        })
                    }
                }
                img.src = that.getObjectURL(file)
            } else {
                return false
            }
        } catch (e) {
            console.error("Caught an error when compress this image( " + file.name + ")")
        } finally {
        }
    },
    dataURLtoBlob: function (dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },
    // 验证文件类型和大小
    _validImageSizeAndType: function (file) {
        if (this._imageAccept.indexOf(file.type) < 0) {
            console.error('Unexpect file type (expect:' + this._imageAccept.toString() + ")")
            return false
        }
        if (file.size > this._limitSize) {
            console.error("The size must be less than " + this._limitSize)
            return false
        }
        return true
    }
}

export default ImageUploadUtil