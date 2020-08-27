// File Upload
// 
var gr = 2;

function ekUpload() {
    function Init() {

        console.log("Upload Initialised");

        var fileSelect = document.getElementById('file-upload'),
            fileDrag = document.getElementById('file-drag'),
            submitButton = document.getElementById('submit-button');
        //fileSelect.remove();

        fileSelect.addEventListener('change', fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            // File Drop
            fileDrag.addEventListener('dragover', fileDragHover, false);
            fileDrag.addEventListener('dragleave', fileDragHover, false);
            fileDrag.addEventListener('drop', fileSelectHandler, false);
        }
    }

    function fileDragHover(e) {
        var fileDrag = document.getElementById('file-drag');

        e.stopPropagation();
        e.preventDefault();

        fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }

    function fileSelectHandler(e) {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
        // console.log(e.target.files)
        // ---------------------------taking uploaded image 
        const fe = e.target.files[0];
        const out1 = document.getElementById('up_img1');
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
        out1.src = event.target.result;
        });
        reader.readAsDataURL(fe);
        //----------------------------


        // Cancel event and hover styling
        fileDragHover(e);

        // Process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            parseFile(f);
            uploadFile(f);
        }
    }

    // Output
    function output(msg) {

        // Response
        var m = document.getElementById('messages');
        m.innerHTML = msg;
    }

    function parseFile(file) {

        console.log(file.name);
        output(
            '<strong>' + encodeURI(file.name) + '</strong>'
        );

        // var fileType = file.type;
        // console.log(fileType);
        var imageName = file.name;

        var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
        if (isGood) {
            console.log('reached here')
                //document.getElementById('start').classList.add("hidden");
                // document.getElementById('response').classList.remove("hidden");
            document.getElementById('notimage').classList.add("hidden");
            // Thumbnail Preview pandapdanapdnapdnapandapndapndapndapndapndapndppnpdnadnapdnaopdpdndppndapndapndapndapndapndapndapndapndapndapnadpndapndapndapndqpndapndapndapndapndapnadpndapndapnadpndapnadpndapdnadpnadpnadpnadpnaddpnpndapndapndapndapndapndapnda

            // document.getElementById('dir').classList.remove("hide");
            // document.getElementById('rot').classList.remove("hide");
            document.getElementById('colors').classList.remove("hide");
            if (document.getElementById('dirb').classList != "") {
                document.getElementById('file-image').classList.remove("hide");
                document.getElementById('file-image').src = URL.createObjectURL(file);
            } else {
                document.getElementById('back-image').classList.remove("hide");
                document.getElementById('back-image').src = URL.createObjectURL(file);
            }
            // document.getElementById('back-image').classList.remove("hide");
            // document.getElementById('back-image').src = URL.createObjectURL(file);
            console.log("url(\"" + URL.createObjectURL(file) + "\")");
            document.getElementById('cost').classList.remove("hide");
            // document.getElementById('file-image').style.backgroundImage = "url(\"" + URL.createObjectURL(file) + "\")";
            var xyz = document.getElementById('file-upload-form')
            document.getElementById('pic').classList.remove("hide"); //pic resize
            if (document.getElementById('or'))
                document.getElementById('or').remove(); //removingor
            // document.getElementById('diss').remove(); //removing text box
            xyz.remove();
            // document.getElementById('texx').classList.remove("hide"); // text resize
            document.getElementById('option').innerHTML = "Add text (optional)";
            console.log('removed')
            priceCal();
        } else {
            document.getElementById('file-image').classList.add("hidden");
            document.getElementById('notimage').classList.remove("hidden");
            document.getElementById('start').classList.remove("hidden");
            document.getElementById('response').classList.add("hidden");
            document.getElementById("file-upload-form").reset();
        }
    }

    function setProgressMaxValue(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.max = e.total;
        }
    }

    function updateFileProgress(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.value = e.loaded;
        }
    }

    function uploadFile(file) {
        // console.log(file)
        var xhr = new XMLHttpRequest(),
            fileInput = document.getElementById('class-roster-file'),
            pBar = document.getElementById('file-progress'),
            fileSizeLimit = 500000; // In Bytes  1KB = 1000 Bytes so here it is 500 KB.
        if (xhr.upload) {
            // Check if file is greater than file size limit of 500KB
            if (file.size >= fileSizeLimit ) {
                // Progress bar
                pBar.style.display = 'inline';
                xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
                xhr.upload.addEventListener('progress', updateFileProgress, false);

                // File received / failed
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        // Everything is good!

                        // progress.className = (xhr.status == 200 ? "success" : "failure");
                        // document.location.reload(true);
                    }
                };

                // Start upload
                xhr.open('POST', document.getElementById('file-upload-form').action, true);
                xhr.setRequestHeader('X-File-Name', file.name);
                xhr.setRequestHeader('X-File-Size', file.size);
                xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                //xhr.send(file);
            } else {
                alert('Please upload a larger file (> 500KB).');
                // alert('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
                window.location.reload();

            }
        }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
        Init();
    } else {
        document.getElementById('file-drag').style.display = 'none';
    }
}

function ekUpload1() {
    function Init() {

        console.log("Upload Initialised");

        var fileSelect = document.getElementById('file-upload'),
            fileDrag = document.getElementById('file-drag'),
            submitButton = document.getElementById('submit-button');
        //fileSelect.remove();

        fileSelect.addEventListener('change', fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            // File Drop
            fileDrag.addEventListener('dragover', fileDragHover, false);
            fileDrag.addEventListener('dragleave', fileDragHover, false);
            fileDrag.addEventListener('drop', fileSelectHandler, false);
        }
    }

    function fileDragHover(e) {
        var fileDrag = document.getElementById('file-drag');

        e.stopPropagation();
        e.preventDefault();

        fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }

    function fileSelectHandler(e) {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
        // console.log(e.target.files)

        // ---------------------------taking uploaded image 
        const fe = e.target.files[0];
        const out2 = document.getElementById('up_img2');
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
        out2.src = event.target.result;
        });
        reader.readAsDataURL(fe);
        //----------------------------


        // Cancel event and hover styling
        fileDragHover(e);

        // Process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            parseFile(f);
            uploadFile(f);
        }
    }

    // Output
    function output(msg) {

        // Response
        var m = document.getElementById('messages');
        m.innerHTML = msg;
    }

    function parseFile(file) {

        console.log(file.name);
        output(
            '<strong>' + encodeURI(file.name) + '</strong>'
        );

        // var fileType = file.type;
        // console.log(fileType);
        var imageName = file.name;

        var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
        if (isGood) {
            console.log('reached here')
                //document.getElementById('start').classList.add("hidden");
                //document.getElementById('response').classList.remove("hidden");
            document.getElementById('notimage').classList.add("hidden");
            if (document.getElementById('dirb').classList != "") {
                document.getElementById('file-image').classList.remove("hide");
                document.getElementById('file-image').src = URL.createObjectURL(file);
            } else {
                document.getElementById('back-image').classList.remove("hide");
                document.getElementById('back-image').src = URL.createObjectURL(file);
            }

            console.log("url(\"" + URL.createObjectURL(file) + "\")");
            var xyz = document.getElementById('file-upload-form')
            document.getElementById('pic').classList.remove("hide");
            //xyz.remove();
            console.log('removed')
            priceCal();
        } else {
            document.getElementById('file-image').classList.add("hidden");
            document.getElementById('notimage').classList.remove("hidden");
            document.getElementById('start').classList.remove("hidden");
            document.getElementById('response').classList.add("hidden");
            document.getElementById("file-upload-form").reset();
        }
    }

    function setProgressMaxValue(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.max = e.total;
        }
    }

    function updateFileProgress(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.value = e.loaded;
        }
    }

    function uploadFile(file) {

        var xhr = new XMLHttpRequest(),
            fileInput = document.getElementById('class-roster-file'),
            pBar = document.getElementById('file-progress'),
            // fileSizeLimit = 1024; // In MB
            fileSizeLimit = 500000; // In Bytes  1KB = 1000 Bytes so here it is 500 KB.

        if (xhr.upload) {
            // Check if file is less than x MB
            // if (file.size <= fileSizeLimit * 1024 * 1024) {
                
        // Check if file is greater than file size limit of 500KB
            if (file.size >= fileSizeLimit ) {
                // Progress bar
                pBar.style.display = 'inline';
                xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
                xhr.upload.addEventListener('progress', updateFileProgress, false);

                // File received / failed
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        // Everything is good!

                        // progress.className = (xhr.status == 200 ? "success" : "failure");
                        // document.location.reload(true);
                    }
                };

                // Start upload
                xhr.open('POST', document.getElementById('file-upload-form').action, true);
                xhr.setRequestHeader('X-File-Name', file.name);
                xhr.setRequestHeader('X-File-Size', file.size);
                xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                //xhr.send(file);
            } else {
                // output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
                alert('Please upload a larger file (> 500KB).');
                // alert('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
                window.location.reload();
            }
        }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
        Init();
    } else {
        document.getElementById('file-drag').style.display = 'none';
    }
}
ekUpload();